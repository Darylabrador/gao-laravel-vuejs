import Axios from "axios";
import token from '../../services/token.js';
import { apiService } from "../../services/apiService";

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
            apiService.delete(`/computers/attributions/${this.idAssign}`)
            .then(({data}) => {
                let responseData = data;
                if(responseData.success){
                    this.flashMessage.success({ title: "Attribution annuler" });
                    this.$emit('deleteAssign', this.idAssign);
                    this.close();
                }
            }).catch(error=> console.log(error))
        }
    }
}