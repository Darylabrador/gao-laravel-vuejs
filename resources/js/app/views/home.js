import Axios from "axios";
import Ordinateur from '../components/Ordinateur.vue';
import AddOrdinateurModal from '../components/modals/AddOrdinateurModal.vue';

/**
 * Dashboard data
 */
export default {

    // components 
    components: {
        Ordinateur,
        AddOrdinateurModal
    },

    data() {
        return {
            computerList: []
        }
    },

    created() {
       this.getAllDesktops(); 
    },

    methods: {
        // Enable it only when we use pagination
        // getAllDesktops() {
        //     Axios.get('api/computers').then( ({ data }) => {
        //         var responseData = data.data;
        //         // console.log('liste des ordinateur', responseData);
        //         responseData.forEach(element => {
        //             this.computerList.push(element);
        //         })
        //     })
        // }

        getAllDesktops() {
            Axios.get('api/computers').then( ({ data }) => {
                // console.log(data);
                data.forEach(element => {
                    this.computerList.push(element);
                })
            })
        }
    },
}