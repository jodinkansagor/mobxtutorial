import { observer } from "mobx-react";
import React, { useState } from "react";
import { useClassStore } from "../stores/ClassStoresProvider";

const VeggieInputClass = () => {
  const [veggie, setVeggie] = useState("");
  const { veggieStore } = useClassStore();

  const handleClick = () => {
    veggieStore.addVeggie(veggie);
    setVeggie("");
  };

  return (
    <>
      <input
        value={veggie}
        onChange={(event) => setVeggie(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add Veggie</button>
    </>
  );
};

export default observer(VeggieInputClass);
