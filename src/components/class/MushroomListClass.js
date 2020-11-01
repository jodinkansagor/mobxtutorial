import { observer } from "mobx-react";
import React from "react";
import { useClassStore } from "../../stores/class/ClassStoresProvider";

const MushroomListClass = () => {
  const { mushroomStore } = useClassStore();
  return (
    <ul>
      {mushroomStore.mushrooms.map((mushroom) => {
        return (
          <li key={mushroom.id}>
            {mushroom.mushroomName}
            <button onClick={() => mushroomStore.removeMushroom(mushroom.id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(MushroomListClass);
