const express=require('express')
const { isAuth } = require('./middleWare/isAuth')
const { registerValidator, validation, loginValidator } = require('./middleWare/validation')
const { Register, Login } = require('./userControllers')
const routerr=express.Router()
routerr.post('/',registerValidator,validation,Register)
routerr.post('/login',loginValidator,validation,Login)
routerr.get('/current',isAuth,(req,res)=>res.send({ user: req.user }))
module.exports=routerr