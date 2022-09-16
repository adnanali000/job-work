<template>
  <div>
      <div class="w-[93%] flex justify-end items-center">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src="../assets/search.png" class="h-3 w-3 fill-slate-300" />
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-1 pl-6 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
            v-model="search"
          />
        </label>
      </div>

      <div class="w-full overflow-x-hidden h-[20rem] overflow-visible  mt-2 scrollbar">
        <table
          class="w-[90%] text-center mx-auto  border-collapse border border-slate-400 .."
        >
          <thead>
            <tr>
              <th
                v-for="(column, i) of columns"
                :key="i"
                class="text-sm py-2 text-gray-500 border border-slate-300 ..."
              >
                {{ column.toUpperCase() }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, i) of filteredData"
              :key="i"
              class="text-sm hover:bg-gray-100"
            >
              <td class="text-green-600 border border-slate-300 p-2 w-[200px] ...">{{ data.Name || 0 }}</td>
              <td class="text-red-600 border border-slate-300 p-2 w-[200px] ...">{{ data.CandleCount || 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    
    </div>
</template>

<script>


export default {

  props:["singleDataJob","logResult"],

  data() {
    return {
      search: "",
        columns: [
          "Name",
          "Candle Count",
        ],
    };

    // console.log(this.logResult)
  },
 
  computed: {
        filteredData: function() {
            return this.logResult.filter(data => {
              return data.Name.match(this.search.toUpperCase());
            });
          }
    }

};
</script>

<style scoped>
  .scrollbar::-webkit-scrollbar{
    width: 12px;
  }
  .scrollbar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px gray; 
    border-radius: 10px;
}

.scrollbar::-webkit-scrollbar-thumb {
    height: 50px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 10px gray; 
}
</style>
