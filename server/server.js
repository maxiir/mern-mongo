import express from "express"
import {config} from "dotenv"
import router from "./routes/routes.js"
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import morgan from 'morgan'
import cors from 'cors'

config()

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(cors()) //modulo para comunicar los dos backeds
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(router);


app.use(express.static(join(__dirname,'../client/build'))) //para q pueda ejecutar bien el frontent

app.set('port', process.env.PORT || 4000);



export default app;