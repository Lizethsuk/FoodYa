const jwt = require('jsonwebtoken')
const Client = require('../models/Client');
const {secret} = require('../config/config').token
const email = require('../template/clientMail')
const {frontend} = require('../config/config')
const {transporter, NODE_MAILER_EMAIL, isDev} = require('../config/nodemailer')

exports.signup = async(req,res)=>{
    const user = req.body
    try{
        const newClient = new Client({
            ...user,
            date: Date.now()
        })
        const savedClient = await newClient.save()
        const msg = {
            to: user.email,
            from: `FoodYa! 🍔 <${NODE_MAILER_EMAIL}>`,
            subject: 'Gracias por registrarte a Foodya',
            html: email.template({url: frontend.dominio})
        }
        if(!isDev){
            transporter.sendMail(msg)
                .then(()=>console.log('email registro cliente enviado'))
                .catch((e)=>console.log('ocurrió un error', e.message))
        }

        res.status(201).json({ success: true, message: 'User has been created', data: savedClient})
    }catch(e){
        res.status(400).json({error: `Email ${user.email} is exist`})
    }
}

exports.signin = async (req,res)=>{
    const userlogin = req.body
    const {email, password} = userlogin
    try{
        const user = await Client.findOne({email}).exec()
        if(!user) {
            res.status(401).json({ 
                success: false, 
                message: "Email or Password are invalid"
            });
        } else {
            const isVerifiedPassword = await user.verifyPassword(password);
            if(!isVerifiedPassword){
                res.status(401).json({ 
                    success: false, 
                    message: "Email or Password are invalid"
                })
            } else {
                const { _id } = user;
                const token = jwt.sign({ _id }, secret)
                res.status(200).json({succes: true, name: user.name, token, type: "client",id: _id})
            }
        }
    } catch(e){
        console.log(e)
    }
}

exports.update = async (req,res)=>{
    const id = req.id
    const newUserInfo = req.body
    const authorized = req.get('authorization')
    Client.findByIdAndUpdate(id, newUserInfo, {new: true})
    .then(result => res.status(200).json(result))
    .catch(err=>console.log(err))
}