import { mapGetters } from "vuex";


export default {
  computed: {
        ...mapGetters(['jobData']),  
        filteredData: function() {
            return this.jobData.filter(data => {
              return data.marketId.match(this.search.toUpperCase());
            });
          }
    }
}