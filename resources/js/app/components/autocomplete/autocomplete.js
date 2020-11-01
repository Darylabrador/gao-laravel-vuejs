import Axios from 'axios';
import AddClientModal from '../modals/AddClientModal.vue';

/**
 * Autocomplete
 */
export default {

    components: {
        AddClientModal
    },

    data() {
        return {
            loading: false,
            items: [],
            search: null,
            client: null,
            disabledButton: true,
            isDisplayModal: false,
            dialog: false
        }
    },

    watch: {
        search(val) {
            val && val !== this.client && this.querySelections(val)
            this.$emit('disabledButtonAttribute', false);

            if(this.client == val){
                this.attribute(this.client)
            }else{
                this.disabledButton = true;
            }
        },
    },

    methods: {
        querySelections(v) {
            if(v.length >= 3) {
                setTimeout(() => {
                    Axios.post('/api/client/search', 
                    { clientInfo: v },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                    )
                    .then(({ data }) => {
                        var responseData = data.data;

                        if(responseData.length == 0 && this.client == null) {
                            this.disabledButton = false;
                            this.$emit('disabledButtonAttribute', true)
                        }

                        responseData.forEach(client => {
                            this.items.push({
                                id: client.id,
                                name: client.name,
                                surname: client.surname,
                                fullname: `${client.surname} ${client.name}`
                            })
                        })
                    })
                }, 500)
            }
        },

        attribute(client){
            this.items = [];
            this.disabledButton = true;
            this.$emit('attributeClient', client);
            this.$emit('disabledButtonAttribute', false)
        },

        displayModalAddClient() {
            this.isDisplayModal = true;
            this.$emit('displayAddClientModal', false);
        }
    },
}