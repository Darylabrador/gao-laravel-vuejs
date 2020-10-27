/**
* Template form : add computer 
*/
<template>
    <v-container fluid>

        <!-- alert message -->
        <alertDesktop :color="color" :message="message" :isError="isError" v-if="isError" />

        <!-- form to add desktop -->
        <v-form id="formAddOrdi" ref="form" method="POST" @submit="submitForm">
            <input required v-model="name" class="form-control my-4" placeholder="Nom du postes">
            <div class="d-flex justify-content-end">
                <v-btn color="blue" class="mr-4" type="submit" v-if="name.length > 1"> Ajouter </v-btn>
                <v-btn color="blue" class="mr-4" v-else disabled> Ajouter </v-btn>
            </div>
        </v-form>

    </v-container>
</template>
    
<script src="./addOrdinateurForm.js"></script>