<template>
  <!-- <div class="VueTables__wrapper" v-if="data.tableData.length">
    <v-client-table
      :data="data.tableData"
      :columns="data.columns"
      :options="data.options"
    >
    <div slot="response" slot-scope="{ row }">

        <h2>{{data.tableData.response.isError}}</h2>
        
      </div>

      <div slot="actions" slot-scope="{ row }">
        <button
          class="border p-1 my-1 bg-green-500 text-gray-100"
          @click="handleDelete(row.id)"
        >
          View
        </button>
      </div>
    </v-client-table>
  </div> -->

  <div>
    <ve-table :columns="data.columns" :table-data="data.tableData" :border-x="true" :border-y="false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: [
          {
            field: "name.owner",
            key: "a",
            title: "Name",
            align: "center",
          },
          {
            field: "date",
            key: "b",
            title: "Date",
            align: "left",
          },
          {
            field: "hobby",
            key: "c",
            title: "Hobby",
            align: "right",
          },
          { field: "address", key: "d", title: "Address" },
        ],
        tableData: [
          {
            name: {
              owner: 'john',
              worker: 'haris'
            },
            date: "1900-05-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shanghai",
          },
          {
            name: {
              owner: 'john',
              worker: 'haris'
            },
            date: "1910-06-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Beijing",
          },
          {
            name: {
              owner: 'john',
              worker: 'haris'
            },
            date: "2000-07-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Chongqing",
          },
          {
            name: {
              owner: 'john',
              worker: 'haris'
            },
            date: "2010-08-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Xiamen",
          },
          {
            name: {
              owner: 'john',
              worker: 'haris'
            },
            date: "2020-09-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shenzhen",
          },
        ],

        // columns: ["id", "dura", "age", "actions"],
        // columns: ["id","duration","marketId","response","actions"],
        // row: '',
        // tableData: [

        // ],
        // options: {
        //   // see the options API
        //   pagination: {
        //     virtual: false,
        //     filterByColumn: false,
        //     perPage: 10,
        //     texts: {
        //       filter: "Filter:",
        //       filterBy: "Filtrar por {column}",
        //       count: " ",
        //     },
        //   },
        // },

        // columns: [
        //   { field: "id", key: "a", title: "Id", align: "center" },
        //   { field: "duration", key: "b", title: "Duration", align: "left" },
        //   { field: "marketId", key: "c", title: "marketId", align: "right" },
        //   { field: "response.isError", key: "d", title: "isError", align: "right" },
        // ],

        // tableData: [

        // ],
      },
    };
  },

  methods: {
    handleDelete: function (id) {
      alert("hello" + " " + id);
    },
  },

  // mounted() {
  //   fetch("http://192.168.0.117:3000/admin/logs")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.data.tableData = data;
  //       console.log(this.data.tableData);
  //     });

  //   }
};
</script>

<style>
.VueTables__wrapper {
  height: auto;
  text-align: center;
  overflow: hidden;
}

.VueTables__search-field {
  text-align: left;
  border: 1px solid red;
  width: 250px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 25px;
}
.VueTables__limit-field {
  border: 1px solid red;
  padding: 10px;
  text-align: right;
  margin: 0 10px 30px 10px;
}
.VuePagination__pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.VuePagination__pagination li {
  font-size: 20px;
  margin: 5px;
  border: 1px solid red;
  padding: 5px;
}

/* 
.ve-table{
  border: 1px solid gray;
    padding: 20px;
    font-size: 20px;
} */
</style>
