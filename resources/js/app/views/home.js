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

    // data that we can use
    data() {
        return {
            computerList: []
        }
    },

    // init function when the parent is created on SPA
    created() {
       this.getAllDesktops(); 
    },

    // All methods
    methods: {
        getAllDesktops() {
            Axios.get('api/computers').then( ({ data }) => {
                var responseData = data.data;
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
            })
        },

        // push the created desktop info to current array depending on $emit event
        newdesktop(newcomputer) {
            // this.computerList.push(newcomputer)
            this.getAllDesktops(); 
        }
    },
}