
// -------------> SERVIDOR <-------------
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages')

const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// -------------> INICIO E CONFIG SERVIDOR <-------------
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configure os arquivos estaticos(css,scripts,imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes",pageGiveClasses)
.get("/success",pageSuccess)
.post("/save-classes", saveClasses)
.listen(5503)