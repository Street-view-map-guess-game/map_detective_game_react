import Card from "../card/card";
import Header from "../components/Header";


import maiden_tower from "../assets/images/countryImage/maiden's_tower(turkey).jpg";
import la_sagrada_familia from "../assets/images/countryImage/La_Sagrada_Familia(spain).jpg"
import eiffel_tower from "../assets/images/countryImage/eiffel_tower(france).jpeg"
import pisa_tower from "../assets/images/countryImage/pisa_tower(italy).jpg"
import palacio_de_la_pena from "../assets/images/countryImage/palacio_de_la_pena(portugal).jpg"
import buckingham_palace from "../assets/images/countryImage/buckingham-palace(england).jpg"


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
    </div>
  );
}

export default CountrySelectionPage;
