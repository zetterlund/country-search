import React, { Fragment, useState } from "react";

function SearchResults({ countries }) {
  return (
    <Fragment>
      <h2>Search Results</h2>
      <div id="search-results">
        <div>
          <span className="heading">Name</span>
        </div>
        <div>
          <span className="heading">Alpha Code 2</span>
        </div>
        <div>
          <span className="heading">Alpha Code 3</span>
        </div>
        <div>
          <span className="heading">Region</span>
        </div>
        <div>
          <span className="heading">Subregion</span>
        </div>
        <div>
          <span className="heading">Population</span>
        </div>
        <div>
          <span className="heading">Languages</span>
        </div>
        <div>
          <span className="heading">Flag</span>
        </div>
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
                <img className="flag" src={c.flag} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

export default SearchResults;

// <TeamRows
//   teams={this.state.teams}
//   removeTeam={this.removeTeam}
//   handleChange={this.handleChange}
// />
