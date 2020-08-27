import React, { Fragment, useState } from "react";

function ErrorBox({ error }) {
  return (
    <div className="error-box">
      {error === "errorEmptySearch" && (
        <div>
          <p>It looks like you've left the search box empty.</p>
          <p>Be sure to type something in and then click 'search'!</p>
        </div>
      )}
      {error === "errorNoResults" && (
        <div>
          <p>
            Unfortunately, while your search was successfully completed, it
            didn't return any results.
          </p>
          <p>Try fixing the spelling or typing something else.</p>
          <p>
            If you're still having trouble, try going for a walk outside. I know
            it often helps me.
          </p>
        </div>
      )}
    </div>
  );
}

export default ErrorBox;
