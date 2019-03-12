import { Module, VuexModule, getter, mutation, action } from "../../../src";


class Service {
  something = "Something is off.";

  provideSomething() {
    return this.something;
  }
}

@Module({ namespacedPath: 'myService/' })
export class ConcreteService extends VuexModule {

  private service = "Jargons";
   
  @action()
  async doSomething() {
    console.log( this.service );
    return this.service;
  }

}

