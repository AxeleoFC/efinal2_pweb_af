<template>
  <div class="container">
    <div class="container-estudiante">
      <div class="venta-label">
        <label for="">Estudiante</label>
      </div>
      <div class="form-box">
        <label for="">Token</label>
        <input type="text" v-model="token" required />
        <label for="">Nombre</label>
        <input type="text" v-model="nombre" required />
        <label for="">Apellido</label>
        <input type="text" v-model="apellido" required />
        <label for="">Cedula</label>
        <input type="text" v-model="cedula" required />
      </div>
      <div class="form-button">
        <button @click="ingresarEstudiante">Guardar</button>
      </div>
    </div>
    <div class="container-estu">
      <div class="tabla">
        <table border="1" v-if="listado">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
          </tr>
          <tr v-for="item in listado" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.cedula }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="showWarning" class="warning-dialog">
      Por favor, completa todos los campos
    </div>
  </div>
</template>

<script>

import { ingresarEstudianteFachada} from "../helpers/EstudianteCliente";
import { conseguirEstudiantesFachada } from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      token: null,
      listado: [],
      num:0
    };
  },
  methods: {
    async ingresarEstudiante() {
      this.showWarning = false;
      if (!this.token || !this.nombre || !this.apellido || !this.cedula) {
        this.showWarning = true;
        return;
      }
      const estudiante = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
      };
      ingresarEstudianteFachada(estudiante,this.token);
      alert("Se ha registrado el estudiante");
      const estudiante1 = {
        id: this.num,
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
      };
      this.num=this.num+1;
      this.listado.push(estudiante1);
    },
    async listaEstudiante() {
      const data = await conseguirEstudiantesFachada(this.token);
      this.listado.push(data);
       
    },
    handleError(error, message) {
      console.error(message, error);
      alert(message);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column; /* Cambiamos la dirección del flex a columna */
  align-items: center; /* Centramos horizontalmente */
  justify-content: center; /* Centramos verticalmente */
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container-estudiante,
.container-estu {
  padding: 20px;
}

.form-box {
  margin-bottom: 10px;
}

.form-box label {
  display: block;
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-input input {
  width: 100%;
  padding: 5px;
}

.form-button button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.tabla table {
  width: 100%;
  border-collapse: collapse;
}

.tabla th,
.tabla td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.tabla th {
  background-color: #007bff;
  color: white;
}

.venta-label {
  padding: 15px;
  background-color: #007bff;
  border: 1px solid #ccc;
  font-size: 24px;
  color: #c96048;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>




