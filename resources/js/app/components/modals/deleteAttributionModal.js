import Axios from "axios";

export default {
    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        deletemodal: {
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

    methods: {
        close() {
            this.$emit('update:dialog', false);
        },
        deleteassign() {
            Axios.delete(`/api/computers/attributions/${this.idAssign}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                let responseData = data;
                if(responseData.success){
                    this.$emit('deleteassign', this.idAssign);
                    this.close();
                }
            }).catch(error=> console.log(error))
        }
    }
}