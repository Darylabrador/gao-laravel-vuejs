import Axios from "axios";
import Ordinateur from '../components/Ordinateur.vue';
import AddOrdinateur from '../components/modals/AddOrdinateurModal.vue';

/**
 * Dashboard data
 */
export default {

    // components 
    components: {
        Ordinateur,
        AddOrdinateur
    },

    data() {
        return {
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
                // console.log('liste des ordinateur', responseData);
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
            })
        }
    },
}