export default {
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

    data () {
        return {
            alert: this.isError
        }
    },
}