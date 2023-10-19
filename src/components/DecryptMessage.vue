<template>
  <div>
    <h2>Desencriptar Mensaje</h2>
    <textarea v-model="encryptedMessage" placeholder="Ingresa el mensaje encriptado"></textarea>
    <input type="number" v-model="key" placeholder="Clave (número de vueltas)">
    <button @click="decrypt">Desencriptar</button>
    <div v-if="decryptedMessage">
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
