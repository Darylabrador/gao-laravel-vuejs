import Axios from "axios"
import token from "../../services/token.js";

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
            Axios.post('/api/computers', dataSend, {
                headers: {
                    Authorization: `Bearer ${token.isTokenStored()}`
                }
            })
            .then(({data}) => {
                if(data.success) {
                    document.getElementById('formAddOrdi').reset();
                    this.$emit('closeModal', false);
                    this.$emit('addDesktop', data.desktop);
                } else {
                    this.color = "red";
                    this.message = data.message;
                    this.isError = true;
                }
            })
        }
    }
}