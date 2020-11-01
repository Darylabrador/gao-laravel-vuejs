import Axios from 'axios';

export default {
    data(){
        return {
            email: '',
            password: '',
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
                } else {
                    this.flashMessage.error({
                        title: responseData.message,
                        time: 8000,
                    });
                }
            });
        }
    }
}