<template>
  <div>
    <div class="w-[95%] flex justify-end items-center">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="../assets/search.png" class="h-5 w-5 fill-slate-300" />
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search..."
          type="text"
          name="search"
          v-model="search"
        />
      </label>
    </div>

    <div v-if="isResponse"> 
      <div class="w-full mt-4">
        <table
        class="w-[90%] mx-auto  text-center border-collapse border border-slate-400 .."
      >
        <thead>
          <tr>
            <th
              v-for="(column, i) of columns"
              :key="i"
              class="text-gray-500 border p-4 border-slate-300 ..."
            >
              {{ column.toUpperCase() }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(data, i) of displayedData"
            :key="i"
            class="text-sm hover:bg-gray-100"
          >
            <td class="text-green-600 border border-slate-300 p-2 ...">
              {{ data.jobType || 0 }}
            </td>
            <td class="text-red-600 border border-slate-300 p-2 ...">
              {{ displayMarketId(data.marketId) || 0 }}
            </td>
            <td
              class="text-green-600 text-gray-500 border border-slate-300 p-2 ..."
            >
              {{ displayOccurrence(data) }}
            </td>
            
            <td
              class="text-red-600 text-gray-500 border border-slate-300 p-2 ..."
            >
              {{ data.status }}
            </td>
            <td
              class="text-green-600 text-gray-500 border border-slate-300 p-2 ..."
            >
              {{ data.jobTime }}
            </td>
            <td
              class="text-red-600 text-gray-500 border border-slate-300 p-2 ..."
              >
              {{ data.lastRunAt }}
            </td>

            <td class="border border-slate-300 p-2 ...">
              <div class="flex flex-column justify-center items-center">
                <button
                        @click="editJob(data)"
                        class="button border border-solid border-green-400 hover:bg-red-500 hover:text-white p-2 my-2 mx-1"
                >
                  Edit
                </button>
                <button
                  @click="handleDelete(data)"
                  class="button border border-solid border-red-400 hover:bg-red-500 hover:text-white p-2 my-2"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-full mx-auto mt-6 flex justify-center mb-4">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <button
              v-if="page != 1"
              @click="page--"
              class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button
              v-for="(pageNumber, i) of pages.slice(page - 1, page + 5)"
              @click="page = pageNumber"
              :key="i"
              class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
              {{ pageNumber }}
            </button>
          </li>
          <li>
            <button
            @click="page++"
            v-if="page < pages.length"
            class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
            <span class="sr-only">Next</span>
            <svg
            aria-hidden="true"
            class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path
              fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div v-else>
    <Spinner />
  </div>
  </div>
</template>

<script>
import jobMixin from "../mixins/jobSearch";
import {mapActions, mapGetters, mapMutations} from "vuex";
import { Config } from "../config/jobConfig";
import moment from "moment";
import marketData from '../config/marketData'
import {serverApi} from '../api/jobapi' 
import Spinner from './spinner.vue'


const apiUrl = serverApi


export default {
  components: {
    Spinner,
},
  data() {
    return {
      ...Config,
      isResponse:false,
      search: "",
      page: 1,
      perPage: 5,
      pages: [],
      columns: ["jobType", "marketId", "occurrence", "status","NextJob","LastJob","Action"],
    };
  },

  computed: {

    displayedData() {
      return this.paginate(this.filteredData);
    },
  },

  methods: {
    ...mapMutations(["SELECTED_JOB_DATA"]),
    displayOccurrence(val) {
      let curobj = Config.occurrenceType.find((v) => v.id === val.occurrence);
      let day = Config.weeklyDay.find((v) => v.id === val.weekDay);
      let month = Config.monthlyType.find((v) => v.id === val.monthDay);

      if (val.occurrence === "W") {
        return curobj
          ? curobj.desc +
              " on " +
              day.desc +
              " at " +
              moment(val.jobTime).format("HH:mm")
          : "";
      }
      if (val.occurrence === "D") {
        return curobj
          ? curobj.desc + " at " + moment(val.jobTime).format("HH:mm")
          : "";
      }
      if (val.occurrence === "M") {
        return curobj
          ? "Monthly on " +
              month.desc +
              " at " +
              moment(val.jobTime).format("HH:mm")
          : "";
      }
    },

    displayMarketId(val){
      let mark_id = marketData.find((v) => v.code === val);
       
        return mark_id.desc

        },

    async editJob(item) {
      console.log(item)
      this.SELECTED_JOB_DATA(item)
      this.$router.push(`job/${item.id}`).then(r => console.log(r))
    },
    async handleDelete(item) {
      await fetch(`${apiUrl}/admin/deleteJob:id?id=${item.id}`, {
        method: "POST" 
      })
      .then((response) => {
        if(!response.isError){
          this.$store.commit('DELETE_JOBDATA',item.id)
        }
      });
    },

    setPages() {
      let numberOfPages = Math.ceil(this.filteredData.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
        
      }
    },

    paginate(filteredData) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return filteredData.slice(from, to);
    },

    ...mapActions(["setJob"]),
    async alljobs() {
      await fetch(`${apiUrl}/admin/getCustomJobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index: 0,
          length: 0,
        }),
      })
        .then((response) => response.json())
        .then((data) => this.setJob(data.data));
        this.setPages();
        this.isResponse = true
    },
  },

  mounted() {
    this.alljobs();
  },

  mixins: [jobMixin],
};
</script>
