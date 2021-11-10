import { apiService } from "../../services/apiService";

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
            apiService.delete(`/computers/${this.idDesktop}`)
            .then(({ data }) =>{
                if(data.success){
                    this.$emit('deletedDesktop', this.idDesktop);
                    this.flashMessage.success({ title: 'Poste supprimer avec succès' });
                    this.close();
                }
            }).catch(error)
        }
    }
}