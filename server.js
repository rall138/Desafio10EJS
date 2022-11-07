const express = require('express')
const productosController = require('./controller/productosController.js')
const app = express()
const PORT = 8080

app.use(express.static('./public'))
app.set('views', './views') // Le dice donde estarán alojadas las plantillas.
app.set('view engine', 'ejs') // Le dice cual es el motor de procesamiento de esas plantillas.

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const controller = new productosController()
app.use('/', controller.getRouter())

app.get('/', (req, res)=>{
    res.render(__dirname+'/views/producto')
})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
}).on('error', (error) => console.log(error))