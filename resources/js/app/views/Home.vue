/**
* Home vue
* Display all computers in card on the frontend
*/
<template>
    <v-container>

        <!-- datepicker component -->
        <datepicker @dateChange='changementDate'/>


        <div class="d-flex mb-2">
            <pagination :paginations='paginationLink' class="mr-5" :date='dateRechercher' @newPage='newPage' />

            <!-- event to get new desktop info from child component through adddesktop emit and newdesktop method -->
            <addOrdinateurModal @addDesktop="newDesktop" />
        </div>


        <v-row>
            <v-col md='4' v-for='(ordinateur,key) in computerList' :key='key'>
                <ordinateur :ordinateurId='ordinateur.id' :ordinateurName='ordinateur.name' :attributionList='ordinateur.attributions' :selectedDate="dateRechercher" @deletedDesktop="getDeletedDesktop" />
            </v-col>
        </v-row>

    </v-container>
</template>

<script src="./home.js"></script>