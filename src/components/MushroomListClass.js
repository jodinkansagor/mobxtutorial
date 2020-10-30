import { observer } from "mobx-react";
import React from "react";
import { useClassStore } from "../stores/ClassStoresProvider";

const MushroomListClass = () => {
  const { mushroomStore } = useClassStore();
  return (
    <ul>
      {mushroomStore.mushrooms.map((mushroom) => {
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
  );
};

export default observer(MushroomListClass);
