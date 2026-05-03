---
title: "Digital Forensics Case: M57 Patents - Anti-Forensics and Conclusions (Part 2)"
date: 2026-04-07T08:00:00-04:00
draft: false
tags: ["forensics", "steganography", "anti-forensics", "embezzlement"]
---

## 5. Investigative Findings (Continued)

In the final phase of the investigation, we uncovered a web of embezzlement, corporate espionage, and attempts to destroy evidence. 

### Terry Johnson's Embezzlement and Failed Cover-Up

Emails showed Terry Johnson, the IT Administrator, was desperate for cash to fund his poker habits. 

To get money, Terry abused his IT access to steal company hardware. When Jo Smith's computer was supposed to be thrown away, Terry lied to the CEO in an email, saying, "Don't worry - I'll take care of everything". Instead, he sold it on Craigslist to Aaron Greene for $1,000 using a personal email address.

When the police were called on December 9, Terry panicked:
* **Failed Email Deletion:** Terry tried to delete the Craigslist emails linking him to the sale. He only "soft-deleted" them by moving them to the trash bin in Windows Mail. We easily recovered them.
* **Active Data Wiping:** When police seized the computers, the live memory (RAM) showed Terry was actively running a secure data-wiping tool called `Eraser.exe` in the background. 

### Charlie Brown's Corporate Espionage

Charlie Brown was stealing trade secrets and selling them to competitors. Charlie used steganography—hiding secret data inside ordinary files—to get data out of the network safely.

Charlie used a three-step method to send intellectual property to an outside buyer:
1. **Encryption:** He locked two target files inside a password-protected ZIP archive called `01.zip`.
2. **Steganography:** He hid the password for the ZIP file ("immortal") inside the hexadecimal code of a decoy image named `microscope1.jpg`.
3. **Payload Injection:** He injected a compressed text file into a second decoy image, `astronaut1.jpg`.

By finding the hidden password, we decrypted the archive and recovered the stolen payload: two US Patents. We also extracted the injected OpenDocument Text file from the second image. 

### Jo Smith's Data Destruction

Terry wasn't the only one covering his tracks. Jo Smith made a deliberate attempt to wipe data from a company thumb drive.

On November 20, 2009, at exactly 21:36:24 EST, Jo executed a mass-deletion of over 40 files on the "work" USB drive. Because all 40+ files were deleted in a single second, it had to be done by an automated tool. 

Jo was successful in destroying the files on the USB drive. Hexadecimal analysis showed the original images were permanently overwritten with random PDF data, making recovery impossible. However, Jo failed to sanitize the local workstation, which is where we found the surviving copy of the illegal video.