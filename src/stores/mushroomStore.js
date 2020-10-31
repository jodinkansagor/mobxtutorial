import { nanoid } from "nanoid";

export const createMushroomStore = () => {
  return {
    mushrooms: [],
    addMushroom(mushroomName) {
      this.mushrooms.push({
        mushroomName,
        id: nanoid(),
      });
    },
    removeMushroom(id) {
      this.mushrooms = this.mushrooms.filter((mushroom) => mushroom.id !== id);
    },
  };
};
