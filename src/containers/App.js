import React, { useState } from "react";
import "../containers/App.css";
import Posts from "../components/Posts";
import Users from "../components/Users/Users";

function App() {
  return (
    <div className="App">
      <Posts />
      <Users/>
    </div>
  );
}

export default App;
