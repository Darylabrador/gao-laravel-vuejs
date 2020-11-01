<template>
    <v-dialog v-model="dialog" max-width="500" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="green" v-bind="attrs" v-on="on">
            <v-icon> mdi-plus-circle-outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline font-weight-bold border-bottom border-dark d-flex justify-content-between">
          <h5> Ajouter un client </h5>
          <v-btn color="grey darken-1" text @click="close"> X </v-btn>
        </v-card-title>

        <v-card-actions>
            <v-text-field color="dark" v-model="surname" label="Nom" required></v-text-field>
            <v-text-field color="dark" v-model="name" label="Prenom" required></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="text-white" color="grey darken-1" @click="close"> Annuler </v-btn>
            <v-btn class="text-white" color="blue darken-1" @click="createClient"> Ajouter </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script src="./addClientModal.js"></script>