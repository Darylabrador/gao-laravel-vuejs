/**
* Home vue
* Display all computers in card on the frontend
*/
<template>
    <v-container>

        <!-- event to get new desktop info from child component through adddesktop emit and newdesktop method -->
        <addOrdinateurModal @adddesktop="newdesktop"/>
        
        <v-row>
            <v-col md='4' v-for='(ordinateur,key) in computerList' :key='key'>
                <ordinateur :ordinateurId='ordinateur.id' :ordinateurName='ordinateur.name'/>
            </v-col>
        </v-row>

    </v-container>
</template>

<script src="./home.js"></script>