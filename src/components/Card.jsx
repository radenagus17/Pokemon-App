const CardPokemon = ({ page, pokemon, detail, detailButton, deleteButton }) => {
  return (
    <>
      {page === "home" ? (
        <div className="col">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
              <h6 className="card-title">{pokemon.type}</h6>
              <p className="card-text">{pokemon.description}</p>
              <button className="btn btn-primary" onClick={() => detailButton(pokemon.id)}>
                Detail
              </button>
              <button className="btn btn-danger" onClick={() => deleteButton(pokemon.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card mb-2" style={{ maxWidth: "1000px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={detail.image} className="img-fluid rounded-start" alt={detail.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">Pokemon Name</small>
                </p>
                <h5 className="card-title">{detail.name}</h5>
                <p className="card-text">
                  <small className="text-muted">Pokemon Weight</small>
                </p>
                <h5 className="card-title">{detail.weight}</h5>
                <p className="card-text">
                  <small className="text-muted">Pokemon Type</small>
                </p>
                <h5 className="card-title">{detail.type}</h5>
                <p className="card-text">
                  <small className="text-muted">Pokemon Description</small>
                </p>
                <p className="card-text">{detail.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPokemon;
