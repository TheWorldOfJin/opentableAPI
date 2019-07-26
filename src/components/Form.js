import React, { useState } from "react";
import { connect } from "react-redux";

import { setCity } from "../action/search";

const Form = ({ setCity }) => {
  const [city, cityInput] = useState("");

  return (
    <div className="form">
      <h1 className="form-header">API Test</h1>
      <input
        className="cityInput"
        type="text"
        value={city}
        onChange={e => cityInput(e.target.value)}
      />
      <button className="btn btn-info" onClick={() => setCity(city)}>
        Submit
      </button>
    </div>
  );
};

export default connect(
  null,
  { setCity }
)(Form);
