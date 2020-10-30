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
            Axios.delete(`/api/computers/${this.iddesktop}`)
                .then(({ data }) =>{
                    if(data.success){
                        this.$emit('deleteddesktop', this.iddesktop);
                        this.close();
                    }
                })
        }
    }
}