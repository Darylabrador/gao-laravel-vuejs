/** 
* Card for desktop
*/
<template>
    <v-card outlined>

        <addAttributionModal :dialog.sync="dialog" :selectedHours="selectedHours" :selectedDesktop="selectedDesktop" :selectedDate="selectedDate" />

        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{ ordinateurName }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <!-- row with data -->
        <v-row v-for="timeslot in timeslots" :key="timeslot.id">
            <v-col cols="2">
                {{ timeslot.hours }}h
            </v-col>
            <v-col cols="8">
                {{ timeslot.client.surname}}  {{ timeslot.client.name}}
            </v-col>

            <v-col cols="2">
                <v-btn color="red" icon v-if="timeslot.client != ''"> 
                    <v-icon> mdi-close-circle </v-icon>
                </v-btn>
                <v-btn icon color="green" v-else @click="attributionData(true, timeslot.hours, ordinateurId)">
                    <v-icon> mdi-plus-circle-outline  </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        
    </v-card>
</template>

<script src="./ordinateur.js"></script>