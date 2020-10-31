import React from "react";
import Class from "./pages/Class";
import Function from "./pages/Function";
import styles from './App'

function App() {
  return (
    <>
      <h1 className={styles.title}>Mushrooms!!</h1>
      <Function />
      <h1>Let's have another list</h1>
      <Class />
    </>
  );
}

export default App;
