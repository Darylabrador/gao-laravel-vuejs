/** 
* Card for desktop
*/
<template>
    <v-card outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{ ordinateurName }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

         <!-- row with header -->
        <v-row>
            <v-col>
                Horaire
            </v-col>
            <v-col>
                Attributions
            </v-col>
            <v-col>
                Actions
            </v-col>
        </v-row>

        <!-- row with data -->
        <v-row v-for="timeslot in timeslots" :key="timeslot.id">
            <v-col>
                {{ timeslot.horaire }}h
            </v-col>
            <v-col>
                {{ timeslot.client }}
            </v-col>
            <v-col>
                <v-btn depressed color="green" v-if="timeslot.client == ''"> + </v-btn>
                <v-btn depressed color="red" v-else> - </v-btn>
            </v-col>
        </v-row>

        <!-- if we haven't data -->
        <v-container fluid v-if="timeslots.length == 0"> 
            <v-row v-for="horaire in horaires" :key="horaire.id">
                <v-col>
                    {{ horaire }}h
                </v-col>
                <v-col>
                    
                </v-col>
                <v-col>
                    <v-btn depressed color="green"> + </v-btn>
                </v-col>
            </v-row>
        </v-container>

        <v-card-actions>
        </v-card-actions>
    </v-card>
</template>

<script src="./ordinateur.js"></script>