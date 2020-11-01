/**
 * Script for dialog using vuetify modal
 */

import AddOrdinateurForm from '../forms/AddOrdinateurForm.vue';

export default {
    
    // child components
    components: {
        AddOrdinateurForm
    },

    // Data that can be used
    data() {
        return {
            dialog: false,
        }
    },
    
    // all methods
    methods: {
        // GET data from emit event from child element to close modal
        isCloseModal: function(event){
           return this.dialog = event;
        },

        // $emit can be use to push data to parent component through an event
        newDesktop: function(evnt){
            this.flashMessage.success({ title: "Poste ajouter avec succès" });
            this.$emit('addDesktop', evnt)
        }
    }
}