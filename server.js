import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { closetRouter } from './routes'

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use("/api",closetRouter)

app.get("/test", (req,res) => {
    return res.header(200).send({greetings: "we're cooking with GAS!!! o(*￣▽￣*)ブ"})
})


const PORT = 3636

app.listen(PORT)

console.log('hand-rolled express server listening on Port ::', PORT)