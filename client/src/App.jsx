import { useState } from "react";
import "./index.css";
import Header from "../src/components/header/Header";
import Main from "./components/mainpages/main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Main/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
