import { mapGetters } from "vuex";


export default {
  computed: {
        ...mapGetters(['jobData']),  
        filteredData: function() {
            return this.jobData.filter(data => {
              return data.occurrence.match(this.search.toUpperCase()) 
              // || data.marketId.match(this.search.toUpperCase());
            });
          }
    }
}