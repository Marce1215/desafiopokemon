import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/"> <i className="fas fa-home me-2"></i>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/pokemon">Pokemon</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav