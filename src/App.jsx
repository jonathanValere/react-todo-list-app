import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRectangleList,
  faCircleHalfStroke,
  faPlus,
  faTrashCan,
  faPen,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faRectangleList,
  faCircleHalfStroke,
  faPlus,
  faTrashCan,
  faPen,
  faMagnifyingGlass
);
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  // State du dark mode -----------
  const [mode, setMode] = useState(false);
  // Render --------------
  return (
    <div className={mode ? "dark" : ""}>
      <Header onClick={() => setMode(!mode)} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
