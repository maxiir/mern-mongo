import express from "express"
import {config} from "dotenv"
import router from "./routes/routes.js"
import path, {dirname, join} from 'path'
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
app.set('port', process.env.PORT || 4000);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'./build'))) //para q pueda ejecutar bien el frontent
    app.get('*', (req,res) => {
        const index = path.join(__dirname,'./','build','index.html')
        res.sendFile(index)
    })
}else{
    app.get('/', (req,res)=>{
        res.send('server running...')
    })
};




export default app;