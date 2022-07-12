// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import { Home, AddPokemon, DetailPokemon } from "./pages";
import { createContext, useState } from "react";

export const MyContext = createContext();

function App() {
  const [url] = useState("http://localhost:3500");
  return (
    <MyContext.Provider value={url}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddPokemon />} />
        <Route path="/:id/pokemon" element={<DetailPokemon />} />
        <Route path="/filter" element={<Home />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
