/** 
* Card for desktop
*/
<template>
    <v-card class="mx-auto rounded">

        <addAttributionModal :dialog.sync="addModal" :selectedHours="selectedHours" :selectedDesktop="selectedDesktop" :selectedDate="selectedDate" @addAssign="getAssignData" />
        <deleteAttributionModal :dialog.sync="deleteModal" :idAssign="idAssign" @deleteAssign='getDeleteAssignData' />
        <deleteOrdinateur :dialog.sync="deleteDesktopModal" :idDesktop="idDesktop" @deletedDesktop="getDeletedDesktop" />
        <modificationOrdi :dialog.sync="modifDialog" :ordinateurId="selectedDesktop" @renameOrdi="renamedOrdi" />

        <v-card-text>
            <div class="border-bottom border-dark d-flex justify-content-between">
                <h5 class="text-center pl-5"> {{ ordinateurName }} </h5>
                <div class="d-flex justify-content-end">
                    <v-btn color="red" text @click="deleteDesktop(true, ordinateurId)">
                        <v-icon> mdi-delete </v-icon>
                    </v-btn>
                    <v-btn color="black" text @click="handleRename(true, ordinateurId)">
                        <v-icon> mdi-pencil </v-icon>
                    </v-btn>
                </div>
            </div>

          <v-simple-table dense>
            <template v-slot:default>
                <tr v-for="timeslot in timeslots" :key="timeslot.id">
                    <td class="border-bottom border-light col-2 py-0">{{ timeslot.hours}}h</td>

                    <td class="border-bottom border-light col-8 py-0 text-center">{{ timeslot.client.surname}}  {{ timeslot.client.name}} </td>

                    <td class="border-bottom border-light col-2 py-0">
                        <v-btn color="red" icon v-if="timeslot.client != ''" @click="deleteAttributionData(true, timeslot.client.idAssign)"> 
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