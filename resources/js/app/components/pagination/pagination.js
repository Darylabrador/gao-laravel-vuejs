import Axios from 'axios';

/**
 * Handle pagination
 */
export default {

    /**
     * Data from parent component
     */
    props: {
        paginations: {
            default: function(){
                return {}
            }
        },
        date: {
            default: function () {
                return {}
            }
        },
    },

    /**
     * List of methods
     */
    methods: {

        /**
         * Handle the click on prev button
         */
        prevPagination() {
            Axios.get(this.paginations.prev, {
                params: {date: this.date},
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(({data}) => {
                this.$emit('newPage', data)
            })
        },

        /**
         * Handle the click on next button
         */
        nextPagination(){
            Axios.get(this.paginations.next, {
                params: { date: this.date },
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(({ data }) => {
                this.$emit('newPage', data)
            })
        }
    }
}