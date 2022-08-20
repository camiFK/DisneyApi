require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sendEmail = (email) => {
    const msg = {
         to: email,
         from: "camilafkapp@gmail.com",
         subject: "Hello from my Disney API",
         html: '<h1>Welcome to my Disney API! You can now access my protected routes. I hope you enjoy it! :)</h1>',
    }
    sgMail
    .send(msg)
    .then(() => {}, error => {
        console.error(error);

        if (error.response) {
        console.error(error.response.body)
        }
    });
    
}

module.exports = sendEmail
