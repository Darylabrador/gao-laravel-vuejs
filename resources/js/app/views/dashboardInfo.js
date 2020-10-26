import Axios from "axios";

/**
 * Dashboard data
 */
export default {
    data() {
        return {
            username: 'toto',
            computerList: []
        }
    },

    // mounted() {
        
    // },

    created() {
       this.getAllDesktops(); 
    },

    methods: {
        getAllDesktops() {
            Axios.get('api/computers').then( ({ data }) => {
                var responseData = data.data;
                console.log('liste des ordinateur', responseData);

                responseData.forEach(element => {
                    this.computerList.push(element);
                })
            })
        }
    },
}