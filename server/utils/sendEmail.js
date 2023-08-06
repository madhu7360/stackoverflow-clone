// import nodemailer from 'nodemailer'

// const { AUTH_EMAIL, AUTH_PASS } = process.env

// let transporter = nodemailer.createTransport({
//   host: 'smtp-mail.outlook.com',
//   auth: {
//     user: AUTH_EMAIL,
//     pass: AUTH_PASS,
//   }
// })

// // test transporter
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error)
//   } else {
//       console.log('Ready for messages')
//       console.log(success)
//     }
// })

// const sendEmail = async (mailOptions) => {
//   try {
//     await transporter.sendMail(mailOptions)
//     return;
//   } catch (error) {
//     throw(error)
//   }
// }


import nodemailer from 'nodemailer';

const { AUTH_EMAIL, AUTH_PASS } = process.env;
//console.log('AUTH_EMAIL:', AUTH_EMAIL);
//console.log('AUTH_PASS:', AUTH_PASS);

let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  }
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return;
  } catch (error) {
    console.error('Error in sendEmail:', error);
    throw(error);
  }
};
export default sendEmail;