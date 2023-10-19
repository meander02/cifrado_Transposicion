<template>
  <div>
    <h2>Encriptar Mensaje</h2>
    <textarea v-model="message" placeholder="Ingresa tu mensaje"></textarea>
    <input type="number" v-model="key" placeholder="Clave (número de vueltas)">
    <button @click="encrypt">Encriptar</button>
    <div v-if="encryptedMessage">
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
  