<template>
  <div id="app">
    <div id="nav">
      <img src="@/assets/logo.svg" alt="">
      <a href="https://hyphen-hacks.com">Hyphen-Hacks</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import 'minireset.css'
  import '@/assets/global.scss'
  export default  {
    name: 'app'
  }
</script>