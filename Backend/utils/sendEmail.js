const mailgun = require("mailgun-js");

const sendEmail = async (email, template, subject) => {
    const mg = mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
    });

    const data = {
        from: "<arxlan62@gmail.com>", // Update this to a verified sender
        to: email,
        subject: subject,
        html: template,
    };

    try {
        const body = await mg.messages().send(data);
        console.log("Email sent:", body);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
module.exports=sendEmail