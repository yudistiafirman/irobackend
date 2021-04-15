const express= require('express')
const cors= require('cors')
const morgan =require('morgan')
require('dotenv').config()

const app = express()
const PORT=6000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.listen(process.env.port|| PORT,console.log('app running in port '+PORT))