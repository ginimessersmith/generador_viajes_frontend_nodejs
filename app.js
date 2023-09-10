require('dotenv').config()
const express=require('express')
const app=express()
let hbs=require('hbs')
let port=process.env.PORT 



hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine','hbs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home',{
        titulo:'Generador de Viajes'
    })
})
console.log(`corriendo en el puerto : ${port}`)
app.listen(port)