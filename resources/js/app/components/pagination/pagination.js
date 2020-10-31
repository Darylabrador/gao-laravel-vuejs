import Axios from 'axios';

export default {
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

    methods: {
        prevPagination() {
            Axios.get(this.paginations.prev, {
                params: {date: this.date}
            })
            .then(({data}) => {
                this.$emit('newpage', data)
            })
        },
        nextPagination(){
            Axios.get(this.paginations.next, {
                params: { date: this.date }
            })
            .then(({ data }) => {
                this.$emit('newpage', data)
            })
        }
    }
}