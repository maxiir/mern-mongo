import axios from 'axios'


export const saveEmpleado = async(empleado) => { //funcion para enviar datos llama a controllers
    return await axios.post('https://web-production-d578.up.railway.app/api/newempleado', empleado)
}