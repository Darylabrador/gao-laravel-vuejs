<template>
    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
          <v-card-title class="headline font-weight-bold border-bottom border-dark d-flex justify-content-between">
            <h5> Attribuer </h5>
            <v-btn color="grey darken-1" text @click="close"> X </v-btn>
          </v-card-title>

        <v-card-text>
          <autocomplete @attributeClient="getInfoClient" :selectedHours="selectedHours" :selectedDesktop="selectedDesktop" :selectedDate="selectedDate" @addClientModalActive="isModalClientActive" @createdClientAndAssign="createdClientAndAssign" />
        </v-card-text>

        <v-card-actions class="d-flex justify-content-end mt-0 pt-0">
          <v-btn class="text-white" color="grey darken-1" @click="close"> Annuler </v-btn>
          <v-btn class="text-white" color="blue darken-1" @click="attribute" v-if="isDisabled" disabled> Attribuer </v-btn>
          <v-btn class="text-white" color="blue darken-1" @click="attribute" v-else> Attribuer </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
</template>

<script src="./addAttributionModal.js"></script>