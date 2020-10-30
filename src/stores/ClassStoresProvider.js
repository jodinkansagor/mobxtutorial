import React from "react";
import { MushroomStoreClass } from "./MushroomStoreClass";
import { VeggieStoreClass } from "./VeggieStoreClass";

const StoresContext = React.createContext(null);

export const StoresProvider = ({ children }) => {
  const mushroomStore = new MushroomStoreClass();
  const veggieStore = new VeggieStoreClass();
  return (
    <StoresContext.Provider value={{ mushroomStore, veggieStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useClassStore = () => React.useContext(StoresContext);
