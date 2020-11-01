<template>
    <v-container fluid>
        <v-row>
            <v-col cols="10">
                <v-autocomplete
                    v-model="client"
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    cache-items
                    flat
                    hide-no-data
                    hide-details
                    label="Client"
                    solo-inverted
                    return-object
                    item-text="fullname"
                    item-value="id"
                    @change="attribute"
                ></v-autocomplete>
            </v-col>
            <v-col class="mt-2" cols="2">
                <v-btn icon color="green" v-if="disabledButton" disabled>
                    <v-icon> mdi-plus-circle-outline</v-icon>
                </v-btn>
               
                <addClientModal :dialog.sync="isDisplayModal" v-else />
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./autocomplete.js"></script>