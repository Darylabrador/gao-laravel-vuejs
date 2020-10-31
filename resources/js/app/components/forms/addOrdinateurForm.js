import Axios from "axios"
import AlertDesktop from "../alerts/AlertAddDesktop.vue";

/**
 * Form to add computer
 */
export default {

    // child components
    components: {
        AlertDesktop
    },

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
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                if(data.success) {
                    document.getElementById('formAddOrdi').reset();
                    this.$emit('closemodal', false);
                    this.$emit('adddesktop', data.desktop);
                } else {
                    this.color = "red";
                    this.message = data.message;
                    this.isError = true;
                }
            })
        }
    }
}