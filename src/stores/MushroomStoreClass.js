import { makeObservable, observable, action, decorate } from "mobx";
import { nanoid } from "nanoid";
import { createContext } from "react";

export class MushroomStoreClass {
  mushrooms = [];

  constructor(mushrooms) {
    makeObservable(this, {
        mushrooms: observable,
        addMushroom: action,
        removeMushroom: action
    })
}

  addMushroom(mushroomName) {
    this.mushrooms.push({
      mushroomName,
      id: nanoid(),
    });
  }

  removeMushroom(id) {
    this.mushrooms = this.mushrooms.filter((mushroom) => mushroom.id !== id);
  }
}


export const MushroomClassStoreContext = createContext(new MushroomStoreClass());
