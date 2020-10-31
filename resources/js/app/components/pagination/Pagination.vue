<template>
    <div>
        <v-btn color="blue" icon v-if='paginations.prev != null' @click="prevPagination">
            <v-icon> mdi-chevron-left </v-icon>
        </v-btn>
        <v-btn color="blue" icon v-if='paginations.next != null' @click="nextPagination"> 
            <v-icon> mdi-chevron-right </v-icon>
        </v-btn>
    </div>
</template>

<script src="./pagination.js"></script>