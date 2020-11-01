import { useObserver } from "mobx-react";
import React from "react";
import { useMushroomStore } from "../../stores/function/FunctionStoresProvider";

const MushroomList = () => {
  const mushroomStore = useMushroomStore();

  return useObserver(() => (
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
  ));
};

export default MushroomList;
