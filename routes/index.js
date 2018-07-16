const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
const creds = require('../config/credentials');

const transport = { 
    host: 'Gmail',
    auth: {
        user: creds.EMAIL,
        pass: creds.PASSWORD
    }
};

const trasnporter = nodemailer.createTransport(transport);

trasnporter.verify((error, sucesss) => {
    if (error) {
        console.log('error');
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const phoneNumber = req.body.email;
    const city = req.body.city;
    const message = req.body.message;
    const content = `Full Name: ${fullName} \n Email: ${email} \n Phone Number: ${phoneNumber} \n City: ${city} \n Message: ${message}`

    var mail = {
        from: fullName,
        to: 'domitriusaclark@gmail.com',
        subject: 'New Message from contact form',
        text: content
    }

    trasnporter.sendMail(mail, (err,data) => {
        err ? res.json({msg: 'fail'}) : res.json({msg: 'success'})});
})

module.exports = router;