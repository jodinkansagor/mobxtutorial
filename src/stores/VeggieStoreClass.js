import { observable, action, makeObservable } from "mobx";
import { nanoid } from "nanoid";
import { createContext } from "react";

export class VeggieStoreClass {
  veggies = [];

  constructor(veggies) {
    makeObservable(this, {
      veggies: observable,
      addVeggie: action,
      removeVeggie: action,
    });
    this.veggies = veggies;
  }

  addVeggie(veggie) {
    this.veggies.push({
      veggie,
      id: nanoid(),
    });
  }

  removeVeggie(id) {
    this.veggies = this.veggies.filter((veggie) => veggie.id !== id);
  }
}

export const VeggieClassStoreContext = createContext(new VeggieStoreClass());
