import Vue from 'vue'
import Vuex from 'vuex'
import { BasicModel } from './vuex/Basic.vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    basic: BasicModel.ExtractVuexModule( BasicModel ),
  },
})

export const vxm = {
  basic: BasicModel.CreateProxy( store, BasicModel ),
}


