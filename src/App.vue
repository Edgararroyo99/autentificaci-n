<template>
  <div id="app">
    <div id="nav">
     <navegation>

     </navegation>
    </div>
    <router-view/>
  </div>
</template>

<script>
import  navegation from '@/components/Hola/navegation.vue'
export default {
  components: {
    navegation
  }
}
</script>

<style lang="scss">
  //@import'';
  @import 'src/scss/app.scss';

</style>


