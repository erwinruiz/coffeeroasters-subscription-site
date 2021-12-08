import { Fragment } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Subscribe from "./Pages/Subscribe";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
