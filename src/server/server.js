
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));

const contactEmail = nodemailer.createTransport({
  service: 'SMTP',
  host: 'mail.dev78.net',
  port: 465,
  secure: true,
  auth: {
    user: 'EMAIL',
    pass: 'PASSWORD',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('Error')
  } else {
    console.log('Ready to send');
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: 'EMAIL',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" })
    } else {
      res.json({ status: "Message Sent" });
    }
  })
})
