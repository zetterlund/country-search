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
    </div>
  );
}

export default ErrorBox;
