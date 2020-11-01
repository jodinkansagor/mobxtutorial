import React from "react";
import { observer } from "mobx-react-lite";
import { StoresProvider } from "../stores/class/ClassStoresProvider";
import MushroomListClass from "../components/class/MushroomListClass";
import MushroomInputClass from "../components/class/MushroomInputClass";
import VeggieListClass from "../components/class/VeggieListClass";
import VeggieInputClass from "../components/class/VeggieInputClass";

const Class = observer(() => {
  return (
    <>
      <StoresProvider>
        <MushroomListClass />
        <MushroomInputClass />
        <h1>Maybe some vegetables too?</h1>
        <VeggieListClass />
        <VeggieInputClass />
      </StoresProvider>
    </>
  );
});

export default Class;
