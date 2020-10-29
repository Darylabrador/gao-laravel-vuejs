import Axios from 'axios';

export default {
    data() {
        return {
            loading: false,
            items: [],
            search: null,
            client: null,
        }
    },
    watch: {
        search(val) {
            val && val !== this.client && this.querySelections(val)
            if(this.client == val){
                this.attribute(this.client)
            }
        },
    },
    methods: {
        querySelections(v) {
            if(v.length >= 3) {
                setTimeout(() => {
                    Axios.post('/api/client/search', { clientInfo: v })
                        .then(({ data }) => {
                            var responseData = data.data;
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
            this.$emit('attributeclient', client)
        }
    },
}