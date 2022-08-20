import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
       return (  
              <nav className="Navbar">
                     <h1>real.est</h1>
                     <div className="links">
                            <Link to="/">Home</Link>
                            <Link to="/Projects">Projects</Link>
                            <Link to="/About">About</Link>
                     </div>
              </nav>
       );
}
 
export default Navbar;