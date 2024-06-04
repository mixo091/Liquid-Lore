import CocktailList from "./components/CocktailList";
import { Navbar } from "./components/Navbar";

import { useEffect, useState } from "react";



function App() {


  return (
    <div style={{'display':'flex' , 'flexDirection':'column' , 'justifyContent':"center" , 'alignItems':'center'}} className="App">
      <Navbar />
      <CocktailList />
    </div>
  );
}

export default App;
