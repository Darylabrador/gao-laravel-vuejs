import Axios from "axios";

export default {
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        deletedesktopmodal: {
            default: function () {
                return {}
            }
        },
        iddesktop: {
            default: function () {
                return {}
            }
        }
    },

    methods: {
        close() {
            this.$emit('update:dialog', false);
        },
        deletedesktop() {
            console.log(this.iddesktop)
        }
    }
}