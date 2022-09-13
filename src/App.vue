<template>
  <div>
    <Navbar />
    <div class="mt-6">

    <!-- <Table /> -->
    <div class="mt-16">

        <router-view></router-view>
<!--      <JobForm />-->

<!--      <Table2 />-->

      <!-- <Pagination /> -->

    </div>

  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import JobForm from './components/JobForm'

export default {
  name: "App",
  components: {
    Navbar,
    // JobForm
},

};
</script>

<style>

</style>
