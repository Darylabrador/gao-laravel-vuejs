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
        },
        attribute() {
            console.log(this.selectedHours)
            console.log(this.selectedDesktop)
            console.log(this.selectedDate)
            console.log(this.selectedClient)
        }
    }
}