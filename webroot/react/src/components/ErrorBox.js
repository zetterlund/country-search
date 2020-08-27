import React, { Fragment, useState } from "react";

function ErrorBox({ error }) {
  return (
    <div className="error-box">
      {error === "errorEmptySearch" && (
        <div>
          <p>It looks like you've left the search box empty!</p>
        </div>
      )}
      {error === "errorNoResults" && (
        <div>
          <p>
            Unfortunately, while your search was successfully completed, it
            didn't return any results. Try fixing the spelling or typing
            something else.
          </p>
          <p>
            If you're still having trouble, perhaps go for a walk outside. I
            know it often helps me.
          </p>
        </div>
      )}
      {error === "errorServerError" && (
        <div>
          <p>
            Hmm... the external API returned a 400 error. Most likely no results
            were found; try modifying your search terms and try again.
          </p>
        </div>
      )}
      {error === "errorUnknownError" && (
        <div>
          <p>
            Oh boy. We've received some unknown error. Go find the person who
            wrote this program and tell them!
          </p>
        </div>
      )}
    </div>
  );
}

export default ErrorBox;
