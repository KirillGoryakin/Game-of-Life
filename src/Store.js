import { makeAutoObservable } from "mobx";
import { step } from "./canvasScipt";

class Store {
  steps = 0

  constructor(){
    makeAutoObservable(this);
  }

  addSteps(count = 1) {
    this.steps += count;
  }
};

export default new Store();