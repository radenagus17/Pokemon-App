// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home, AddPokemon, DetailPokemon, NotFound, EditPokemon } from "./pages";
import { createContext, useState } from "react";
// import FormEditPokemon from "./pages/UpdatePokemon";

export const MyContext = createContext();

function App() {
  const [url, setUrl] = useState("http://localhost:3500");
  return (
    <MyContext.Provider value={url}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddPokemon />} />
        {/* <Route path="/update" element={<EditPokemon />} /> */}
        <Route path="/:id/pokemon" element={<DetailPokemon />} />
        <Route path="/filter" element={<Home />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
