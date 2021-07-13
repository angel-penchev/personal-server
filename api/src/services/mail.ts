import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';

const mailGunAuth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(mailGunAuth));

const sendMail = (
    name: string,
    email: string,
    subject: string,
    text: string,
    cb: Function,
) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: 'angel@penchev.dev',
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

export default sendMail;
