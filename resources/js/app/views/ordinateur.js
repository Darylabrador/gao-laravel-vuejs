/**
 * Get Data from main Home vue when we pass it data
 * All props are equivalent of what we pass to component. 
 * All props are returning data in object format
 * 
 *  /!\ parent to child /!\
 * 
 */

import AddAttributionModal from "../components/modals/AddAttributionModal.vue";
import DeleteAttributionModal from "../components/modals/DeleteAttributionModal.vue";
import DeleteOrdinateur from "../components/modals/DeleteOrdinateur.vue";
import ModificationOrdi from '../components/modals/RenameOrdi.vue';

export default {
    components: {
        AddAttributionModal,
        DeleteAttributionModal,
        DeleteOrdinateur,
        ModificationOrdi
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

    watch: {
        attributionList: {
            immediate: true,
            handler(value) {
                this.attributionList = value;
                this.attributions = {};
                this.timeslots = [];
                this.initialize();
                this.displayHoraire();
            },
        }
    },

    
    // All data disponible for the child component
    data() {
        return {
            attributions: {},
            timeslots: [],
            addModal: false,
            deleteModal: false,
            deleteDesktopModal: false,
            modifDialog: false,
            selectedHours: '',
            selectedDesktop: '',
            idAssign: '',
            idDesktop: ''
        }
    },


    // All disponible methods
    methods: {

        /**
         * Create the array with assign data
         */
        initialize() {
            if (this.attributionList.length != 0) {
                this.attributionList.forEach(element => {
                    this.attributions[element.hours] = {
                        id: element.client.id,
                        surname: element.client.surname,
                        name: element.client.name,
                        idAssign: element.idAssign
                    }
                })
            }
        },

        
        /**
         * Display assigns hours
         */
        displayHoraire() {
            let arrayData = {};
            this.timeslots = [];

            for(let i = 8; i < 19; i++){
                if (this.attributions[i]){
                    arrayData = {
                        hours: i,
                        client: this.attributions[i],
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
            this.addModal = dialog;
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
                name: assignData.client.name,
                idAssign: assignData.idAssign
            }
            this.initialize();
            this.displayHoraire();
        },


        /**
         * Pass value to delete attribution
         */
        deleteAttributionData(dialog, idAssign){
            this.deleteModal = dialog;
            this.idAssign = idAssign;
        },


        /**
         * Get delete assign data to refresh component
         */
        getDeleteAssignData(idAssign){
            this.attributions = {};
            const refreshDeleteData = this.timeslots.filter(element => element.client.idAssign != idAssign);
            refreshDeleteData.forEach(element => {
                if (element.client.id) {
                    this.attributions[element.hours] = {
                        id: element.client.id,
                        surname: element.client.surname,
                        name: element.client.name,
                        idAssign: element.client.idAssign
                    }
                }
            });
            this.displayHoraire();
        },


        /**
         * Pass value to delete desktop component
         */
        deleteDesktop(dialog, ordinateurId) {
            this.deleteDesktopModal = dialog
            this.idDesktop = ordinateurId;
        },


        /**
         * Get information about deleted desktop
         */
        getDeletedDesktop(idDesktop) {
            this.$emit('deletedDesktop', idDesktop);
        },

        /**
         * Handle renamed desktop
         */
        renamedOrdi(ordinateur) {
            this.$emit('deletedDesktop', ordinateur);
        },

        /**
         * Handle the click to rename desktop
         * @param {Boolean} dialog 
         * @param {Number} ordinateurId 
         */
        handleRename(dialog, ordinateurId) {
            this.modifDialog = dialog;
            this.selectedDesktop = ordinateurId;
        },
    }
}