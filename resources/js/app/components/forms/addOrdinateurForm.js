import Axios from "axios"
import AlertDesktop from "../alerts/AlertAddDesktop.vue";

/**
 * Form to add computer
 */
export default {
    components: {
        AlertDesktop
    },

    data: () => ({
        name: '',
        message: '',
        color: '',
        isError: false
    }),

    methods: {
        submitForm(event) {
            event.preventDefault();

            let dataSend = {
                name: this.name
            };

            // add desktop
            Axios.post('/api/computers', dataSend)
                .then(({data}) => {
                    if(data.success) {
                        document.getElementById('formAddOrdi').reset();
                        this.$emit('closemodal', false);
                        this.$emit('desktopInfoAdd', data.desktop);
                    } else {
                        this.color = "red";
                        this.message = data.message;
                        this.isError = true;
                    }
                })
        }
    }
}