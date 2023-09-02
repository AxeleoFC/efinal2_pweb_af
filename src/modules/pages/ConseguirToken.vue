<template>
  <div>
    <div class="container-productos">
      <div class="form-input">
        <label for="">Semilla</label>
        <input type="text" v-model="semilla" required />
      </div>
      <div class="form-input">
        <label for="">Tiempo de vigencia</label>
        <input type="number" v-model="tiempo" required />
      </div>
      <div class="form-input">
        <label for="">Token</label>
        <input type="text" v-model="token" required />
      </div>
      <div class="form-button">
        <button @click="conseguirToken">Generar Token</button>
      </div>
    </div>
    <div v-if="showWarning" class="warning-dialog">
      Por favor, completa todos los campos
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/TokenCliente";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: "",
      showWarning:false
    };
  },
  methods: {
    async conseguirToken() {
        this.showWarning = false;
      if (!this.semilla || !this.tiempo) {
        this.showWarning = true;
        return;
      }
      const usuario = {
        nombre: "axel",
        password: "123",
        semilla: this.semilla,
        expiracion: this.tiempo,
      };
      const tokenGenerado = await obtenerTokenFachada(usuario);
      this.token = tokenGenerado;
    },
  },
};
</script>

<style scope>
.container-productos {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

.form-input label {
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
}

.form-input input {
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-button button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.form-button button:hover {
  background-color: #0056b3;
}

.warning-dialog {
  background-color: #ffcccc;
  color: #ff0000;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
}
</style>