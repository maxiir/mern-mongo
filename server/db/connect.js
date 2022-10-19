import { connect } from 'mongoose'

const conexion = await connect(process.env.MONGODB_URI)

console.log('conectado a:', conexion.connection.name)


//export default conexion


