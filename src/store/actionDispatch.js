import { GET_POKEMONS, GET_POKEMONS_ID, SET_POKE_ERR, SET_POKE_LOADING } from "./actionTypes";

export function setPokemons(data) {
  return {
    type: GET_POKEMONS,
    payload: data,
  };
}

export function setPokemonId(data) {
  return {
    type: GET_POKEMONS_ID,
    payload: data,
  };
}

export function setPokeLoading(data) {
  return {
    type: SET_POKE_LOADING,
    payload: data,
  };
}
export function setPokeErr(data) {
  return {
    type: SET_POKE_ERR,
    payload: data,
  };
}
