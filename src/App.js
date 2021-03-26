import "./App.css"
import React from "react"
import Header from "./components/Header";
import Mainframe from "./components/Mainframe";
import Leftside from "./components/Leftside";


const App = () => {
  return (
      <div className="wrapper">
          <Header />
          <Mainframe />
          <Leftside />
      </div>
  )
}

export default App