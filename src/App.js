import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandscapeGallery from "./pages/Landscape";
import StreetGallery from "./pages/Street";
import ProductGallery from "./pages/Product";
import AboutPage from "./pages/About";

const Landscape = () => {
  return (
    <>
      <LandscapeGallery />
    </>
  );
};

const Street = () => {
  return (
    <>
      <StreetGallery />
    </>
  );
};

const Product = () => {
  return (
    <>
      <ProductGallery />
    </>
  );
};

const About = () => {
  return (
    <>
      <AboutPage />
    </>
  );
}
 
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/landscape"]}>
          <Landscape />
        </Route>   

        <Route path="/street">
          <Street />
        </Route>

        <Route path="/product">
          <Product />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
