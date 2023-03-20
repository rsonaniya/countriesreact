import React from "react";

export default function Card(props) {
  return (
    <>
      <div
        className="bg-light-green dib br3 pa3 ma1 bw2 shadow-5"
        style={{ height: "32rem", width: "23rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={props.flagUrl}
            style={{ height: "200px", width: "16.5rem" }}
            alt={props.countryName}
          />
          <div>
            <h2>{props.countryName.toUpperCase()}</h2>
            <p>
              Population: {props.countryPopulation} | Area: {props.countryArea}
              km²
            </p>
            <p>Capital: {props.countryCapital}</p>
            <p>Continent:{props.Continent}</p>

            <a target="_blank" rel="noreferrer" href={props.gMapLocation}>
              <button
                style={{
                  backgroundColor: "black",
                  padding: "7px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                Location on Map
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
