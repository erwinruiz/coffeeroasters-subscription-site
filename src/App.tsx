import { Fragment } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Home />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
