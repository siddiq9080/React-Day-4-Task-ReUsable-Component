import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Nav section */}

    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="ps-5 pe-5 m-3"
    >
      <div>
        <h3>Start Bootstrap </h3>
      </div>
      <div>
        {" "}
        <button className="btn btn-primary">Sign up</button>{" "}
      </div>
    </div>

    {/* App Component */}

    <App />

    {/* Footer section */}

    <footer className="m-4">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ul className="ms-5 list-item list-unstyled d-flex justify-content-around align-center">
            <li className="list-inline-item ">About</li>
            <li className="list-inline-item ">Contact</li>
            <li className="list-inline-item ">Terms of use</li>
            <li className="list-inline-item ">Privacy policy</li>
          </ul>
          <p className="ms-5">@ Your website 2024.All Rights reserved</p>
        </div>
        <div className="d-flex justify-content-evenly me-5">
          <i className="fa-brands fa-twitter fa-2x text-primary me-2"></i>
          <i className="fa-brands fa-instagram fa-2x text-danger me-2"></i>
          <i className="fa-brands fa-facebook fa-2x text-primary me-2"></i>
          <i className="fa-brands fa-youtube fa-2x text-danger me-2"></i>
        </div>
      </div>
    </footer>
  </React.StrictMode>
);
