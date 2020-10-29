import Axios from "axios";

export default {
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        deletemodal: {}
    },

    data() {
        return {
            
        }
    },

    methods: {
        close() {
            this.$emit('update:dialog', false);
        }
    }
}