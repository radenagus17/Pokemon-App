import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonById } from "../store/action";
import { useParams } from "react-router-dom";
import { MyContext } from "../App";
import { Card, Error, Loading, Navbar, Title } from "../components";

export default function DetailPage() {
  const { id } = useParams();
  const url = useContext(MyContext);
  const { pokemon, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemonById(url, id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      {error ? (
        <Error page={"detail"} />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Title title={"Detail Pokemon"} />
          <small className="text-muted">Detail of a Pokemon</small>
          <Card page="detail" detail={pokemon} />
        </div>
      )}
    </>
  );
}
