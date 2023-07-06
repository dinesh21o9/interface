import React from "react";
import SearchBar from "./Search-bar";
import Header from "./Header";
import Cards_paginated from "./Cards_paginated";

function App() {
  return (
    <div class ="main-container">
      <Header />

      <SearchBar />

      {/* <ul>
        {data.map((prop) => <Card  heading = {prop.heading} description = {prop.description} link = {prop.link} date = {prop.date} /> )}
      </ul> */}

      <Cards_paginated />

    </div>
  );
}

export default App;
