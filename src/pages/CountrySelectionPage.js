import Card from "../card/card";

import maiden_tower from "../assets/images/countryImage/maiden's_tower(turkey).jpg";
import Header from "../components/Header";

function CountrySelectionPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-600 via-green-800 to-neutral-900 min-h-screen flex  justify-center items-center">
      <Header></Header>
      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-8 sm:pt-8 sm:pb-8 mt-12 ">
        <Card
          title="TURKEY"
          imageUrl={maiden_tower}
          imageAlt="Maiden's Tower"
          description="Continue with TURKEY"
          countryName="turkey"
        />
        <Card
          title="FRANCE"
          imageUrl="https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_2x1.jpg"
          imageAlt="Eiffel Tower"
          description="Continue with FRANCE"
          countryName="france"
        />
      </div>
    </div>
  );
}

export default CountrySelectionPage;
