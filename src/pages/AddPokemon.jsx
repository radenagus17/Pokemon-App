import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import { Error, Form, Navbar, Title } from "../components";
import { AddNewPokemon } from "../store/action";

export default function AddPokemon() {
  const url = useContext(MyContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    name: "",
    description: "",
    weight: "",
    image: "",
    type: "",
  });
  const [errMessage, setErrMessage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const newPokemon = { ...pokemon, [name]: value };
    setPokemon(newPokemon);
  };

  const validate = (input) => {
    if (!input.name) return true;
    if (!input.description) return true;
    if (!input.weight) return true;
    if (!input.weight) return true;
    if (!input.type) return true;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validation = validate(pokemon);
    if (validation) {
      setErrMessage("Please Fill All The Field");
    } else {
      console.log("test");
      dispatch(AddNewPokemon(url, pokemon));
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Title title={"Add New Pokemon"} />
        <Error page="form" message={errMessage} />
        <Form handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
      </div>
    </>
  );
}
