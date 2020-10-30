import { useObserver } from "mobx-react";
import React from "react";
import { useMushroomStore } from "../stores/MushroomContext";

const MushroomList = () => {
  const mushroomStore = useMushroomStore();

  return useObserver(() => (
    <ul>
      {mushroomStore.mushrooms.map((mushroom) => {
        console.log(mushroom);
        return (
          <li
            key={mushroom.id}
            onClick={() => mushroomStore.removeMushroom(mushroom.id)}
          >
            {mushroom.mushroomName}
          </li>
        );
      })}
    </ul>
  ));
};

export default MushroomList;
