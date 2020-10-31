<template class>
    <v-container class="d-flex align-items-center justify-content-center flex-column" style="min-height: 80vh !important;">
       <div class="p-4 rounded border shadow">

        <h5 class="text-center"> Bienvenue sur l’espace culturel </h5>

        <v-form method="POST" style="min-width: 350px !important; margin-top: 50px !important;">
            <v-text-field color="dark" v-model="email" label="Adresse email" required></v-text-field>
            <v-text-field type="password" color="dark" v-model="password" label="Mot de passe" required></v-text-field>
            <div class="d-flex justify-content-end">
                <v-btn small color="blue" class="text-white font-weight-bold" @click="postLogin"> Connexion </v-btn>
            </div>
        </v-form>
       </div>
    </v-container>
</template>

<script src="./login.js"></script>