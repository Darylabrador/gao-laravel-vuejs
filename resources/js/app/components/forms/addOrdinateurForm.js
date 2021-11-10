import { apiService } from "../../services/apiService.js";

/**
 * Form to add computer
 */
export default {
    // Data that can be use on component
    data: () => ({
        name: '',
        message: '',
        color: '',
        isError: false
    }),

    // All methods
    methods: {
        submitForm(event) {
            event.preventDefault();

            let dataSend = {
                name: this.name
            };

            // Send data to add desktop API route
            apiService.post('/computers', dataSend)
            .then(({data}) => {
                if(data.success) {
                    document.getElementById('formAddOrdi').reset();
                    this.$emit('closeModal', false);
                    this.$emit('addDesktop', data.desktop);
                    this.flashMessage.success({ title: data.message });
                } else {
                    this.flashMessage.error({ title: data.message });
                }
            })
        }
    }
}