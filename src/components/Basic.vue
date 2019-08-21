<template>
  <div>

    <h1>Basic Functionality</h1>
    
    <input type="text" class="section" v-model="basic.lastname" />
    
    <div class="section">
      Fullname: {{ fullname }}
      <span class="pre">Display an explicit getter.</span>
    </div>

    <div class="section">
      Lastname: {{ lastname }}
      <span class="pre">Expose a 'lastname' state as a getter.</span>
    </div>

    <div class="section">
      <input type="text" v-model="firstnameField" />
      <button @click="setFirstName" class="block">Set First Name</button>
      <button @click="clearFirstName" class="block">Clear First Name</button>
      <span class="pre">Test 'setFirstName' and 'clearFirstName' mutations</span>
    </div>

    <div class="section">
      <button @click="waitTwoSecondsAndClearName">Wait Two Seconds and Clear Name</button>
      <span class="pre section">trigger an action that calls a mutation and mutates a state</span>
      
      <div>Fetched Fullname: {{ fetchedFullname }}</div>
      <button @click="fetchDetails">Fetch Details</button>
      <span class="pre section">trigger an action that returns a getter after 2 secs.</span>

      <button @click="clearAndFetch">Clear and Fetch</button>
      <span class="pre">call 'clearName' action and 'fetchDetails' action</span>
    </div>


  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { vxm } from "../store";

  @Component export default class App extends Vue {
    basic = vxm.basic;
    firstnameField = "";
    fetchedFullname = "N/A";

    get lastname() {
      return vxm.basic.lastname;
    }

    get fullname() {
      return vxm.basic.fullname;
    }

    clearFirstName() {
      vxm.basic.clearFirstName();
    }

    setFirstName() {
      vxm.basic.setFirstName( this.firstnameField )
    }

    waitTwoSecondsAndClearName() {
      vxm.basic.clearName();
    }

    fetchDetails() {
      const self = this;
      vxm.basic.fetchDetails().then( fullname => {
        self.fetchedFullname = fullname;
      });
    }

    async clearAndFetch() {
      const fullname = await vxm.basic.clearAndFetch();
      this.fetchedFullname = fullname
    }

  }
</script>