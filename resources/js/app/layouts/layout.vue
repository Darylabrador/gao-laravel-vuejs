/**
* Layout
*/
<template>
  <v-app>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet" />
    <v-main>
      <v-container fluid>

        <!-- router view is important to vue-router -->
        <router-view></router-view>
        
      </v-container>
    </v-main>
  </v-app>
</template>