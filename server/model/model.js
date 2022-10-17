import {Schema, model} from 'mongoose'

const myModel = new Schema({
    name: String,
    lastname: String,
    cel: String
})

export default model('empleados',myModel);