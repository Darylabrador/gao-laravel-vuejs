<template>
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Ajouter un ordinateur
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Annuler
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Ajouter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script src="./addOrdinateur.js"></script>