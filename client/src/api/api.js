import axios from 'axios'


export const saveEmpleado = async(empleado) => { //funcion para enviar datos llama a controllers
    return await axios.post('https://mernprojectss.herokuapp.com/api/newempleado', empleado)
}