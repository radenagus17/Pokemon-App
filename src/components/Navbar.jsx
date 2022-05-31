export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Pokedex
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto mb-2 mb-lg-0">
          <a className="nav-link active" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="/add">
            Add
          </a>
          <a className="nav-link" href="/filter?type=fire">
            Fire
          </a>
          <a className="nav-link" href="/filter?type=water">
            Water
          </a>
          <a className="nav-link" href="/filter?type=grass">
            Grass
          </a>
        </div>
      </div>
    </nav>
  );
}
