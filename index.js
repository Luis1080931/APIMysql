import express  from 'express' 
import body_parser from 'body-parser'
import routeUsuarios from './src/routes/routes.usuarios.js'
import rutaValidacion from './src/routes/route.autenticacion.js'

const servidor = express()

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({ extends: false }))

//UTILIZAR EL MOTOR DE PLANTILLAS DE EJS
//EN LA CONSOLA NPM INSTALL EJS
servidor.set('view engine', 'ejs')

//INDICANDO QUE LA RUTA SE SITUA DENTRO DE LA CARPETA VIEWS
servidor.set('views', './views')

//CONECTAR CON LOS ESTILOS
servidor.use(express.static('./public'))

//ESPECIFICACION DE LAS RUTAS 
servidor.get('/document', (req, res) => {
    //DOCUMENT.EJS ES EL NOMBRE DEL ARCHIVO QUE CREAMOS DENTRO DE VIEWS 
    res.render('document.ejs')
})

servidor.use('/usuarios', routeUsuarios)
servidor.use(rutaValidacion)

servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})