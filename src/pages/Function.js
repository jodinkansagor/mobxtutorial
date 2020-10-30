import React from "react";
import MushroomList from "../components/MushroomList";
import MushroomInput from "../components/MushroomInput";
import { MushroomProvider } from "../stores/MushroomContext";

const Function = () => {
  return (
    <>
      <MushroomProvider>
        <MushroomList />
        <MushroomInput />
      </MushroomProvider>
    </>
  );
};

export default Function;
