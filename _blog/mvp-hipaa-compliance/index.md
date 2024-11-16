---
title: Launching a HIPAA compliant MVP
date: "2020-04-03T11:22:36"
description: "This is a guide for early-stage HealthTech startups who want to launch an MVP quickly and cheaply while following HIPAA regulation. It's the guide that I wish I had when setting up infrastructure for COVID-19 drive-through testing."
category: guide
highlight: true
---

_Disclaimer: I'm not an expert on HIPAA regulation or a lawyer so don't take this as legal advice. It's worth discussing your plans with a lawyer. If you can't afford a lawyer then, until you can, ask a founder who has built a similar startup. It's crucial to uncover the unknown unknowns early on._

This guide is for HealthTech startups who want to launch an MVP under HIPAA regulation. It's the guide that I wish I had when setting up infrastructure for COVID-19 drive-through testing. I've compiled it from speaking to health lawyers, HealthTech founders, HIPAA experts, and reading too much regulation.

## Summary

It's possible to run a HIPAA compliant startup and launch an MVP in a few days at virtually no cost. The TL;DR version is: run your business through GSuite (sign the BAA first); leverage Saas apps to handle PHI and embed them into a static site; and use Aptible Comply to generate your policies and procedures.

## Table of Contents

```toc
exclude: ['Summary','Table of Contents']
```

## Understanding HIPAA

HIPAA (Health Insurance Portability and Accountability Act) is a US federal law regulating entities which handle health data. By health data, I mean any [protected health information (PHI)](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html#protected) related to health insurance transactions. HIPAA has three main rules: privacy, security, and what to do if a "breach" occurs. If HIPAA applies to you, you will need to create and follow a set of internal policies and procedures to become HIPAA compliant. Otherwise, your company will be at risk of heavy penalties—$100 to $50,000 per violation.

HIPAA applies to two types of companies:

- **Covered entities**: your company takes part in health insurance transactions. For example, health insurers and health providers.
- **Business associates**: your company deals with PHI data for or from health insurance transactions. Your company will likely come in contact with PHI data by interacting with covered entities or other business associates.

As a rule of thumb, unless you are employing medical professionals or making health insurance transactions your startup will be a **business associate** under HIPAA.

**Importantly, you don't need to be directly interacting with a covered entity to be regulated under HIPAA as a business associate**. For example, let's say a hospital is using scheduling software running on AWS cloud hosting. The hospital handles insurance transactions and so they are the covered entity. The scheduling software will be handling patient intake information including their name and email (which are later used in a health insurance transaction) making them a business associate. AWS runs the servers and databases which the scheduling software uses and so AWS is also classified as a business associate.

A clear sign that you need to be HIPAA compliant is if a business partner asks you to sign a [BAA](#the-business-associate-agreement-baa) and thus take the role of a business associate.

For more information on HIPAA I'd recommend [Aptible's HIPAA Compliance: Guide for Startups](https://www.aptible.com/hipaa/) or [TrueVault's HIPAA compliance developer guide](https://github.com/truevault/hipaa-compliance-developers-guide)

## Building your MVP

So, you have checked that you need to be HIPAA compliant but how do you make this happen quickly and cheaply while building an MVP?

The secret to building a HIPAA compliant MVP is the same as building an MVP in any other industry: **write the minimum amount of code**. But the pressure to write no/low amounts of code is far greater in HealthTech. Dealing with patient data means that each line of code you write, or system you develop, introduces further security and compliance risks.

### Using HIPAA compliant Saas apps

The fastest way to be HIPAA compliant is to leverage HIPAA compliant Saas apps. For each Saas app you use, you will need to select the HIPAA compliant plan (normally the most expensive); sign their BAA; and properly configure it so no PHI information is public or sent over unsecured mediums e.g. from their email servers. If you can't sign a BAA with the Saas app then it won't be HIPAA compliant and so you can't use it for PHI.

#### Internal operations

GSuite will be the core of your startup. When set up correctly, GSuite provides HIPAA compliant file storage (Google Drive), a collaborative database (Google Sheets), and external communication (Gmail). Google handles the security, audit logs, identity management, etc.

To set up HIPAA compliant GSuite, you'll need to sign up for GSuite and [sign their BAA](https://support.google.com/a/answer/3407074?hl=en). Enable [Vault](https://support.google.com/a/answer/2462365?hl=en) to retain data for auditing. Require multi-factor authentication.

**Note: video calling with Google Hangouts is not HIPAA compliant.**

If you plan on sending PHI over email (even Gmail), I'd recommend [Paubox](https://www.paubox.com/). Paubox will encrypt all outgoing messages and attachments. Finally, you'll need to add a [HIPAA email disclaimer](https://www.exclaimer.com/email-signature-handbook/10128-hipaa-email-disclaimer-examples).

To securely share PHI internally or with other companies (after you've signed a BAA with them) you should create a shared drive within Google Drive and add them as collaborators.

If you need to run custom code, you can reduce most security risks by running the code locally. Each evening (or however often you need to perform the task), download the relevant data from the Google Drive on to your work computer, run the script, and then upload the results to the Google Drive. Make sure your computer is encrypted and delete the PHI files afterward.

#### Building web apps

Instead of redirecting your customers to other Saas sites to handle the PHI, embed the Saas apps directly into your website.

For example, if you want a scheduling system integrated into your site: setup [Acuity Scheduling](https://acuityscheduling.com/) and embed the booking form as an iFrame into your react web app. You can style CSS to make the booking form look native and deploy it as a static site from a Github repo using [Netlify](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)

Two Saas apps that might be useful are [Acuity Scheduling](https://acuityscheduling.com/) for online scheduling and [JotForm](https://www.jotform.com/) for form building. Make sure to configure them properly: be on the HIPAA plan; sign the BAA; remove all PHI sent in emails from their servers.

If you are looking to launch an iOS and Android app you could embed the Saas apps using a framework such as [react native](https://josephkhan.me/iframe-with-react-native/).

### Building your own systems

Handling PHI with your own built systems adds significant complexity to be HIPAA compliant: audit-level application logging, centralized log collection, 3rd party security audits, vulnerability scanning, etc. This can be partially abstracted using [Heroku Shield](https://www.heroku.com/shield) or [Aptible Deploy](https://www.aptible.com/deploy/). TrueVault has a [detailed developer guide for HIPAA compliance and application development](https://github.com/truevault/hipaa-compliance-developers-guide). But, if you can, try and build your MVP without PHI touching your servers as described [above](#building-web-apps).

## The Business Associate Agreement (BAA)

Each company you interact with where you share PHI will require you to sign a BAA. BAAs state that you agree to operate under HIPAA rules. For Saas apps such as GSuite or JotForm they will have a standard BAA to sign. If you are partnering with a Covered Entity, the BAA will often include how you inform them of breaches and that you will pay any fines resulting from your breaches.

## Policies and procedures

To be HIPAA compliant you have to follow policies and procedures under HIPAA. **There are loads of them**. Luckily, as a startup with a small team and (hopefully) no/very little code, you can get this all set up in half a day. I'd highly recommend [Aptible Comply](https://www.aptible.com/comply/). Comply generates the policies for your startup to follow. It helps you adhere to these policies by generating tickets based on time or events, for example, assigning HIPAA training to new employees. They have a free startup plan for up to 3 people if you send them an email.
