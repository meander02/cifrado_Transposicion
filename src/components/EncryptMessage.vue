<template>
  <div class="contenedor-cifrado">
    <h2>Encriptar Mensaje</h2>
    <div class="contenedor-input">
      <label for="message">Ingresa tu mensaje</label>
      <textarea class="entrada-personalizada" v-model="message" placeholder="Ingresa tu mensaje" id="message"></textarea>
    </div>
    <div class="contenedor-input">
      <label for="key">Clave (número de vueltas)</label>
      <input class="entrada-personalizada" type="number" v-model="key" placeholder="Clave (número de vueltas)" id="key">
    </div>
    <div class="contenedor-botones">
      <button class="boton-personalizado" @click="encrypt">Encriptar</button>
    </div>
    <div v-if="encryptedMessage" class="contenedor-resultado">
      <h3>Mensaje Encriptado:</h3>
      <p>{{ encryptedMessage }}</p>
    </div>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      message: '',
      encryptedMessage: '',
      key: 3, // Número de vueltas alrededor del cilindro
    };
  },
  methods: {
    encrypt() {
      this.encryptedMessage = this.applyEscitalaCipher(this.message, this.key);
    },
    applyEscitalaCipher(message, key) {
      // Implementa el cifrado de la Escítala aquí
      let encryptedText = '';
      for (let i = 0; i < key; i++) {
        for (let j = i; j < message.length; j += key) {
          encryptedText += message[j];
        }
      }
      return encryptedText;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.contenedor-cifrado {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.contenedor-input {
  text-align: left;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
}

.contenedor-input label {
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
}

.entrada-personalizada {
  width: 80%;
  padding: 10px;
  font-size: 1em;
  border: none;
  border: 1px solid #3490dc;
  border-radius: 5px;
}

.contenedor-botones {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.boton-personalizado {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #3490dc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.boton-personalizado:hover {
  background-color: #2779bd;
}

.contenedor-resultado {
  text-align: left;
}

@media (max-width: 768px) {
  .contenedor-cifrado {
    margin: 20px;

  }
}
</style>