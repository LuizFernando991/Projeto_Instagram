import express, { Application } from 'express'
import cors from 'cors'
//Routes
import UserRoutes from './routes/UserRoutes'
import PostRoutes from './routes/PostRoutes'


const app : Application = express()

//Config JSON response
app.use(express.urlencoded({
    extended: true
})) 
app.use(express.json())
//Solve CORS
app.use(cors({ credentials : true, origin : 'http://localhost:3000'}))
//Public folder
app.use(express.static(__dirname + '/public'))
//Routes
app.use('/user', UserRoutes)
app.use('/post', PostRoutes)
//Init server
app.listen(5050, ()=>{
    console.log('server on')
})