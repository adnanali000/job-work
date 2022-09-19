import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
          jobData: [],
          selectedJob:null,
          datajoblog: []
    },

    mutations:{
        DELETE_JOBDATA: (state,id) => {
            let newList = state.jobData.filter(x => x.id !== id)
            state.jobData = newList
        },

        DELETE_DATA_JOB_LOG: (state,id) => {
          let newList = state.datajoblog.filter(x => x.id !== id)
          state.datajoblog = newList
      },
        SELECTED_JOB_DATA: (state,job) => {
            state.selectedJob = job
        },


    },

    actions:{
      setJob(context,payload){
        this.state.jobData = payload
      },

      setDataJob(context,payload){
        this.state.datajoblog = payload
        // console.log(this.state.datajoblog)
      }
    },

    getters:{

        jobData: state => state.jobData,
        selectedJobInStore: state => state.selectedJob,

        datajoblog: state => state.datajoblog
    }
})