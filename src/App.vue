<template>
  <div>
    <Navbar />

    <!-- <Table /> -->
    <div class="mt-16">


      <JobForm />

<!--      <Table2 />-->

      <!-- <Pagination /> -->

    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Table from './components/Table.vue'
import Table2 from './components/table2.vue'
import JobForm from './components/JobForm.vue';

export default {
  name: "App",
  components: {
    Navbar,
    // Table,
    // Table2,
    JobForm
},

};
</script>

<style>

</style>
