/**
 * Get Data from main Home vue when we pass it data
 * All props are equivalent of what we pass to component. 
 * All props are returning data in object format
 * 
 *  /!\ parent to child /!\
 * 
 */

import AddAttributionModal from "../components/modals/AddAttributionModal.vue";

export default {
    components: {
        AddAttributionModal
    },

    // Data from parent components
    props: {
        ordinateurId: {
            default: function() {
                return {}
            }
        },
        ordinateurName: {
            default: function () {
                return {}
            }
        },
        attributionList: {
            default: function () {
                return {}
            }
        },
        selectedDate: {
            default: function () {
                return {}
            }
        }
    },


    // init function when the component is created
    created() {
        this.initialize();
        this.displayHoraire();
    },


    // All data disponible for the child component
    data() {
        return {
            attributions: {},
            timeslots: [],
            dialog: false,
            selectedHours: '',
            selectedDesktop: ''
        }
    },


    // All disponible methods
    methods: {

        /**
         * Create the array with assign data
         */
        initialize() {
            this.attributionList.forEach(element => {
                this.attributions[element.hours] = {
                    id: element.client.id,
                    surname: element.client.surname,
                    name: element.client.name
                }
            })
        },

        
        /**
         * Display assigns hours
         */
        displayHoraire() {
            let arrayData = {};
            for(let i = 8; i < 19; i++){
                if (this.attributions[i]){
                    arrayData = {
                        hours: i,
                        client: this.attributions[i]
                    }
                    this.timeslots.push(arrayData)
                }else{
                    arrayData = {
                        hours: i,
                        client: ''
                    }
                    this.timeslots.push(arrayData)
                }
            }
        },

        /**
         * Pass multiple value as props to child component
         */
        attributionDataAction(dialog, hours, desktop ) {
            this.dialog = dialog;
            this.selectedHours = hours;
            this.selectedDesktop = desktop;
        },

        /**
         * Refresh desktop component with new assign data
         */
        getAssignData(assignData){
            this.attributions[assignData.hours] = {
                id: assignData.client.id,
                surname: assignData.client.surname,
                name: assignData.client.name
            }

            this.timeslots = [];
            this.initialize();
            this.displayHoraire();
        }
    }
}