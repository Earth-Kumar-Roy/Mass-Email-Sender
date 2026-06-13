function doGet() {
  return HtmlService.createTemplateFromFile('HTMLEmail')
    .evaluate()
    .setTitle("Mass Email Sender - EKR")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function sendBulkEmails(recipients, subject, body, senderName, attachments) {
  const emailOptions = {
    name: senderName,
    htmlBody: body,
    body: body.replace(/<[^>]*>/g, '')
  };
  
  if (attachments && attachments.length > 0) {
    emailOptions.attachments = attachments.map(function(file) {
      const decodedBytes = Utilities.base64Decode(file.bytes);
      return Utilities.newBlob(decodedBytes, file.type, file.name);
    });
  }

  recipients.forEach(function(recipient) {
    MailApp.sendEmail(recipient, subject, emailOptions.body, emailOptions);
  });

  try {
    const userEmail = Session.getActiveUser().getEmail();
    if (userEmail) {
      const completionSubject = "Protocol Verified: Mass Email Batch Dispatched";
      const completionBody = "Your bulk execution loop finished successfully.\n\n" +
                             "Metrics Summary:\n" +
                             "- Display Alias Used: " + senderName + "\n" +
                             "- Total Target Nodes Notified: " + recipients.length + "\n" +
                             "- Subject Layer: " + subject + "\n" +
                             "- Completion Timestamp: " + Utilities.formatDate(new Date(), "GMT+5:30", "dd-MM-yyyy HH:mm:ss") + "\n\n" +
                             "All automated execution pathways resolved.";
      MailApp.sendEmail(userEmail, completionSubject, completionBody);
    }
  } catch(e) {
    // Fail silently if directory configuration cannot resolve active user metadata context
  }
  return "Protocol Complete. " + recipients.length + " vectors notified successfully.";
}
