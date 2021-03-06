import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import { NavLink } from 'react-router-dom';
import './styles.css';

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">

            <NavLink to="/">
              <h1>DSMovie</h1>
            </NavLink>

            <a href="https://github.com/renans80" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p>/renans80</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;