import axios from 'axios'

export const obtenerTokenFachada=async (bodyUsuario)=>{
    return obtenerToken(bodyUsuario);
}

const obtenerToken=async (bodyUsuario)=>{
    const data=await axios.post(`http://localhost:8080/API/V1.0/Autorizacion/tokens/obtener`,bodyUsuario).then(r=>r.data);
    return data;
}