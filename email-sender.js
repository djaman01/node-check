//5-  In this task, you will:

// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // e.g., 'Gmail'
  auth: {
    user: 'YourEmailAddress',
    pass: 'YourEmailPassword',
  },
});

// Email content
const mailOptions = {
  from: 'YourEmailAddress',
  to: 'RecipientEmailAddress',
  subject: 'Test Email',
  text: 'This is a test email from Node.js using Nodemailer!',
};

// Send email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Error sending email: ', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

 

 