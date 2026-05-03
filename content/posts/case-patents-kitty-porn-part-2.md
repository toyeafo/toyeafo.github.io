---
title: "Digital Forensics Case: M57 Patents - Investigative Findings (Part 1)"
date: 2026-04-06T08:00:00-04:00
draft: false
tags: ["forensics", "investigation", "suspects", "evidence"]
---

## 5. Investigative Findings

As we looked through the digital evidence from the M57 corporate network, a clear picture formed regarding the employees and their outside contacts.

### External Contacts and Co-Conspirators

Company emails revealed a network of outside contacts. We grouped them into a few distinct categories:

* **Active Co-Conspirators:** Jamie ("J") and Andy are implicated in buying stolen intellectual property and participating in extortion schemes set up by Charlie Brown.
    * emails from Charlie's computer show a $50,000 offer to Jamie for trade secrets. Charlie hid the data inside other files and told Jamie to "delete these emails".
    * Charlie threatened Andy regarding a patent and sent a hidden picture file with the directive to "Make sure you delete this".
* **Innocent Hardware Buyers:** * **Aaron Greene:** Confirmed as an innocent buyer who bought the stolen Dell Computer from Terry Johnson for $1,000. She was the initial whistle-blower.
    * **Jean Sizemore:** Emails confirm she negotiated with Terry to buy a stolen HP Printer and Dell Monitor for $200.
* **Material Witnesses:**
    * **Alix Pery & Rubin Fritz:** Emails show Charlie Brown bragging to them about suddenly having lots of cash to buy a cruise and Ferraris.
    * **"Cod" & Jesse:** Emails reveal Terry Johnson's financial desperation and gambling habits, including a need to "get cash tonight" for poker tournaments.

---

### Terry Johnson's Illicit Surveillance

Terry Johnson, the IT Administrator, abused his network access. Analysis of his computer's registry cache revealed:

* **Keyloggers:** On December 3, 2009, Terry downloaded and ran hidden keylogger programs to secretly record what other users were typing. 
* **Data Wiping Tools:** He also installed secure data-wiping utilities (CCleaner and Eraser). He installed Eraser on December 10, 2009—one day after the police started investigating the Craigslist computer.

Using keyloggers on a corporate system is a massive breach of policy and potentially violates wiretap laws. The timing of the wiping tools strongly suggests he was trying to destroy digital evidence.

---

### Confirming Jo Smith's Ownership of Files

We had to confirm if Jo Smith actually owned the illegal files found on the used computer. We did this by matching cryptographic hashes (digital fingerprints).

* **The "Work" USB:** A document on Jo's workstation desktop had the exact same digital fingerprint as a file on a "work" USB drive. This proves Jo possessed and controlled the files on that drive.
* **The "Favorites" USB:** An illegal video found on the "favorites" USB drive was also found deleted in the `$OrphanFiles` directory on Jo's local hard drive. 

Finding the exact file in a deleted state on the workstation proves it was there before and indicates a deliberate attempt to destroy the evidence.