import { mapGetters } from "vuex";


export default {
  computed: {
        ...mapGetters(['datajoblog']),  
        filteredData: function() {
            return this.datajoblog.filter(data => {
              return data.marketId.match(this.search.toUpperCase());
            });
          }
    }
}