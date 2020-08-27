import React, { Fragment } from "react";

function SearchResults({ countries }) {
  return (
    <Fragment>
      <h2>Search Results</h2>
      <div id="search-results">
        <div className="heading">Name</div>
        <div className="heading">Alpha Code 2</div>
        <div className="heading">Alpha Code 3</div>
        <div className="heading">Region</div>
        <div className="heading">Subregion</div>
        <div className="heading">Population</div>
        <div className="heading">Languages</div>
        <div className="heading">Flag</div>
        {countries.map((c, i) => {
          return (
            <Fragment key={i}>
              <div>{c.name}</div>
              <div>{c.alpha2Code}</div>
              <div>{c.alpha3Code}</div>
              <div>{c.region}</div>
              <div>{c.subregion}</div>
              <div>{c.population.toLocaleString()}</div>
              <div>
                {c.languages
                  .map((l) => l.name)
                  .reduce((a, c) => {
                    return `${a}, ${c}`;
                  })}
              </div>
              <div>
                <img className="flag" alt="flag" src={c.flag} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

export default SearchResults;
