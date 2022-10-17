import { connect } from 'mongoose'

const conexion = await connect(process.env.MONGODB_URI)
console.log('connection to:', conexion.connection.name)

export default conexion;