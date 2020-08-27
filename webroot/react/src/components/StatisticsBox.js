import React, { Fragment, useState, useEffect } from "react";

function computeStatistics(countries) {
  // Instantiate variables
  let countryCount = 0;
  let regionCount = {};
  let subregionCount = {};

  Object.values(countries).forEach((c) => {
    // countryCount
    countryCount += 1;

    // regionCount
    if (Object.keys(regionCount).includes(c.region)) {
      regionCount[c.region] = regionCount[c.region] + 1;
    } else {
      regionCount[c.region] = 1;
    }

    // subregionCount
    if (Object.keys(subregionCount).includes(c.subregion)) {
      subregionCount[c.subregion] = subregionCount[c.subregion] + 1;
    } else {
      subregionCount[c.subregion] = 1;
    }
  });

  // const countryCount = 5;
  // regionCount = { europe: 2 };
  // subregionCount = { greece: 5 };
  return { countryCount, regionCount, subregionCount };
}

function StatisticsBox({ countries }) {
  // const [loading, setLoading] = useState(true);

  console.log({ countries });

  const { countryCount, regionCount, subregionCount } = computeStatistics(
    countries
  );

  return (
    <Fragment>
      <h2>Statistics</h2>
      <div id="statistics-box">
        <div>Country count:</div>
        <div>{countryCount}</div>
        <div>Region count:</div>
        <div>
          {Object.entries(regionCount).map(([name, count], i) => {
            return (
              <span className="region" key={i}>
                {name}: {count}
              </span>
            );
          })}
        </div>
        <div>Subregion count:</div>
        <div>
          {Object.entries(subregionCount).map(([name, count], i) => {
            return (
              <span className="subregion" key={i}>
                {name}: {count}
              </span>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default StatisticsBox;
