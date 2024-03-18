const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'exemple@gmail.com', 
    pass: 'motdepasse'      
  }
});

let mailOptions = {
  from: 'exemple@gmail.com',
  to: 'exemple@exemple.com', 
  subject: 'Test Email',
  text: 'Ceci est un email de test depuis Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
