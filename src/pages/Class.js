import React from "react";
import { observer } from "mobx-react-lite";
import { StoresProvider } from "../stores/ClassStoresProvider";
import MushroomListClass from "../components/MushroomListClass";
import MushroomInputClass from "../components/MushroomInputClass";
import VeggieListClass from "../components/VeggieListClass";
import VeggieInputClass from "../components/VeggieInputClass";

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
