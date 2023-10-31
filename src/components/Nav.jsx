import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="nav">
    
      <Link className="nav-link" to="/Home">Home</Link>
      <Link className="nav-link" to="/starships">Starships</Link>
      <Link className="nav-link" to="/planets">Planets</Link>
      <Link className="nav-link" to="/people">People</Link>
      <Link className="nav-link" to="/species">Species</Link>
      <Link className="nav-link" to="/vehicles">Vehicle</Link>
      <Link className="nav-link" to="/films">Films</Link>
   
    </div>
  );
}

export default Nav;