/**
* Alert vue for add desktop
*/
<template>
  <div class="my-0 py-0">
    <v-alert v-model="alert" border="left" :color="color" dark v-if="isError">
      {{ message }}
    </v-alert>
  </div>
</template>

<script src="./alertAddDesktop.js"></script>