import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tableData: [
            {
              id:1,  
              name: "john",
              hobby: "coding and coding repeat",
              address: "No.1 Century Avenue, Shanghai",
              dep: {
                area: "bscs",
                status: "Active",
              },
            },
            {
              id:2,
              name: "dickerson",
              date: "1910-06-20",
              hobby: "coding and coding repeat",
              address: "No.1 Century Avenue, Beijing",
              dep: {
                area: "engineering",
                status: "Active",
              },
            },
            {
              id:3,  
              name: "larsen",
              date: "2000-07-20",
              hobby: "coding and coding repeat",
              address: "No.1 Century Avenue, Chongqing",
              dep: {
                area: "aviation",
                status: "In Active",
              },
            },
            {
              id:4,  
              name: "geneva",
              date: "2010-08-20",
              hobby: "coding and coding repeat",
              address: "No.1 Century Avenue, Xiamen",
              dep: {
                area: "bba",
                status: "Active",
              },
            },
            {
              id:5,  
              name: "jami",
              date: "2020-09-20",
              hobby: "coding and coding repeat",
              address: "No.1 Century Avenue, Shenzhen",
              dep: {
                area: "medical",
                status: "In Active",
              },
            },
            {
                id:6,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
              {
                id:7,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
              {
                id:8,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
              {
                id:9,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
              {
                id:10,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
              {
                id:11,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
              {
                id:12,  
                name: "jami",
                date: "2020-09-20",
                hobby: "coding and coding repeat",
                address: "No.1 Century Avenue, Shenzhen",
                dep: {
                  area: "medical",
                  status: "In Active",
                },
              },
          ],
    },

    mutations:{
        DELETE_USER: (state,id) => {
            let newList = state.tableData.filter(x => x.id !== id)
            state.tableData = newList
        }
    },

    getters:{
        tableData: state => state.tableData
    }
})