<template>
  <div>
    <Navbar />
    <div class="mt-6">

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
