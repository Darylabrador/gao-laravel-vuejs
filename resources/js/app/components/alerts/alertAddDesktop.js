/**
 * Js for alert add desktop component
 */
export default {

    // data from parent components
    props: {
        message: {
            default: function() {
                return {}
            }
        },
        color: {
            default: function () {
                return {}
            }
        },
        isError: {
            default: function () {
                return {}
            }
        }
    },

    // data that can be use by alert add desktop component
    data () {
        return {
            alert: this.isError
        }
    },
}