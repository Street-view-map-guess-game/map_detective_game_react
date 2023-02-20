import { Link } from 'react-router-dom';

function CountrySelectionPage() {
    return (
        <div>
            <h1>Hoş Geldiniz</h1>
            <Link to="/game">Oyuna Başla</Link>
        </div>
    );
}

export default CountrySelectionPage;
