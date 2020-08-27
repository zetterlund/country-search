import React, { Fragment, useState } from "react";

function SearchResults({ countries }) {
  return (
    <Fragment>
      <h2>Search Results</h2>
      <div id="search-results">
        <div>Name</div>
        <div>Alpha Code 2</div>
        <div>Alpha Code 3</div>
        <div>Region</div>
        <div>Subregion</div>
        <div>Population</div>
        <div>Languages</div>
        <div>Flag</div>
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
