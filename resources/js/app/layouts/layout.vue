/**
* Layout
*/
<template>
  <v-app>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet" />

      <div>
        <v-subheader grey outlined class="bg-secondary" v-if="isLogged != null">
          <h6 class="text-white mt-1"> Gestion ordinateur </h6>
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="deconnexion">
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-subheader>
      </div>

    <v-main>
      <v-container fluid>
        <!-- router view is important to vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script src="./layout.js"></script>