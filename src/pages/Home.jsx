import { MyContext } from "../App";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeletePokemon, GetPokemonsList } from "../store/action";
import { Navbar, Loading, Title, Card, Error } from "../components";

const Home = () => {
  const url = useContext(MyContext);
  const navigate = useNavigate();
  const { search } = useLocation();
  const type = search.split("=")[1];
  const { pokemons, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemonsList(url, type));
  }, []);

  const detailButton = (id) => {
    navigate(`/${id}/pokemon`);
  };

  const deleteButton = (id) => {
    dispatch(DeletePokemon(url, id));
  };

  return (
    <>
      <Navbar />
      {error ? (
        <Error page="home" />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Title title={"Pokemon List"} />
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {pokemons.map((pokemon) => {
              return <Card page="home" key={pokemon.id} pokemon={pokemon} detailButton={detailButton} deleteButton={deleteButton} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
