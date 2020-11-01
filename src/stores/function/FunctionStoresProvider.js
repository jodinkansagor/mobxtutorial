import React, { createContext, useContext } from "react";
import { createMushroomStore } from "./MushroomStoreFunction";
import { useLocalObservable } from "mobx-react";

const MushroomContext = createContext(null);

export const MushroomProvider = ({ children }) => {
  const mushroomStore = useLocalObservable(() => createMushroomStore());

  return (
    <MushroomContext.Provider value={mushroomStore}>
      {children}
    </MushroomContext.Provider>
  );
};

export const useMushroomStore = () => useContext(MushroomContext);
