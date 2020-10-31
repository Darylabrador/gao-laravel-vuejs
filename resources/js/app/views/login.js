import Axios from 'axios';

export default {

    data(){
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        postLogin() {
            Axios.post('/api/login',{
                email: this.email,
                password: this.password
            }).then(response => {
                console.log(response);
            });
        }
    }
}