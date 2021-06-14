const mailgun = require("mailgun-js");
const DOMAIN = 'masakasik.me';
const mg = mailgun({apiKey:process.env.MAILGUN_API_KEY , domain: DOMAIN});

const sendWelcomeEmail = (email,name)=>{
    mg.messages().send({
        to:email,
        from:'supernaufalboy@gmail.com',
        subject:'Terimakasih Telah Bergabung Dengan TheBoyzRadio',
        text:`Selamat datang di TheBoyzRadio, ${name}. Stay tune di TheBoyzRadio!`
    })
}

const sendCancelationEmail = (email,name)=>{
    mg.messages().send({
        to:email,
        from:'supernaufalboy@gmail.com',
        subject:'Terimakasih Telah TuneIn di TheBoyzRadio',
        text:`Selamat tinggal, ${name}. Kami sedih melihat anda meninggalkan aplikasi kami. Tolong beritahu kamu untuk menjadi lebih baik kedepannya. Terimakasih!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}