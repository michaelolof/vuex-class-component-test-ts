import { VuexModule, Module, action, getRawActionContext } from "../../../src";

@Module({ namespacedPath: "animal/" })
export class Animal extends VuexModule {

  private name = "Dog";

  @action()
  async fetch() {
    console.log( this.name );
    return this.name;
  }

}