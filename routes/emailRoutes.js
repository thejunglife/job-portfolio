require('dotenv').config()
const nodemailer = require('nodemailer')


module.exports = app => {
  app.post('/send', (req, res, next) => {

    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message}`

    let transport = {
      service: 'gmail',
      auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PASSWORD}`
    }
  }

    let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take message')
  }
})


    let mail = {
      from: name,
      to: 'pauljungster@gmail.com',
      subject: 'New Message from Contact Form',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
}