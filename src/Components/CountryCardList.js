import React from "react";
import CountryCard from "./CountryCard";
export default function CountryCardList({ cont }) {
  return (
    <>
      <div className="tc">
        <div className="tc">
          {cont.map((item, index) => {
            return (
              <CountryCard
                key={item.name.common}
                flagUrl={item.flags.png}
                countryName={index + 1 + ")" + item.name.official}
                countryCapital={item.capital}
                countryPopulation={item.population}
                gMapLocation={item.maps.googleMaps}
                countryArea={item.area}
                Continent={item.continents}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
