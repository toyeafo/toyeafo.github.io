---
title: "Digital Forensics Case: M57 Patents - Summary and Evidence"
date: 2026-04-05T08:00:00-04:00
draft: false
tags: ["forensics", "case study", "digital evidence"]
---

## 1. Case Summary

On December 9, 2009, Aaron Greene bought a used computer on Craigslist from Terry Johnson. When Greene turned it on, she saw the hard drive was not erased. She found illegal exploitation files and called the Monterey Police Department.

The police took the computer and sent it to forensic analysts. They traced it back to a local startup called M57 Patents. The company handles art patent searches and had only been open for about a month. The computer originally belonged to an employee named Jo.

Here are the key people involved:
* **Pat McGoo:** The CEO and owner.
* **Terry Johnson:** The IT Administrator who sold the computer.
* **Jo Smith:** A patent researcher and the main user of the computer with the illegal files.
* **Charlie Brown:** Another patent researcher.

Detectives spoke with the CEO, Pat McGoo. He gave the police permission to search the company's computers. The police also got a legal search warrant to seize any data and USB thumb drives belonging to Jo Smith. 

### Legal & Technical Justification

This investigation is legally sound because of a two-step process:
1. **Private Discovery:** Aaron Greene found the files first. Because she is a private citizen, not a government worker, the Fourth Amendment rules against illegal searches do not apply to her discovery.
2. **Consent and Warrant:** The CEO gave voluntary consent to search the business's electronics. To be safe, police also got a judge to sign a search warrant targeting Jo Smith's digital items. 

---

## 2. Digital Evidence Examined

We looked at four main types of digital evidence taken from M57 Patents: hard drive images, USB drive images, RAM (random access memory) captures, and network traffic logs. 

The physical storage devices were saved in the `.E01` (EnCase image) format. This format embeds special digital fingerprints (hash values) right into the file, making it highly reliable for court. The RAM images capture data that disappears when a computer is turned off. This helps us find active programs or unencrypted passwords. Finally, the network captures act as a historical log of data moving in and out of the company.

### Verified Cryptographic Hashes of Acquired Files

| File Name | MD5 Hash |
| :--- | :--- |
| `evidence/charlie-2009-12-11.E01` | `0377b3d41bbbc295a1c9f00aa07ee174` |
| `evidence/jo-2009-12-11-001.E01` | `a6c44b7387a67333b8566955dcad6f50` |
| `evidence/jo-2009-12-11-002.E01` | `434332cdbdb1463606cbea2d7a625745` |
| `evidence/pat-2009-12-11.E01` | `b30759487bb399387bbad6e776b1ed94` |
| `evidence/terry-2009-12-11-001.E01` | `e21dda28db6ef060c294964dda624265` |
| `evidence/terry-2009-12-11-002.E01` | `0008836bc52d4a4e717b43b09b558e58` |
| `evidence/usb/charlie-work-usb...` | `9c0de6c8532d7a66ddcf01861dfb6535` |
| `evidence/usb/jo-favorites-usb...` | `ad1d03cbdb8d81e918899479360f50dc` |
| `evidence/usb/jo-work-usb...` | `8f23279deb398c3245829a98bc8fc1bd` |
| `evidence/usb/terry-work-usb...` | `e07f26954b23db1a44dfd28ecd717da9` |

---

## 3. Forensic Tools and Methods

We analyzed the evidence in a secure, read-only environment to make sure nothing was accidentally changed. We used a custom-built Linux container with these industry-standard tools:
* **The Sleuth Kit (TSK) and Autopsy:** Used to quickly analyze the file system, browse files, build timelines, and review recovered data.
* **bulk_extractor:** Used to quickly scan raw disk images for patterns, like email addresses.
* **ewf-tools:** Used to safely mount and interact with the `.E01` forensic disk images.

---

## 4. Legal Authority

The primary crime we are investigating is a felony violation for the exploitation of a non-consenting entity (Section 311.3(a)). The legal foundation rests on three recognized rules:
1. **The Private Search Exception:** The police were legally allowed to accept the computer Aaron Greene handed over under the plain view doctrine.
2. **Third-Party Consent:** The CEO gave police permission to search company hardware. This waives the employees' expectation of privacy over that evidence.
3. **The Warrant:** Police got a search warrant specifically for Jo's items. The warrant explicitly authorized seizing hard drives, RAM, and USBs connected to Jo Smith between November 13 and December 12, 2009.