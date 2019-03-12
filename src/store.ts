import Vue from 'vue'
import Vuex from 'vuex'
import { ConcreteService } from './vuex/ConcreteService.vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    myService: ConcreteService.ExtractVuexModule( ConcreteService ),
  },
})

console.log( ConcreteService.ExtractVuexModule( ConcreteService ) );

export const vxm = {
  myService: ConcreteService.CreateProxy( store, ConcreteService ),
}


