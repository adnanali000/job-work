import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
          jobData: [],

          datajoblog: []




    },

    mutations:{
        DELETE_JOBDATA: (state,id) => {
            let newList = state.jobData.filter(x => x.id !== id)
            state.jobData = newList
        }
    },

    actions:{
      setJob(context,payload){
        this.state.jobData = payload
      },

      setDataJob(context,payload){
        this.state.datajoblog = payload
        console.log(this.state.datajoblog)
      }
    },

    getters:{

        jobData: state => state.jobData,

        datajoblog: state => state.datajoblog
    }
})