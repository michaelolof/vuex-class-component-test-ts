import Vue from "vue";
import { vxm } from "./store";

declare module "vue/types/vue" {
  interface Vue {
    $vxm: typeof vxm ,
  }
}

