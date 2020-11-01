import Axios from "axios";

/**
 * handle delete desktop action
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
        deleteDesktopModal: {
            default: function () {
                return {}
            }
        },
        idDesktop: {
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
         * handle close modal action
         */
        close() {
            this.$emit('update:dialog', false);
        },


        /**
         * handle delete the desktop from DB and inform the parent component
         */
        deleteDesktop() {
            Axios.delete(`/api/computers/${this.idDesktop}`, {
                headers : {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({ data }) =>{
                if(data.success){
                    this.$emit('deletedDesktop', this.idDesktop);
                    this.close();
                }
            })
        }
    }
}