/**
* dashboard vue
*/
<template>
    <v-container>
        <div v-for='(ordinateur,key) in computerList' :key='key'>
            {{ ordinateur }}
        </div>
    </v-container>
</template>

<script src="./dashboardInfo.js"></script>