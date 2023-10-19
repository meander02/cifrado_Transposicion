<template>
  <div class="contenedor-cifrado">
    <h2>Desencriptar Mensaje</h2>
    <div class="contenedor-input">
      <label for="encryptedMessage">Ingresa el mensaje encriptado</label>
      <textarea class="entrada-personalizada" v-model="encryptedMessage" placeholder="Ingresa el mensaje encriptado"
        id="encryptedMessage"></textarea>
    </div>
    <div class="contenedor-input">
      <label for="key">Clave (número de vueltas)</label>
      <input class="entrada-personalizada" type="number" v-model="key" placeholder="Clave (número de vueltas)" id="key">
    </div>
    <div class="contenedor-botones">
      <button class="boton-personalizado" @click="decrypt">Desencriptar</button>
    </div>
    <div v-if="decryptedMessage" class="contenedor-resultado">
      <h3>Mensaje Desencriptado:</h3>
      <p>{{ decryptedMessage }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      encryptedMessage: '',
      decryptedMessage: '',
      key: 3, // Número de vueltas alrededor del cilindro
    };
  },
  methods: {
    decrypt() {
      this.decryptedMessage = this.applyEscitalaDecipher(this.encryptedMessage, this.key);
    },
    applyEscitalaDecipher(encryptedMessage, key) {
      // Implementa el descifrado de la Escítala aquí
      const numRows = Math.ceil(encryptedMessage.length / key);
      const numCols = key;
      const message = new Array(numRows);

      let row = 0, col = 0;

      for (let i = 0; i < encryptedMessage.length; i++) {
        message[row] = message[row] || new Array(numCols);
        message[row][col] = encryptedMessage[i];
        if (col === numCols - 1 || (col === numCols - 1 && row === numRows - 1)) {
          row++;
          col = 0;
        } else {
          col++;
        }
      }

      let decryptedText = '';
      for (col = 0; col < numCols; col++) {
        for (row = 0; row < numRows; row++) {
          if (message[row] && message[row][col]) {
            decryptedText += message[row][col];
          }
        }
      }
      return decryptedText;
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