<template>
  <div class="relative">
    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      :class="{ 'hidden opacity-0': !isModal }"
      class="overflow-y-hidden absolute overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
    >
      <div class="relative p-4 w-full mx-auto max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-600 dark:text-white">
              Data Job Detail
            </h3>
            <button
              @click="closeModal()"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-red-500 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <DataJobDetail
              :singleDataJob="singleDataJob"
              :logResult="logResult"
            />
          </div>
        </div>
      </div>
    </div>

    <div :class="{ 'bg-gray-200 opacity-20': isModal }">
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
        <div class="w-full overflow-x-hidden mt-4">
          <table
            class="w-[90%] text-center mx-auto border-collapse border border-slate-400 .."
          >
            <thead>
              <tr>
                <th
                  v-for="(column, i) of columns"
                  :key="i"
                  class="py-4 text-sm p-4 text-gray-500 border border-slate-300 ..."
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
                  {{ displayMarketId(data.marketId) || 0 }}
                </td>
                <td
                  class="text-red-600 border border-slate-300 p-2 cursor-pointer ..."
                  @click="ViewJobDetail(data, 'candleUpdate')"
                >
                  {{ data.logResults.candleUpdated.length || 0 }}
                </td>
                <td
                  class="text-green-600 border border-slate-300 p-2 cursor-pointer ..."
                  @click="ViewJobDetail(data, 'failedRequest')"
                >
                  {{ data.logResults.failedRequest.toString() || 0 }}
                </td>
                <td
                  class="text-red-600 border border-slate-300 p-2 cursor-pointer ..."
                  @click="ViewJobDetail(data, 'skippingData')"
                >
                  {{ data.logResults.skippingData.length || 0 }}
                </td>
                <td
                  class="text-green-600 border border-slate-300 p-2 cursor-pointer ..."
                  @click="ViewJobDetail(data, 'updateNotFound')"
                >
                  {{ data.logResults.candleDataNotFoundFromApi.length || 0 }}
                </td>
                <td class="text-red-600 border border-slate-300 p-2 ...">
                  {{ data.jobTime || 0 }}
                </td>
                <td class="text-green-600 border border-slate-300 p-2 ...">
                  {{ data.lastRunAt|| 0 }}
                </td>
                <td class="border border-slate-300 p-2 ...">
                  <div class="flex flex-column justify-center items-center">
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
  </div>
</template>

<script>
import datajobMixin from "../mixins/dataJobSearch";
import { mapActions, mapGetters } from "vuex";
import marketData from "../config/marketData";
import moment from "moment";
import DataJobDetail from "./DataJobDetail.vue";
import { serverApi } from "../api/jobapi";
import Spinner from "./spinner.vue";

const apiUrl = serverApi;

export default {
  components: {
    DataJobDetail,
    Spinner,
  },
  data() {
    return {
      isResponse: false,
      isModal: false,
      search: "",
      page: 1,
      perPage: 5,
      pages: [],
      singleDataJob: {},
      logResult: [],
      columns: [
        "Market Id",
        "Candle Update",
        "Failed Request",
        "Skipping Data",
        "Update Not Found",
        "JobTime",
        "LastRun",
        "Action",
      ],
    };
  },

  computed: {
    ...mapGetters(["datajoblog"]),

    displayedData() {
      return this.paginate(this.filteredData);
    },
  },

  methods: {
    ViewJobDetail(item, column) {
      this.isModal = true;
      this.singleDataJob = this.datajoblog.find((x) => x.id == item.id);

      if (this.singleDataJob) {
        switch (column) {
          case "candleUpdate":
            this.logResult = this.singleDataJob.logResults.candleUpdated;
            break;
          case "failedRequest":
            this.logResult = this.singleDataJob.logResults.failedRequest;
            break;
          case "skippingData":
            this.logResult = this.singleDataJob.logResults.skippingData;
            break;
          case "updateNotFound":
            this.logResult =
              this.singleDataJob.logResults.candleDataNotFoundFromApi;
            break;

          default:
            break;
        }
      }
    },

    closeModal() {
      this.isModal = false;
    },

    async handleDelete(item) {
      await fetch(`${apiUrl}/admin/deleteDataJob:id?id=${item.id}`, {
        method: "POST",
      }).then((response) => {
        if (!response.isError) {
          this.$store.commit("DELETE_DATA_JOB_LOG", item.id);
        }
      });
    },

    displayTime(time) {
      return moment.utc(time.jobTime).format("hh:mm");
    },

    displayMarketId(val) {
      let mark_id = marketData.find((v) => v.code === val);

      return mark_id.desc;
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

    ...mapActions(["setDataJob"]),
    async allDataJob() {
      await fetch(`${apiUrl}/admin/getDataJobLogs`, {
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
        .then((item) => {
          this.setDataJob(item.data.list);
          this.setPages();
          this.isResponse = true;
        });
    },
  },

  mounted() {
    this.allDataJob();
  },

  mixins: [datajobMixin],
};
</script>
