import express from 'express';
import sendMail from './services/mail';

const app = express();
const PORT = process.env.API_PORT || 5000;

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());
app.use('/public', express.static(__dirname + '/../public'));

app.post('/contact', (req, res) => {
  const {name, subject, email, text} = req.body;

  sendMail(name, email, subject, text, function(err, data) {
    if (err) {
      res.status(500).json({message: 'Internal error.'});
    } else {
      res.status(200).json({message: 'Success.'});
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
