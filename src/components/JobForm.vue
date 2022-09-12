<template>
  <div class="h-[100vh]">
    <form
      class="w-full max-w-sm mx-auto border border-solid py-10 px-6 shadow-md rounded-lg"
    >
      <h2 class="text-gray-600 text-xl mb-1 font-medium title-font border-b-2">
        Job Form
      </h2>
      <div class="md:flex md:items-center mb-6 pt-6">
        <div class="md:w-1/3">
          <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="occurrenceType"
          >
            Execution Type
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select
                  v-model="jobConfig.occurrence"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="occurrenceType"
          >
            <option>Choose Execution</option>
            <option v-for="(job, i) of occurrenceType" :key="i" :value="job.id">{{ job.desc }}</option>
          </select>
          <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
            >
              <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6" v-if="jobConfig.occurrence === 'W'">
        <div class="md:w-1/3">
          <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="weekDay"
          >
            Week Day
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select

                  v-model="jobConfig.weekDay"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="weekDay"
          >
            <option>Choose Code</option>
            <option v-for="(market, i) of weeklyDay" :key="i" :value="market.code">
              {{ market.desc }}
            </option>
          </select>
          <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
            >
              <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6" v-if="jobConfig.occurrence === 'M'">
        <div class="md:w-1/3">
          <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="monthDay"
          >
            Month Day
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select

                  v-model="jobConfig.monthDay"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="monthDay"
          >
            <option>Choose Code</option>
            <option v-for="(market, i) of monthlyType" :key="i" :value="market.code">
              {{ market.desc }}
            </option>
          </select>
          <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
            >
              <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6 ">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Job Time
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="jobConfig.jobTime"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="inline-full-name"
            type="time"

          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="jobType"
          >
            Job Type
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select
                  v-model="jobConfig.jobType"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="jobType"
          >
            <option>Choose Job</option>
            <option v-for="(job, i) of jobs" :key="i" :value="job.id">{{ job.desc }}</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="marketId"
          >
            Market Id
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select

            v-model="marketIdComputed"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="marketId"
          >
            <option>Choose Code</option>
            <option v-for="(market, i) of marketsData" :key="i" :value="market.code">
              {{ market.desc }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>


      <div class="md:flex md:items-center mb-6" v-if="jobConfig.jobType === 'data' && symbolList.length > 0">
        <div class="md:w-1/3">
          <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="symbolList"
          >
            Symbols
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select

                  v-model="selectedSymbols"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="symbolList"
                  multiple
          >
            <option v-for="(market, i) of symbolList" :key="i" :value="market">
              {{ market }}
            </option>
          </select>

        </div>
      </div>


      <div class="md:flex md:items-center md:justify-end">
        <div class="md:w-2/3">
          <button
            @click="handleJob"
            class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Create Job
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import marketsData from "@/config/marketData"
  const apiUrl = 'http://139.180.181.26:9090/api/v1';
export default {
  data() {

    return {

      jobs: [
        {id:"data",desc:'Data Job'}
      ],
      occurrenceType: [
        {id:"D",desc:'Daily'},
        {id:"W",desc:'Weekly'},
        {id:"M",desc:'Monthly'},
      ],
      monthlyType: [
        {id:"S",desc:'Start of Month'},
        {id:"E",desc:'End of Month'},
      ],
      weeklyDay:[
        {id:"0",desc:'Sunday'},
        {id:"1",desc:'Monday'},
        {id:"2",desc:'Tuesday'},
        {id:"3",desc:'Wednesday'},
        {id:"4",desc:'Thursday'},
        {id:"5",desc:'Friday'},
        {id:"6",desc:'Saturday'},
      ],
      jobConfig:{
        occurrence: "",
        weekDay: "",
        monthDay: "",
        jobType: "",
        marketId: "",
        jobTime: 0,
      },
      selectedSymbols:[],
      symbolList:[],
      allSymbols:[],
      selectedJob: "Choose Job",
      selectedCode: "Choose code",
      marketsData: marketsData,
    };
  },
  async mounted() {
    const rawResponse = await fetch(`${apiUrl}/symbols`);
    const content = await rawResponse.json();
    this.allSymbols = content.data
  },
  methods: {
    async handleJob() {
      console.log(this.jobConfig);
      if(this.jobConfig.marketId && this.jobConfig.jobType){
        let dataObj = this.jobConfig
        dataObj.symbolList = "";
        if(this.selectedSymbols.length){
          dataObj.symbolList = this.selectedSymbols.join(";").concat(";")
        }
        const rawResponse = await fetch(`${apiUrl}/admin/saveCustomJobs`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataObj)
        });
        const content = await rawResponse.json();
        console.log(content);
      }


    },
  },
  computed:{
    marketIdComputed:{
      set(value){
        this.jobConfig.marketId =value
      },
      get(){
        return this.jobConfig.marketId
      }
    },
  },
  watch:{
    marketIdComputed(n,o){

      let marketSymbols = this.allSymbols.filter(d => d.endsWith(n))
      console.log(n,o,marketSymbols)
      this.symbolList = marketSymbols.map(d => {
        let symbolRef = d.split("~")[0]
        return symbolRef.split('.')[0]
      })
    }
  }
};
</script>

<style></style>
