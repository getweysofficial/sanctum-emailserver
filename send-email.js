var nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//   host: 'smtp.hostinger.com',
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: 'test@getweys.com', // generated ethereal user
//     pass: 'Getweys@12345', // generated ethereal password
//   },
// });

// let mailOptions = {
//   from: 'test@getweys.com',
//   to: 'armanshakeel17@gmail.com',
//   subject: 'New Password Request',
//   text:
//     'Hello,\n\n' +
//     'Please change your password with this token: ' +
//     tokenemail +
//     '.\n',
// };
// await transporter.sendMail(mailOptions);

var transporter = nodemailer.createTransport({
  // service: '',
  host: 'smtp.hostinger.com',
  auth: {
    user: 'test@getweys.com', // generated ethereal user
    pass: 'Getweys@12345', // generated ethereal password
  },
});

let mailOptions = {
  from: 'test@getweys.com',
  to: 'armanshakeel17@gmail.com',
  subject: 'New Password Request',
  text: 'Hello,\n\n' + 'Please change your password with this token: ',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
