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
    <div class="w-full mt-4">
      <table
        class="w-[90%] mx-auto text-center border-collapse border border-slate-400 .."
      >
        <thead>
          <tr>
            <th
              v-for="(column, i) of columns"
              :key="i"
              class="border p-4 border-slate-300 ..."
            >
              {{ column.toUpperCase() }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(data, i) of displayedData"
            :key="i"
            class="hover:bg-gray-100 text-lg"
          >
            <td class="border border-slate-300 p-2 ...">{{ data.id }}</td>
            <td class="border border-slate-300 p-2 ...">{{ data.name }}</td>
            <td class="border border-slate-300 p-2 ...">{{ data.hobby }}</td>
            <td class="border border-slate-300 p-2 ...">{{ data.address }}</td>
            <td class="border border-slate-300 p-2 ...">{{ data.dep.area }}</td>
            <td
              class="border border-slate-300 p-2 ..."
              v-bind:class="
                data.dep.status == 'Active' ? 'text-green-600' : 'text-red-600'
              "
            >
              {{ data.dep.status }}
            </td>
            <td class="border border-slate-300 p-2 ...">
              <div class="flex flex-column justify-center items-center">
                <button
                  @click="handleClick(data)"
                  class="button border border-solid bg-green-200 hover:bg-green-400 px-4 py-2"
                >
                  View
                </button>
                <button
                  @click="handleDelete(data)"
                  class="button border border-solid bg-red-200 ml-2 hover:bg-red-400 px-4 py-2 my-2"
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
</template>

<script>
import SearchMixin from "../mixins/search";

export default {
  data() {
    return {
      search: "",
      page: 1,
      perPage: 5,
      pages: [],
      columns: [
        "id",
        "name",
        "hobby",
        "address",
        "department",
        "status",
        "actions",
      ],
    };
  },

  computed: {
    displayedData() {
      return this.paginate(this.filteredData);
    },
  },

  methods: {
    handleDelete(item) {
      this.$store.commit("DELETE_USER", item.id);
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
  },

//   watch: {
//     filteredData() {
//       this.setPages();
//     },
//   },

  mounted() {
    this.setPages();
  },

  mixins: [SearchMixin],
};
</script>
