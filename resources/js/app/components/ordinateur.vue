/** 
* Card for desktop
*/
<template>
    <v-card class="mx-auto rounded">

        <addAttributionModal :dialog.sync="dialog" :selectedHours="selectedHours" :selectedDesktop="selectedDesktop" :selectedDate="selectedDate" @addassign="getAssignData"/>

        <v-card-text>
            <div class="border-bottom border-dark">
                <h5 class="text-center"> {{ ordinateurName }} </h5>
            </div>

          <v-simple-table dense>
            <template v-slot:default>
                <tr v-for="timeslot in timeslots" :key="timeslot.id">

                    <td class="border-right border-dark col-2 py-0">{{ timeslot.hours}}h</td>

                    <td class="col-8 py-0 text-center">{{ timeslot.client.surname}}  {{ timeslot.client.name}}</td>

                    <td class="col-2 py-0">
                        <v-btn color="red" icon v-if="timeslot.client != ''"> 
                            <v-icon> mdi-close-circle </v-icon>
                        </v-btn>
                        <v-btn icon color="green" v-else @click="attributionDataAction(true, timeslot.hours, ordinateurId)">
                            <v-icon> mdi-plus-circle-outline  </v-icon>
                        </v-btn>
                    </td>
                </tr>
            </template>
        </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script src="./ordinateur.js"></script>