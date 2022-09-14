<template>
  <div>
    <Navbar />
    <div class="mt-4">
        <router-view></router-view>
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
