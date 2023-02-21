import { Link, Outlet } from 'react-router-dom';

function CountrySelectionPage() {
    return (
        <div>
            <h1>Hoş Geldiniz</h1>
            <Link to="/gamescreen">Oyuna Başla</Link>
            <Outlet />
        </div>
    );
}

export default CountrySelectionPage;
