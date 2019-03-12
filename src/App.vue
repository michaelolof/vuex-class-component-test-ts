<template>
  <div id="app">
    <div></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { vxm } from "./store";

  @Component({
  })
  export default class App extends Vue {
    async mounted() {
      const dd = await vxm.animal.fetch();
      console.log( dd );
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
