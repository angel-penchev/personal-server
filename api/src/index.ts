import express from 'express';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/../public'));
console.log(__dirname);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

