const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jeffysambabu@gmail.com',  // Your Gmail email
    pass: 'innt konp sexr kihh'        // Your App Password
  }
});

const mailOptions = {
  from: 'jeffysambabu@gmail.com',   // Sender's email address
  to: 'jeffysambabu@gmail.com',       // Receiver email address (test with your own email)
  subject: 'Test Email from Nodemailer',
  text: 'This is a test email sent from Nodemailer to verify configuration.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);   // Output the error
  } else {
    console.log('Email sent:', info.response);  // Output success response
  }
});
