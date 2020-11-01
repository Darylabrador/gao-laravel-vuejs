import Axios from "axios";

/**
 * Add client js file
 */
export default {
    /**
     * Data from parent component
     */
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        addClientModal: {
            default: function () {
                return {}
            }
        },
        selectedHours: {},
        selectedDesktop: {},
        selectedDate: {},
    },


    watch: {
        surname: function(val) {
            this.disabledButton();
        },
        name: function(val){
            this.disabledButton()
        }
    },

    /**
     * Data of child component
     */
    data() {
        return {
            name: '',
            surname: '',
            isDisabledButton: true
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
         * Create client and assign in timeslot
         */
        createClient() {
            Axios.post(`/api/client/attributions`, 
            {
                name: this.name,
                surname: this.surname,
                desktop_id: this.selectedDesktop,
                hours: this.selectedHours,
                date: this.selectedDate
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    let responseData = response.data;
                    if(responseData.success) {
                        this.$emit('createdClientAndAssign', responseData.message)
                        this.close();
                    }
                }).catch(error => console.log(error))
        },

        /**
         * Enable create client button only on some condition
         */
        disabledButton(){
            if (this.name != "" && this.surname != "" && this.name.length >= 3 && this.surname.length >= 3){
                this.isDisabledButton = false;
            }else{
                this.isDisabledButton = true;
            }
        }
    }
}