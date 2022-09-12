import { mapGetters } from "vuex";


export default {
  computed: {
        ...mapGetters(['tableData']),
        filteredData: function() {
            return this.tableData.filter(data => {
              return data.name.match(this.search.toLowerCase()) || data.dep.area.match(this.search.toLowerCase()) ;
            });
          }
    }
}