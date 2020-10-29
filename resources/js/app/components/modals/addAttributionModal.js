import Autocomplete from "../autocomplete/Autocomplete.vue";

export default {
    components: {
        Autocomplete
    }, 
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        selectedHours: {
            default: function () {
                return {}
            }
        },
        selectedDesktop: {
            default: function () {
                return {}
            }
        },
        selectedDate: {
            default: function () {
                return {}
            } 
        }
    },
    
    data(){
        return {
            selectedClient: {}
        }
    },

    methods: {
        close() {
            this.$emit('update:dialog', false);
        },
        getInfoClient(client){
            this.selectedClient = client;
            console.log(this.selectedClient)
        }
    }
}