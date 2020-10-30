import { observer, useObserver } from "mobx-react";
import React, { useState } from "react";
import { useMushroomStore } from "../stores/MushroomContext";

const MushroomInput = () => {
  const [mushroom, setMushroom] = useState("");
  const mushroomStore = useMushroomStore();

  const handleClick = () => {
    mushroomStore.addMushroom(mushroom);
    setMushroom("");
    console.log(mushroomStore);
  };

  return useObserver(() => (
    <>
      <input
        value={mushroom}
        onChange={(event) => setMushroom(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add Mushroom</button>
    </>
  ));
};

export default MushroomInput;
