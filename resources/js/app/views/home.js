import Axios from "axios";
import Ordinateur from './Ordinateur.vue';
import AddOrdinateurModal from '../components/modals/AddOrdinateurModal.vue';
import Datepicker from '../components/datepickers/Datepicker.vue';
import Pagination from '../components/pagination/Pagination.vue';

import Vue from 'vue';
var bus = new Vue();

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
        getAllDesktops() {
            this.computerList = [];
            Axios.get('api/computers', {
                params: {
                    date: this.dateRechercher
                }
            }).then( ({ data }) => {
                var responseData = data.data;
                responseData.forEach(element => {
                    this.computerList.push(element);
                })
                this.paginationLink = data.links;
            })
        },

        // push the created desktop info to current array depending on $emit event
        newdesktop(newcomputer) {
            this.computerList.push(newcomputer)
        },

        // Datepicker value
        changementDate(selectDate){
            this.dateRechercher = selectDate;
            this.computerList = [];
            this.getAllDesktops(); 
        },

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

        newpage(page){
            this.computerList   = [];
            page.data.forEach(element => {
                this.computerList.push(element)
            })
            this.paginationLink = page.links;
            this.currentPage = page.meta.current_page;
        }
    },
}