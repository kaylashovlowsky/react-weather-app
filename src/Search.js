import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="form-app">
      <form id="location-input">
        <div className="row">
          <div className="col-9">
            <div className="mb-3">
              <input
                type="text"
                id="city-input"
                className="form-control"
                placeholder="Enter city or zipcode"
              />
            </div>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Get forecast"
              className="btn btn-primary mb-5"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
