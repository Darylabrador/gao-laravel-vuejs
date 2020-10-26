/**
 * Get Data from main Home vue when we pass it data
 * All props are equivalent of what we pass to component. 
 * All props are returning data in object format
 */
export default {
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
        }
    }
}