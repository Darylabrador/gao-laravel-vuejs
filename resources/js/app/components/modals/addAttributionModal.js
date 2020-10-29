export default {

    props: {
        dialog: {
            default: function () {
                return {}
            }
        },
        selectedHours: {
            default: function () {
                return {}
            }
        },
        selectedDesktop: {
            default: function () {
                return {}
            }
        }
    },
    
    methods: {
        close() {
            this.$emit('update:dialog', false);
        }
    }
}