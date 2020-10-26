/**
* dashboard vue
*/
<template>
    <v-container>
        <addOrdinateur />
        <v-row>
            <v-col md='4' v-for='(ordinateur,key) in computerList' :key='key'>
                <ordinateur :ordinateurId='ordinateur.id' :ordinateurName='ordinateur.name'/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./home.js"></script>