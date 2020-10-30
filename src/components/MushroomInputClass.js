import { observer } from "mobx-react";
import React, { useState } from "react";
import { useClassStore } from "../stores/ClassStoresProvider";

const MushroomInputClass = () => {
  const [mushroom, setMushroom] = useState("");
  const { mushroomStore } = useClassStore();

  const handleClick = () => {
    mushroomStore.addMushroom(mushroom);
    setMushroom("");
  };

  return (
    <>
      <input
        value={mushroom}
        onChange={(event) => setMushroom(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add Mushroom</button>
    </>
  );
};

export default observer(MushroomInputClass);
