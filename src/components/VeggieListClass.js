import { observer } from "mobx-react";
import React from "react";
import { useClassStore } from "../stores/ClassStoresProvider";

const VeggieListClass = () => {
  const { veggieStore } = useClassStore();
  return (
    <ul>
      {veggieStore.veggies.map((veggie) => {
        return (
          <li
            key={veggie.id}
            onClick={() => veggieStore.removeVeggie(veggie.id)}
          >
            {veggie.veggieName}
          </li>
        );
      })}
    </ul>
  );
};

export default observer(VeggieListClass);
