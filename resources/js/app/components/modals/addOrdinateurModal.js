/**
 * Script for dialog using vuetify modal
 */

import AddOrdinateurForm from '../forms/AddOrdinateurForm.vue';

export default {
    
    components: {
        AddOrdinateurForm
    },

    data() {
        return {
            dialog: false,
        }
    },
    
    methods: {
        // GET data from emit event from child element to close modal
        isclosemodal: function(event){
           return this.dialog = event;
        }
    }
}