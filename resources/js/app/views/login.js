import Axios from 'axios';
import AlertComponent from '../components/alerts/AlertAddDesktop.vue';

export default {
    components:{
        AlertComponent
    },

    data(){
        return {
            email: '',
            password: '',
            message : '',
            color: '',
            isError: ''
        }
    },

    methods: {
        postLogin() {
            Axios.post('/api/login',{
                email: this.email,
                password: this.password
            }).then((response) => {
                let responseData = response.data;
                if (responseData.success){
                    localStorage.setItem('token', responseData.token);
                    location.href = '/';
                    this.isError = false;
                    this.message = "";
                    this.color   = "";
                } else {
                    this.isError = true;
                    this.message = responseData.message;
                    this.color   = "red";
                }
            });
        }
    }
}