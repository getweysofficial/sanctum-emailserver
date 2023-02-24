const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const connectDB = require('./config/db');
// const sampleRoute = require('./routes/index');
var nodemailer = require('nodemailer');

app.use(bodyParser.json());
//Connecting Database
// connectDB();

//path route
// app.use('/your-path');

//test route
var transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: 'smtp.hostinger.com',
  secure: true,
  // port: 587,
  auth: {
    user: 'armanshakeel17@gmail.com', // generated ethereal user
    pass: 'sykwnjnvjyswwsyx', // generated ethereal password
  },
});
app.get('/test', async (req, res) => {
  let mailOptions = {
    from: 'armanshakeel17@gmail.com',
    to: 'princeusamaansari15@gmail.com',
    subject: 'New Password Request',
    text: 'Hello,\n\n' + 'Please change your password with this token: ',
  };

  try {
    const res = await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.json({
          success: false,
          message: error,
        });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({
          success: true,
          data: info,
        });
      }
    });
    res.json({
      success: true,
      message: 'Server works!!',
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

//running node js server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
