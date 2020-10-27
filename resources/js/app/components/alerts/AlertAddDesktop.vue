<template>
  <div>
    <v-alert v-model="alert" border="left" close-text="Close Alert" :color="color" dark dismissible @click="resetAlert">
      {{ message }}
    </v-alert>
  </div>
</template>

<script src="./alertAddDesktop.js"></script>