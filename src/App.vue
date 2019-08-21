<template>
  <div id="app">
    <component :is="view">
      <basic />
    </component>

    <div class="section button-blk">
      <button @click="showView( 'basic' )">Test Basic</button>
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Basic from "./components/Basic.vue"

  @Component({
    components: {
      Basic,
    }
  }) 
  export default class App extends Vue {
    
    view = "basic";

    showView( view ) {
      this.view = view;
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  line-height: 1.3em;
  margin-top: 60px;
  margin-left: 20%;
}
.pre {
  font-size: 0.75em;
  display: block
}
.block {
  display: block;
}
.section {
  margin-bottom: 10px;
}
.button-blk {
  margin-top: 50px;
}
.button-blk button {
  display: inline-block;
  margin-right: 10px;
}
.l-e {
  display: flex;
  justify-content: space-between;
}
</style>
