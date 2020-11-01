<template>
    <v-container fluid>

        <addClientModal :dialog.sync="isActiveModalClient" :selectedHours="selectedHours" :selectedDesktop="selectedDesktop" :selectedDate="selectedDate" @createdClientAndAssign="createdClientAndAssign" />

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

                <v-btn icon color="green" v-else @click="openAddClientModal">
                    <v-icon> mdi-plus-circle-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./autocomplete.js"></script>