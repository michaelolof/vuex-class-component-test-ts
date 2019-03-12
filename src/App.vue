<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="">
      <h4>Data</h4>
      <!-- <Increaser /> -->
    </div>
    <div>
      Name
      <button>Add to Name</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // import Increaser from './components/Increaser.vue';
  import { vxm } from './store';

  @Component({
    components: {
      // Increaser,
    },
  })
  export default class App extends Vue {
    mounted() {
      this.$store.dispatch("myService/doSomething").then( val => console.log( val ) );

      // vxm.myService.doSomething()
      // .then( val => console.log( val ) )
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
