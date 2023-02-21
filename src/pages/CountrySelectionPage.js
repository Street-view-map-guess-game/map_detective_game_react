import { Link, Outlet } from 'react-router-dom';
import Card from '../card/card';

function CountrySelectionPage() {
    return (
        <div>
            <div className="flex space-x-6">
                <Card
                    title="TURKEY"
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/01/K%C4%B1z_Kulesi_February_2013_01.jpg"
                    imageAlt="Maiden's Tower"
                    description="Turkey is great country bla bla..."
                    countryName="turkey"
                />
                <Card
                    title="FRANCE"
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/640px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
                    imageAlt="Eiffel Tower"
                    description="FRANCE is great country bla bla..."
                    countryName="france"
                />
            </div>
        </div>
    );
}

export default CountrySelectionPage;
