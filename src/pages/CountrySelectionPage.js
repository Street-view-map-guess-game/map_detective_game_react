import Card from "../card/card";

import maiden_tower from "../assets/images/countryImage/maiden's_tower(turkey).jpg";

function CountrySelectionPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-600 via-green-800 to-neutral-900 min-h-screen flex justify-center items-center">
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  */}
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
