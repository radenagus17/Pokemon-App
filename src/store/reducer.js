import { GET_POKEMONS, GET_POKEMONS_ID, SET_POKE_ERR, SET_POKE_LOADING } from "./actionTypes";

const initial_state = {
  pokemons: [],
  pokeLoading: false,
  pokeErr: null,
  pokemon: {},
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case GET_POKEMONS_ID:
      return { ...state, pokemon: action.payload };

    case SET_POKE_LOADING:
      return { ...state, pokeLoading: action.payload };

    case SET_POKE_ERR:
      return { ...state, pokeErr: action.payload };
    default:
      return state;
  }
}
