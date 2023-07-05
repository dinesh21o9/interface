import React from "react";
import SearchBar from "./Search-bar";
import Header from "./Header";
import Card from "./Card";
import data from "../data"
import Example from "./example";

function App() {
  return (
    <div class ="main-container">
      <Header />

      <SearchBar />

      <div class="card-container">
        <ul>
          {data.map((prop) => (<Card  heading={prop.type} description={prop.content} date={prop.date} link={prop.link} />) )}
        </ul>
      </div>

      {/* <Example /> */}

    </div>
  );
}

export default App;
