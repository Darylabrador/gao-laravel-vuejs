import Axios from "axios";
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
            // Send data to attribute desktop API route
            Axios.post('/api/computers/attributions', {
                desktop_id: this.selectedDesktop,
                client_id: this.selectedClient.id,
                hours: this.selectedHours,
                date: this.selectedDate
            })
            .then((response) => {
                console.log(response)
            })
        }
    }
}