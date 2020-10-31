export default {
    data() {
        return {
            isLogged: localStorage.getItem('token')
        }
    },
    methods: {
        deconnexion() {
            localStorage.clear();
            location.href = '/login';
        }
    }
}