<template>
  <div class="increaser">
    Increase : <button @click="increase">Click Me +</button>
    Decrease : <button @click="delayedDecrease">Click Me +</button>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  
  @Component
  export default class Increaser extends Vue {
    data = DataVuex.CreateProxy( this.$store, DataVuex );
    
    increase() {
      this.data.increase();
    }

    delayedDecrease() {
      this.data.anotherAction();
    }

    mounted() {
    }
  }
</script>


<style>
  
</style>