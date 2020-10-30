<template>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
          <v-card-title class="headline font-weight-bold d-flex justify-content-end">
            <v-btn color="grey darken-1" text @click="close"> X </v-btn>
          </v-card-title>

        <v-card-text class="text-center my-5">
          <h5> Voulez-vous vraiment supprimer cette attribution ? </h5>
        </v-card-text>

        <v-card-actions class="d-flex justify-content-end mt-0 pt-0">
          <v-btn class="text-white" color="blue darken-1" @click="close"> Non </v-btn>
          <v-btn class="text-white" color="red darken-1" @click='deleteassign'> Oui </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
</template>

<script src="./deleteAttributionModal.js"></script>