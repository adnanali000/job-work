<template>
  <div class="h-auto">
    <form
      class="w-full max-w-sm mt-12 mx-auto border border-solid py-10 px-6 shadow-md rounded-lg"
    >
      <h2 class="text-gray-600 text-xl mb-1 font-medium title-font border-b-2">
        Job Form
      </h2>
      <div class="md:flex md:items-center mb-4 pt-6">
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
            required
          >
            <option>Choose Execution</option>
            <option v-for="(job, i) of occurrenceType" :key="i" :value="job.id">
              {{ job.desc }}
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

      <validation
        :errormessage="error.occurrence.message"
        :show="error.occurrence.status"
      />

      <div
        class="md:flex md:items-center mb-4"
        v-if="jobConfig.occurrence === 'W'"
      >
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
            <option
              v-for="(market, i) of weeklyDay"
              :key="i"
              :value="market.id"
            >
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

      <validation
        v-bind:errormessage="error.weekDay.message"
        v-bind:show="error.weekDay.status"
      />

      <div
        class="md:flex md:items-center mb-4"
        v-if="jobConfig.occurrence === 'M'"
      >
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
            <option>Choose Month</option>
            <option
              v-for="(month, i) of monthlyType"
              :key="i"
              :value="month.id"
            >
              {{ month.desc }}
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

      <validation
        v-bind:errormessage="error.monthDay.message"
        v-bind:show="error.monthDay.status"
      />

      <div class="md:flex md:items-center mb-4">
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
            step="900"
          />
        </div>
      </div>

      <validation
        v-bind:errormessage="error.jobTime.message"
        v-bind:show="error.jobTime.status"
      />

      <div class="md:flex md:items-center mb-4">
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
            <option v-for="(job, i) of jobs" :key="i" :value="job.id">
              {{ job.desc }}
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

      <validation
        v-bind:errormessage="error.jobType.message"
        v-bind:show="error.jobType.status"
      />

      <div class="md:flex md:items-center mb-4">
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
            <option
              v-for="(market, i) of marketsData"
              :key="i"
              :value="market.code"
            >
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

      <validation
        v-bind:errormessage="error.marketId.message"
        v-bind:show="error.marketId.status"
      />

      <div
        class="md:flex md:items-center mb-6"
        v-if="jobConfig.jobType === 'data' && symbolList.length > 0"
      >
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
import marketsData from "@/config/marketData";
import validation from "./validation.vue";
import { Config } from "./jobConfig";
import moment from 'moment'
import {serverApi} from '../api/jobapi' 

const apiUrl = serverApi


export default {
  components: {
    validation,
  },
  data() {
    return {
      ...Config,
      jobConfig: {
        occurrence: "",
        weekDay: "",
        monthDay: "",
        jobType: "",
        marketId: "",
        jobTime: 0,
      },
      error: {
        occurrence: { message: "", status: false },
        weekDay: { message: "", status: false },
        monthDay: { message: "", status: false },
        jobType: { message: "", status: false },
        marketId: { message: "", status: false },
        jobTime: { message: "", status: false },
      },
      selectedSymbols: [],
      symbolList: [],
      allSymbols: [],
      selectedJob: "Choose Job",
      selectedCode: "Choose code",
      marketsData: marketsData,
    };
  },
  async mounted() {
    const rawResponse = await fetch(`${apiUrl}/symbols`);
    const content = await rawResponse.json();
    this.allSymbols = content.data;
  },
  methods: {
    async handleJob() {
      let isNotValid = false;
      if (this.jobConfig.occurrence == "") {
        this.error.occurrence.message = "Select Execution Type";
        this.error.occurrence.status = true;
        isNotValid = true;
      }

      if (this.jobConfig.occurrence == "W") {
        if (this.jobConfig.weekDay == "") {
          this.error.weekDay.message = "select week day";
          this.error.weekDay.status = true;
          isNotValid = true;
        }
      } else if (this.jobConfig.monthDay == "M") {
        if (this.jobConfig.monthDay == "") {
          this.error.monthDay.message = "select month day";
          this.error.monthDay.status = true;
          isNotValid = true;
        }
      }
      if (this.jobConfig.jobTime == 0) {
        this.error.jobTime.message = "Select job Time";
        this.error.jobTime.status = true;
        isNotValid = true;
      }
      if (this.jobConfig.jobType == "") {
        this.error.jobType.message = "select job type";
        this.error.jobType.status = true;
        isNotValid = true;
      }
      if (this.jobConfig.marketId == "") {
        this.error.marketId.message = "select market Id";
        this.error.marketId.status = true;
        isNotValid = true;
      }

      if (isNotValid) {
        return;
      } else {
        if (this.jobConfig.marketId && this.jobConfig.jobType) {
          let dataObj = this.jobConfig;
          dataObj.symbolList = "";
          if (this.selectedSymbols.length) {
            dataObj.symbolList = this.selectedSymbols.join(";").concat(";");
          }
          console.log(dataObj.jobTime.split(':')[0])
          let date = moment();
          date.set("hour", Number(dataObj.jobTime.split(':')[0]));
          date.set("minute", Number(dataObj.jobTime.split(':')[1]));
          date.set("seconds",0);
          let jobTime = date.utc().unix();
          console.log('jobTime',jobTime,date)
          dataObj.jobTime = jobTime;
          
          // console.log(moment().utcOffset() / 60);

          // 2022-09-13T22:30:00Z

          // console.log(new Date().getTimezoneOffset())
        
          const rawResponse = await fetch(`${apiUrl}/admin/saveCustomJobs`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
          });
          let res = await rawResponse.json();
          if (!res.isError) {
            this.$router.go();
          }
        }
      }
    },
  },

  computed: {
    marketIdComputed: {
      set(value) {
        this.jobConfig.marketId = value;
      },
      get() {
        return this.jobConfig.marketId;
      },
    },
  },
  watch: {
    marketIdComputed(n, o) {
      this.error.marketId.status = false;
      let marketSymbols = this.allSymbols.filter((d) => d.endsWith(n));
      this.symbolList = marketSymbols.map((d) => {
        let symbolRef = d.split("~")[0];
        return n !== "ASX" ? symbolRef.split(".")[0] : symbolRef;
      });
    },
    "jobConfig.jobType"() {
      this.error.jobType.status = false;
    },
    "jobConfig.occurrence"() {
      this.error.occurrence.status = false;
    },
    "jobConfig.weekDay"() {
      this.error.weekDay.status = false;
    },
    "jobConfig.monthDay"() {
      this.error.monthDay.status = false;
    },
    "jobConfig.marketId"() {
      this.error.marketId.status = false;
    },
    "jobConfig.jobTime"() {
      this.error.jobTime.status = false;
    },
  },
};
</script>

<style></style>
