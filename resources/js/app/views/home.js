import Axios from "axios";
import Ordinateur from './Ordinateur.vue';
import AddOrdinateurModal from '../components/modals/AddOrdinateurModal.vue';
import Datepicker from '../components/datepickers/Datepicker.vue';
import Pagination from '../components/pagination/Pagination.vue';
import token from "../services/token.js";

/**
 * Dashboard data
 */
export default {

    // components 
    components: {
        Ordinateur,
        AddOrdinateurModal,
        Datepicker,
        Pagination
    },

    // data that we can use
    data() {
        return {
            computerList: [],
            dateRechercher: new Date().toISOString().substr(0, 10),
            paginationLink: {},
            currentPage: 1
        }
    },
    
    // init function when the parent is created on SPA
    created() {
       this.getAllDesktops(); 
        
    },
    
    // All methods
    methods: {

        /**
         * Request to get all desktop with pagination
         */
        getAllDesktops() {
            this.computerList = [];
            Axios.get('api/computers', {
                params: {
                    date: this.dateRechercher
                },
                headers: {
                    Authorization: `Bearer ${token.isTokenStored()}`
                }
            }).then( ({ data }) => {
                var responseData = data.data;
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
                this.paginationLink = data.links;
            })
        },


        /**
         * On the emit we refresh the list of desktop and keep the same page
         */
        newDesktop(newComputer) {
            // this.computerList.push(newComputer)
            this.computerList = [];
            Axios.get(`/api/computers`, {
                params: {
                    date: this.dateRechercher,
                    page: this.currentPage
                },
                headers: {
                    Authorization: `Bearer ${token.isTokenStored()}`
                }
            })
            .then(({ data }) => {
                var responseData = data.data;
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
                this.paginationLink = data.links;
            })
        },


        /**
         * Datepicker value
         */
        changementDate(selectDate){
            this.dateRechercher = selectDate;
            this.computerList = [];
            this.getAllDesktops(); 
        },


        /**
         * Refresh desktop list and paginations when one it deleted
         */
        getDeletedDesktop(idDesktop){
            // const refreshDeleteData = this.computerList.filter(element => element.id != idDesktop);
            // this.computerList = [];
            // refreshDeleteData.forEach(element => {
            //     this.computerList.push(element);
            // });

            this.computerList = [];
            Axios.get(`/api/computers`, {
                params: { 
                    date: this.dateRechercher ,
                    page: this.currentPage
                },
                headers: {
                    Authorization: `Bearer ${token.isTokenStored()}`
                }
            })
            .then(({ data }) => {
                var responseData = data.data;
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
                this.paginationLink = data.links;
            })
        },


        /**
         * handle the pagination action
         */
        newPage(page){
            this.computerList   = [];
            page.data.forEach(element => {
                this.computerList.push(element)
            })
            this.paginationLink = page.links;
            this.currentPage = page.meta.current_page;
        }
    },
}