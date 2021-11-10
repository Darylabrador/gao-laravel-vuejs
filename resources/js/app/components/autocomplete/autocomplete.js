import AddClientModal from '../modals/AddClientModal.vue';
import { apiService } from '../../services/apiService';

/**
 * Autocomplete
 */
export default {

    components: {
        AddClientModal
    },

    props: {
        selectedHours: {},
        selectedDesktop: {},
        selectedDate: {},
    },

    data() {
        return {
            loading: false,
            items: [],
            search: null,
            client: null,
            disabledButton: true,
            isActiveModalClient: false
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
                    apiService.post('/client/search', { clientInfo: v })
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

        openAddClientModal(){
            this.isActiveModalClient = true
            this.$emit('addClientModalActive', false);
        },

        createdClientAndAssign(val){
            this.$emit('createdClientAndAssign', val)
        }
    },
}