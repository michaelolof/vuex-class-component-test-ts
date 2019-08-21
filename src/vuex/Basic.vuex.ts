import { VuexModule, getter, Module, mutation, action } from "../../../src";
import { till } from '@/libs/utils';

@Module()
export class BasicModel extends VuexModule {

  private firstname = "Basic";
  @getter lastname = "Model";
  
  get fullname() {
    return this.firstname + " " + this.lastname;
  }

  @mutation clearFirstName() {
    this.firstname = "";
  }

  @mutation setFirstName( firstname :string ) {
    this.firstname = firstname;
  }

  @action async clearName() {
    await till( 2000 );
    this.clearFirstName();
    this.lastname = "";
  }

  @action async fetchDetails() {
    await till( 2000 );
    return this.fullname
  }

  @action async clearAndFetch() {
    await this.clearName();
    return this.fetchDetails();
  }

}