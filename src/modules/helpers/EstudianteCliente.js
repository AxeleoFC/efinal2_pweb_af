import axios from 'axios'

export const conseguirEstudiantesFachada=async(token)=>{
    return await conseguirEstudiantes(token);
}
export const ingresarEstudianteFachada=async(bodyProducto, token)=>{
    return ingresarEstudiante(bodyProducto, token);
}

const conseguirEstudiantes=async(token)=>{
    var token="Bearer "+token;
    const header={
        "Authorization":token,
        "Mensaje":"Valor1"
    }
    const data=await axios.post(`http://localhost:8081/API/V1.0/inscripcion/estudiantes/lista`,{headers:header}).then(r=>r.data);
    return data
}

const ingresarEstudiante=async(bodyProducto,token)=>{
    var token="Bearer "+token;
    const header={
        "Authorization":token,
        "Mensaje":"Value1"
    }
    axios.post(`http://localhost:8081/API/V1.0/inscripcion/estudiantes`, bodyProducto, { headers: header }).then(r => r.data);
}