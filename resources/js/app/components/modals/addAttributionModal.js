import Axios from "axios";
import Autocomplete from "../autocomplete/Autocomplete.vue";

/**
 * Add attribution js file
 */
export default {

    /**
     * Components
     */
    components: {
        Autocomplete
    }, 


    /**
     * Data from parent component
     */
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        addModal: {
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
    

    /**
     * Data of child component
     */
    data(){
        return {
            selectedClient: {},
            isDisabled: false,
        }
    },


    /**
     * list of methods
     */
    methods: {

        /**
         * Handle close modla action
         */
        close() {
            this.$emit('update:dialog', false);
        },

        /**
         * Get information about client
         */
        getInfoClient(client){
            this.selectedClient = client;
        },

        /**
         * Set thee attribution timeslot on DB and inform parent component
         */
        attribute() {
            // Send data to attribute desktop API route
            Axios.post('/api/computers/attributions', {
                desktop_id: this.selectedDesktop,
                client_id: this.selectedClient.id,
                hours: this.selectedHours,
                date: this.selectedDate
            }, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                const responseData = data.data;
                this.$emit('addAssign', responseData)
                this.close();
            })
        },

        /**
         * Disabled attribute button if it's needed
         */
        isDisabledAttribute(isDisabled) {
            this.isDisabled = isDisabled
        }
    }
}