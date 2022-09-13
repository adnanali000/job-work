<template>
   <div v-if="show" class="w-[70%] ml-[6.5rem]">
        <p v-if="show" class="mb-2 mt-[-5px] flex justify-center items-center text-pink-600 text-sm">
            {{errormessage}}
        </p>
      </div>
</template>

<script>
export default {
    props:['errormessage','show']
}
</script>

<style>

</style>

