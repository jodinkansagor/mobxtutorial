import { createContext } from "react";
import { createMushroomStore } from "./MushroomStoreFunction";

describe("createMushroomStore", () => {


  it("returns an object that is the mushroom store", () => {
    const mushroomStore = createMushroomStore();
    expect(mushroomStore).toEqual({
      mushrooms: [],
      addMushroom: mushroomStore.addMushroom,
      removeMushroom: mushroomStore.removeMushroom
    });
  });
});
