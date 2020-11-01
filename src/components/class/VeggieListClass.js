import { observer } from "mobx-react";
import React from "react";
import { useClassStore } from "../../stores/class/ClassStoresProvider";

const VeggieListClass = () => {
  const { veggieStore } = useClassStore();
  return (
    <ul>
      {veggieStore.veggies.map((veggie) => {
        return (
          <li key={veggie.id}>
            {veggie.veggieName}
            <button
              onClick={() => veggieStore.removeVeggie(veggie.id)}
            >X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(VeggieListClass);
