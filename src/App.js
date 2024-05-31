import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Weather App | Developed by{" "}
        <a href="https://github.com/rachitvohra23">Rachit Vohra</a> | Powered by
        React.
      </div>
    </React.Fragment>
  );
}

export default App;
