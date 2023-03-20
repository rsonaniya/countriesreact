import React, { useEffect, useState } from "react";
import CountryCardList from "./Components/CountryCardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";
import LoadingSpinner from "./Components/LoadingSpinner";
import globe from "./Components/globe.gif";
export default function App() {
  const [cont, setCont] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCont(data);
        setLoading(false);
      });
  }, []);
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const filteredCountries = cont.filter((country) => {
    return country.name.official
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <>
      <div className="tc">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }} className="f2">
            Countries of the{" "}
          </h1>
          <img
            style={{ height: "35px", marginTop: "29px" }}
            src={globe}
            alt="globe.gif"
          />
        </div>

        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <CountryCardList cont={filteredCountries} />
          )}
        </Scroll>
      </div>

      <p className="tc color-white" style={{ color: "white" }}>
        Made With ❤️ by Rajat Sonaniya
      </p>
    </>
  );
}
