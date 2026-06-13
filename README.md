# Mass Email Sender

A high-performance, single-page bulk email engine built on the **Google Apps Script** runtime and styled with a sleek, responsive cyber-blue terminal layout using **Tailwind CSS**. It streamlines communication pipelines by allowing instant HTML template broadcasts directly through native Gmail servers with secure payload constraints.

---

## 💡 Problem & Solution Space

### The Problem
When organizations need to send bulk announcements or transactional updates, they face three major roadblocks:
1. **Infrastructure Overheads:** Sending mass emails independently usually requires setting up complex, expensive, and high-maintenance SMTP configurations or third-party mailing platforms.
2. **Privacy Breaches in Group CC/BCC:** Attempting a quick workaround by sending a grouped email frequently leaks information. Even with precaution, recipients often get notified or find hints regarding who else received the communication, exposing private client lists.
3. **Rigid Email Formatting Restrictions:** Standard mail clients like Gmail restrict users from natively writing, pasting, or executing custom raw HTML responsive code, blocks, grids, and advanced designs directly within the standard compose window.

### The Solution
This tool solves these issues natively using your existing Google Workspace account. By running an automated transaction distribution system, it transmits your message to each target address **individually** inside a loop. Every recipient receives an isolated, customized copy where they are the sole target on the "To" line—maintaining absolute security and zero metadata leakage without requiring third-party tools. 

Furthermore, it opens up advanced design limits by allowing you to inject and compose beautiful, fully customized **HTML Emails**. You can render structural blocks, customized landing styles, and advanced branding layers that standard Gmail interfaces are unable to produce or execute natively.

---

## ⚡ Core Architecture & Features

* **Dual Addressing Input Systems:** Switch seamlessly between processing raw comma-separated tracking lists or inputs across a dynamic 1–50 matrix node container grid.
* **Live In-App Diagnostics:** Real-time email validation monitors string structures and flags invalid address nodes instantly inside inline warning panes—completely eliminating disruptive browser blocking alerts.
* **Interactive HTML Canvas & Modal Link Engine:** Features native rich-text typography styling, raw markup code generation, and a re-engineered absolute path link injection overlay to bind anchors securely over active cursor selections.
* **Advanced HTML Email Customization:** Bypasses Gmail design limits, allowing developers to inject complex responsive markup arrays, styled tables, custom layouts, and highly appealing designs directly into the engine wrapper.
* **How It Works (Isolated Loop System):** The system iterates through your filtered recipient matrix array linearly, creating an independent delivery transaction for each node.
* **Payload Size Verification Floor:** Translates file attachment structures client-side via Base64 binary processing blocks, enforcing a strict `< 10 MB` hard size ceiling check per batch execution to remain safely within memory and execution guidelines.
* **Automated Transaction Receipts:** Dispatches structured loop completion logs automatically to the administrator's primary inbox, formatted natively using Indian Standard Time (**IST - dd-mm-yyyy HH:MM:SS**).

---

## 🛠️ Deployment Configuration

To launch this application module inside your Google Workspace environment:

1. Navigate to [Google Apps Script Workspace](https://script.google.com).
2. Instantiate a new production project environment.
3. Replace the boilerplate template code inside `Code.gs` with the project backend file.
4. Add a new HTML page block, title it exactly `HTMLEmail`, and insert the custom application user interface code.
5. Save the structural blocks and tap **Deploy** > **New Deployment**.
6. Select **Web App** as the deployment target configuration.
7. Set access restrictions: Configure *Execute as:* **Me (your-account)** and *Who has access:* **Only myself** to guarantee absolute system environment security.
8. Approve required service scopes to clear authentication firewalls (`MailApp` / `GmailApp`).

---

Developed and maintained by Earth Kumar Roy.
