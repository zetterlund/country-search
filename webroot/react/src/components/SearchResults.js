import React, { Fragment, useState } from "react";

function SearchResults({ countries }) {
  return (
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
            <div>{c.population}</div>
            <div>
              {c.languages.map((l, x) => {
                return <span>{l.name}</span>;
              })}
            </div>
            <div>
              <img className="flag" src={c.flag} />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default SearchResults;

// <TeamRows
//   teams={this.state.teams}
//   removeTeam={this.removeTeam}
//   handleChange={this.handleChange}
// />
