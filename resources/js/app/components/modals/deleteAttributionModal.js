import Axios from "axios";

/**
 * Handle the delete attribution timeslot
 */
export default {

    /**
     * Data from the parent component
     */
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        deleteModal: {
            default: function () {
                return {}
            }
        },
        idAssign: {
            default: function () {
                return {}
            }
        }
    },

    /**
     * List of methods
     */
    methods: {

        /**
         * Handle close modal action
         */
        close() {
            this.$emit('update:dialog', false);
        },


        /**
         * Delete attribution and inform parent component
         */
        deleteAssign() {
            Axios.delete(`/api/computers/attributions/${this.idAssign}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                let responseData = data;
                if(responseData.success){
                    this.$emit('deleteAssign', this.idAssign);
                    this.close();
                }
            }).catch(error=> console.log(error))
        }
    }
}