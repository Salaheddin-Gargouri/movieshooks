import React, { useState } from "react";

const Example = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        ></input>
        <input
          type="text"
          value={name.lastnametname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        ></input>
      </form>
      <h1>
        {" "}
        my first name is : {name.firstname},my last name is:{name.lastname}
      </h1>
    </div>
  );
};

export default Example;
