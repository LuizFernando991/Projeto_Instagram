import express, { Application } from 'express'
import cors from 'cors'


const app : Application = express()

//Config JSON response
app.use(express.urlencoded({
    extended: true
}))
//Solve CORS
app.use(cors({ credentials : true, origin : 'http://localhost:3000'}))
//Public folder
app.use(express.static(__dirname + '/public'))
//Init server
app.listen(5050, ()=>{
    console.log('server on')
})