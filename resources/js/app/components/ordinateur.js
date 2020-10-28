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


    // init function when the component is loaded
    created() {
        this.initialize();
    },


    data() {
        return {
            attributions: []
        }
    },


    // All disponible methods
    methods: {
        initialize() {
            console.log('heure', this.attributionList)
        }
    }
}