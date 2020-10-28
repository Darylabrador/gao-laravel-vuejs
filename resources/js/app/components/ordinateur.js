/**
 * Get Data from main Home vue when we pass it data
 * All props are equivalent of what we pass to component. 
 * All props are returning data in object format
 * 
 *  /!\ parent to child /!\
 * 
 */
export default {
    
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
            attributions: [],
            timeslots: [],
            horaires: []
        }
    },


    // All disponible methods
    methods: {

        /**
         * Create the array with assign data
         */
        initialize() {
            this.attributionList.forEach(element => {
                let heure  = element.hours;
                let client = `${element.client[0].surname} ${element.client[0].name}`;
                let arrayData = { 'key': heure, 'value': client }
                this.attributions.push(arrayData)
            })
        },

        
        /**
         * Display assigns hours
         */
        displayHoraire() {
            let horaires = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            let arrayData;

            for (let i = 0; i < horaires.length; i++) {
                this.attributions.forEach(element => {
                    if (element.key == horaires[i]) {
                        arrayData = { 'horaire': horaires[i], 'client': element.value }
                        this.timeslots.push(arrayData)
                    } else {
                        arrayData = { 'horaire': horaires[i], 'client': "" }
                        this.timeslots.push(arrayData);
                    }
                })
            }

            horaires.forEach(element => {
                this.horaires.push(element)
            });
        }
    }
}