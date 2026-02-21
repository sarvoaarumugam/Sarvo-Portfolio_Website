# EmailJS Setup Guide for Contact Form

Follow these steps to enable the contact form to send emails directly to your Gmail (sarvoaarumugam@gmail.com):

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with your Gmail (sarvoaarumugam@gmail.com)
5. Give it a name like "Portfolio Gmail"
6. Click **"Create Service"**
7. **COPY the Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template content:

**Template Name:** `Portfolio Contact`

**Subject:**
```
New Portfolio Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"**
5. **COPY the Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **"Account"** in the left sidebar
2. Scroll to **"API Keys"** section
3. **COPY your Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

## Step 5: Update App.tsx

Open `src/App.tsx` and find these lines (around line 671-675):

```typescript
emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
)
```

Replace with your actual values:

```typescript
emailjs.sendForm(
  'service_xxxxxxx',     // Your Service ID from Step 2
  'template_xxxxxxx',    // Your Template ID from Step 3
  formRef.current!,
  'xxxxxxxxxxxxxxxxxx'   // Your Public Key from Step 4
)
```

## Step 6: Test the Form

1. Save the file
2. The app should automatically reload
3. Go to the **Connect** section
4. Fill out the form and click **"Send Message"**
5. You should see ✓ "Message sent successfully!"
6. Check your Gmail inbox at **sarvoaarumugam@gmail.com**

## 📧 What Happens When Someone Submits:

1. User fills out the form on your portfolio
2. They click "Send Message"
3. EmailJS sends the message to your Gmail
4. You receive an email with:
   - Subject: "New Portfolio Message from [Their Name]"
   - Their name, email, and message content
5. You can reply directly to their email!

## 🎉 Done!

Your contact form is now fully functional! No need for backend servers or complicated setup.

## Troubleshooting:

- **"Failed to send"** error: Check that all 3 IDs are correct
- **No email received**: Check spam folder, or verify Gmail service connection in EmailJS
- **Service limit**: Free plan = 200 emails/month (upgrade if needed)

---

**Need Help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- Test emails in EmailJS dashboard before using in production
