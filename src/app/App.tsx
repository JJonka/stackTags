import { useState } from "react";
import Header from "../components/header/Header";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header
        fontColor="white"
        bgrColor="dodgerblue"
        iconSrc="/assets/logo.svg"
      >
        STACKOVERFLOW'S TAGS LIST
      </Header>
    </>
  );
}

export default App;
