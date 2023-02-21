import { Link, Outlet } from 'react-router-dom';
import Card from '../card/card';

function CountrySelectionPage() {
    return (
        <div>
            <div className="flex justify-center">
                <Card
                    title="TURKEY"
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/01/K%C4%B1z_Kulesi_February_2013_01.jpg"
                    imageAlt="Maiden's Tower"
                    description="Turkey is great country bla bla..."
                />
            </div>
            
        </div>
    );
}

export default CountrySelectionPage;
