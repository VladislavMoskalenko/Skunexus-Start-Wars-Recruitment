import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Films from "../pages/Films/Films";
import NotFoundPage from "../pages/NotFoundPage";
import People from "../pages/People/People";
import {
  List as PlanetsList,
  Details as PlanetDetails,
} from "../pages/Planets";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/planets" />} />
        <Route exact path="/planets" component={PlanetsList} />
        <Route exact path="/planets/:planetId" component={PlanetDetails} />
        <Route path="/planets/:planetId/films" component={Films} />
        <Route path="/planets/:planetId/residents" component={People} />
        <Route exact path="/films" component={Films} />
        <Route path="/films/:filmId/planets" component={PlanetsList} />
        <Route path="/films/:filmId/characters" component={People} />
        <Route exact path="/people" component={People} />
        <Route path="/people/:personId/films" component={Films} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
