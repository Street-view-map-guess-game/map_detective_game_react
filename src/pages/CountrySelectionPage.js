import Card from "../card/card";
import Header from "../components/Header";

import maiden_tower from "../assets/images/countryImage/maiden's_tower(turkey).jpg";
import la_sagrada_familia from "../assets/images/countryImage/La_Sagrada_Familia(spain).jpg";
import eiffel_tower from "../assets/images/countryImage/eiffel_tower(france).jpeg";
import pisa_tower from "../assets/images/countryImage/pisa_tower(italy).jpg";
import palacio_de_la_pena from "../assets/images/countryImage/palacio_de_la_pena(portugal).jpg";
import buckingham_palace from "../assets/images/countryImage/buckingham-palace(england).jpg";
import kiyomizu_dera_buddhist_temple from "../assets/images/countryImage/kiyomizu_dera_buddhist_temple(japan).jpeg";
import earth from "../assets/images/countryImage/earth.jpg";

function CountrySelectionPage() {
  return (
    <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex  justify-center items-center">
      <Header></Header>
      <div className="flex space-y-6 flex-col sm:space-x-0 sm:space-y-8 sm:pt-8 sm:pb-8 mt-32 mb-24 ">
        <div className="flex space-x-6 flex-row sm:flex-col sm:space-x-0 sm:space-y-8 ">
          <Card
            title="TURKEY"
            imageUrl={maiden_tower}
            imageAlt="Maiden's Tower"
            description="Continue with TURKEY"
            countryName="turkey"
          />
          <Card
            title="FRANCE"
            imageUrl={eiffel_tower}
            imageAlt="Eiffel Tower"
            description="Continue with FRANCE"
            countryName="france"
          />
          <Card
            title="SPAIN"
            imageUrl={la_sagrada_familia}
            imageAlt="La Sagrada Familia"
            description="Continue with SPAIN"
            countryName="spain"
          />
        </div>
        <div className="flex  space-x-6 flex-row sm:flex-col sm:space-x-0 sm:space-y-8">
          <Card
            title="ITALY"
            imageUrl={pisa_tower}
            imageAlt="Pisa Tower"
            description="Continue with ITALY"
            countryName="italy"
          />
          <Card
            title="PORTUGAL"
            imageUrl={palacio_de_la_pena}
            imageAlt="Palacio de la Pena"
            description="Continue with PORTUGAL"
            countryName="portugal"
          />
          <Card
            title="UNITED KINGDOM"
            imageUrl={buckingham_palace}
            imageAlt="Buckingham Palace"
            description="Continue with UNITED KINGDOM"
            countryName="uk"
          />
        </div>
        <div className="flex  space-x-6 flex-row sm:flex-col sm:space-x-0 sm:space-y-8">
          <Card
            title="JAPAN"
            imageUrl={kiyomizu_dera_buddhist_temple}
            imageAlt="Kiyomizu Dera Buddhist Temple"
            description="Continue with JAPAN"
            countryName="japan"
          />
           <Card
            title="NETHERLANDS"
            imageUrl={null}
            imageAlt="NULL"
            description="Continue with NETHERLANDS"
            countryName="netherlands"
          />
          <Card
            title="WOLRD"
            imageUrl={earth}
            imageAlt="Earth"
            description="Continue with WOLRD"
            countryName="world"
          />
        </div>
      </div>
    </div>
  );
}

export default CountrySelectionPage;