<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">Admin Portal</span>
    </a>
    
    <nav class="md:ml-auto flex flex-wrap cursor-pointer items-center text-base justify-center">
      <a @click="goto(nav.path)" class="mr-5 hover:text-gray-900" v-for="(nav,i) of navBar" :key="i">{{nav.desc}}</a>
    </nav>
    
    <!-- <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> -->
  </div>
</header>

<!-- <router-view></router-view> -->

</div>
</template>


<script>
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
    components: {
    
    },
data(){
      return {
        navBar:[
          {path:'/',desc:'Create Job'},
          {path:'/viewjobs',desc:'All Jobs'},
        ]
      }
},
  methods:{
    goto(path){
     this.$router.push(path)
    }
  }
  
  };
  </script>
  
  <style>
  
  </style>
  