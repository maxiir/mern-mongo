import myModel from "../model/model.js"
const controller = {};

controller.index = (req,res)=>{
    res.send('server running...')}

controller.saveEmpleados = async (req,res) => {
    //const {name,lastname,cel} = req.body
    //const saveEmpleado = new myModel({name:name, lastname:lastname ,cel:cel})
    //const dataSave = await saveEmpleado.save()
    res.send('data save!')
    //console.log('data save:', dataSave)
    

}


export default controller;