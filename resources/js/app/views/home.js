import Axios from "axios";
import Ordinateur from '../components/Ordinateur.vue';
import AddOrdinateurModal from '../components/modals/AddOrdinateurModal.vue';
import Datepicker from '../components/datepickers/Datepicker.vue';

/**
 * Dashboard data
 */
export default {

    // components 
    components: {
        Ordinateur,
        AddOrdinateurModal,
        Datepicker
    },

    // data that we can use
    data() {
        return {
            computerList: [],
            dateRechercher: new Date().toISOString().substr(0, 10)
        }
    },

    // init function when the parent is created on SPA
    created() {
       this.getAllDesktops(); 
    },
    
    // All methods
    methods: {
        getAllDesktops() {
            Axios.get('api/computers', {
                params: {
                    date: this.dateRechercher
                }
            }).then( ({ data }) => {
                var responseData = data.data;
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
            })
        },

        // push the created desktop info to current array depending on $emit event
        newdesktop(newcomputer) {
            this.computerList.push(newcomputer)
        },

        // Datepicker value
        changementDate(selectDate){
            this.dateRechercher = selectDate;
            this.computerList = [];
            this.getAllDesktops(); 
        }
    },
}