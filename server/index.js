import app from "./server.js"
import conexion from "./db/connect.js"

app.listen(app.get('port'),()=>{
    console.log('server on port:',app.get('port'))
})