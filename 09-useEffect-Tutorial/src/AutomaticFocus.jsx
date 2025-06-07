import React from "react";
import { useEffect, useRef } from "react";

function AutomaticFocus() {
  const userNameRef = useRef("");
  useEffect(() => {
    console.log(userNameRef);

    userNameRef.current.focus();
  });
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          placeholder="username"
          ref={userNameRef}
        />
      </form>
    </div>
  );
}

export default AutomaticFocus;
