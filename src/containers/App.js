import React from "react";
import "../containers/App.css";
import Posts from "../components/Posts";
import Users from "../components/Users/Users";

function App() {
  return (
    <div className="App">
      <h1 id="nav">Forum App</h1>
      <Posts />
      <Users />
    </div>
  );
}

export default App;
