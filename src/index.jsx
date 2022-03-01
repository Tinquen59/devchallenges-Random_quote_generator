import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.css";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Home />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);
