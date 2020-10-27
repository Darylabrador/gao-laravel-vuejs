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
        getAllDesktops() {
            Axios.get('api/computers').then( ({ data }) => {
                // console.log(data);
                data.forEach(element => {
                    this.computerList.push(element);
                })
            })
        },

        // push the created desktop info to current array
        newdesktop(newcomputer) {
            this.computerList.push(newcomputer)
        }
    },
}