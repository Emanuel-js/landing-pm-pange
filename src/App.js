import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {


  return (
    <Router>
      <Switch>
     
        <Route path="/">
          <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

