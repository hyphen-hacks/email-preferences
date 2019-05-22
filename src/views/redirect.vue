<template>
  <main></main>
</template>

<script>
  export default {
    name: "redirect",
    mounted() {
      console.log('redirectin')
      window.location.href = "https://hyphen-hacks.com"

    }
  }
</script>

<style scoped>

</style>