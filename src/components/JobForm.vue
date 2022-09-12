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
            for="inline-full-name"
          >
            Created At
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="createdAt"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="inline-full-name"
            type="datetime-local"
            value=""
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Job Type
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="grid-state"
          >
            <option>Choose Job</option>
            <option v-for="(job, i) of jobs" :key="i">{{ job.desc }}</option>
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
            for="inline-password"
          >
            Job Desc
          </label>
        </div>
        <div class="relative md:w-2/3">
          <select
            v-model="jobDesc"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="grid-state"
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
export default {
  data() {
    return {
      jobDesc: '',
      createdAt: "",
      jobs: [
        {id:"data",desc:'Data Job'}
      ],
      selectedJob: "Choose Job",
      selectedCode: "Choose code",
      marketsData: [
        {
          id: 2,
          selected: false,
          hide: false,
          desc: "ASX",
          code: "ASX",
          marketTime: {
            zone: "Australia/Sydney",
            startTime: 9,
            endTime: 17,
          },
        },
        {
          id: 3,
          selected: false,
          hide: false,
          desc: "INDICES",
          code: "INDX",
          marketTime: {
            zone: "America/New_York",
            startTime: 9,
            endTime: 17,
          },
        },
        {
          id: 4,
          selected: false,
          hide: false,
          desc: "NASDAQ",
          code: "NASDAQ",
          marketTime: {
            zone: "America/New_York",
            startTime: 9,
            endTime: 17,
          },
        },
        {
          id: 5,
          selected: false,
          hide: false,
          desc: "NYSE",
          code: "NYSE",
          marketTime: {
            zone: "America/New_York",
            startTime: 9,
            endTime: 17,
          },
        },
        {
          id: 6,
          selected: false,
          hide: false,
          desc: "SGX",
          code: "SG",
          marketTime: {
            zone: "Asia/Singapore",
            startTime: 9,
            endTime: 17,
          },
        },
      ],
    };
  },

  methods: {
    handleJob() {
      console.log(this.jobDesc);
    },
  },
};
</script>

<style></style>
