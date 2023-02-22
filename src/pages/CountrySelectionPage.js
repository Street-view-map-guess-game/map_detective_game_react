import { Link, Outlet } from 'react-router-dom';
import Card from '../card/card';

import maiden_tower from "../assets/images/maiden's_tower(turkey).jpg";

function CountrySelectionPage() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="flex space-x-6">
                    <Card
                        title="TURKEY"
                        imageUrl={maiden_tower}
                        imageAlt="Maiden's Tower"
                        description="Turkey is great country bla bla..."
                        countryName="turkey"
                    />
                    <Card
                        title="FRANCE"
                        imageUrl="https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_2x1.jpg"
                        imageAlt="Eiffel Tower"
                        description="FRANCE is great country bla bla..."
                        countryName="france"
                    />
                </div>
            </div>
        </div>

    );
}

export default CountrySelectionPage;
