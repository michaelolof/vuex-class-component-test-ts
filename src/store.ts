import Vue from 'vue'
import Vuex from 'vuex'
import { Animal } from './vuex/Animal.vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    animal: Animal.ExtractVuexModule( Animal ),
  },
})


export const vxm = {
  animal: Animal.CreateProxy( store, Animal ),
}

console.log( vxm.animal );
