<template>
    <v-dialog v-model="dialog" max-width="500" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <span class="iconify" data-inline="false" data-icon="ant-design:plus-circle-outlined" style="font-size: 35px !important;"></span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline font-weight-bold border-bottom border-dark d-flex justify-content-between">
          <h5> Ajouter un ordinateur </h5>
          <v-btn color="grey darken-1" text @click="dialog=false"> X </v-btn>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

            <!-- Get data from child when we have an emit request from it -->
            <addOrdinateurForm @closeModal='isCloseModal' @addDesktop="newDesktop"/>

        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script src="./addOrdinateurModal.js"></script>