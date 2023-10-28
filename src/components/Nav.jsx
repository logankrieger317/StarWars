import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="nav">
    
      <Link className="nav-link" to="/Home">Home</Link>
      <Link className="nav-link" to="/StarshipsList">Starships</Link>
      <Link className="nav-link" to="/PlanetsList">Planets</Link>
      <Link className="nav-link" to="/PeopleList">People</Link>
      <Link className="nav-link" to="/SpeciesList">Species</Link>
      <Link className="nav-link" to="/VehiclesList">Vehicle</Link>
      <Link className="nav-link" to="/FilmsList">Films</Link>
    </div>
  );
}

export default Nav;