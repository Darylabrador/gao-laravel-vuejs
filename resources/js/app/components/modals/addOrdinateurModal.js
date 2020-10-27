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
        isclosemodal: function(event){
           return this.dialog = event;
        },

        // $emit can be use to push data to parent component through an event
        newdesktop: function(evnt){
            this.$emit('adddesktop', evnt)
        }
    }
}