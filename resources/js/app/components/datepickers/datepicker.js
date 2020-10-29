
export default {
    data: vm => ({
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        menu1: false,
        menu2: false,
    }),

    computed: {
        computedDateFormatted() {
        return this.formatDate(this.date)
        },
    },

    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date)
            this.$emit('datechange', val)
        },
    },

    methods: {
        formatDate(date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate (date) {
            if (!date) return null
            const [day, month, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    },
}