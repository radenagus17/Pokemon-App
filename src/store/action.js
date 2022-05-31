import { setPokeErr, setPokeLoading, setPokemonId, setPokemons } from "./actionDispatch";

export function GetPokemonsList(url, type) {
  return async (dispatch, getState) => {
    dispatch(setPokeLoading(true));
    try {
      const res = await fetch(url + "/pokemon");
      const pokemons = await res.json();

      const filteredPokemons = pokemons.filter((pokemon) => {
        if (type) return pokemon.type === type;
        return pokemon;
      });

      dispatch(setPokemons(filteredPokemons));
    } catch (error) {
      dispatch(setPokeErr(error.message));
    } finally {
      dispatch(setPokeLoading(false));
    }
  };
}

export function AddNewPokemon(url, newPokemon) {
  return async (dispatch, getState) => {
    try {
      const { pokemons } = getState();
      newPokemon.id = pokemons[pokemons.length - 1] + 1;
      newPokemon.weight = `${newPokemon.weight} lbs`;

      await fetch(url + "/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokemon),
      });

      dispatch(GetPokemonsList(url));
    } catch (error) {
      dispatch(setPokeErr(error.message));
    }
  };
}

export function DeletePokemon(url, id) {
  return async (dispatch) => {
    try {
      await fetch(url + "/pokemon/" + id, {
        method: "DELETE",
      });
      dispatch(GetPokemonsList(url));
    } catch (error) {
      dispatch(setPokeErr(error.message));
    }
  };
}

export function GetPokemonById(url, id) {
  return async (dispatch) => {
    dispatch(setPokeLoading(true));
    try {
      const res = await fetch(url + "/pokemon/" + id);
      const pokemon = await res.json();

      dispatch(setPokemonId(pokemon));
    } catch (error) {
      dispatch(setPokeErr(error.message));
    } finally {
      dispatch(setPokeLoading(false));
    }
  };
}
