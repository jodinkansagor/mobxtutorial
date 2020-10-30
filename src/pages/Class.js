import React from "react";
import { observer } from "mobx-react-lite";
import { StoresProvider } from "../stores/ClassStoresProvider";
import MushroomListClass from "../components/MushroomListClass";
import MushroomInputClass from "../components/MushroomInputClass";

const Class = observer(() => {
  return (
    <>
      <StoresProvider>
        <h1>Mushrooms Again!</h1>
        <MushroomListClass />
        <MushroomInputClass />
      </StoresProvider>
    </>
  );
});

export default Class;
