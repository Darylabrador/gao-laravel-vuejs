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
        isDisplayModal: {
            default: function () {
                return {}
            }
        },
    },


    /**
     * Data of child component
     */
    data() {
        return {
            name: '',
            surname: ''
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

        createClient() {
            console.log('nom', this.surname, 'prenom', this.name)
        }
    }
}