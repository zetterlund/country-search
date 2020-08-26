import React, { useState } from "react";

function SearchResults() {
  //Write your javascript here, or roll your own. It's up to you.
  //Make your ajax call to http://localhost:8765/api/index.php here
  const [data, setData] = useState("");

  const handleGetData = async () => {
    const response = await fetch(`${HOST}/api/index.php`, {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ country: "estonia" }),
    });
    console.log({ response });
    const d = await response.text();
    console.log({ d });
    setData("testing");
  };

  return (
    <div className="App">
      <p>Country Search within React</p>
      <button onClick={handleGetData}>Get data</button>
      <p>data: {data}</p>
    </div>
  );
}

export default SearchResults;
