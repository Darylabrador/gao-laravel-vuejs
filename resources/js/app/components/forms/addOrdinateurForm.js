/**
 * Form to add computer
 */
export default {

    data: () => ({
        valid: true,
        name: ''
        // isDisabled: 'disabled'
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },

        // checkForm() {
        //     if (this.name.length >= 1) {
        //         return this.isDisabled = "";
        //     } else {
        //         return this.isDisabled = "disabled";
        //     }
        // }
    }
}