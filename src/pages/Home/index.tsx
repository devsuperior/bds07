import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/cepsearch">
                <button className="btn btn-primary btn-lg start-button">Iniciar</button>
            </Link>
        </div>
    );
}

export default Home;
