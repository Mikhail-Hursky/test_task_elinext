import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { debounce } from "lodash";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import Mask from "./components/mask/Mask";

function App() {
  const [isOff, setOff] = useState(false);

  const mouseEvent = debounce(() => setOff(true), 1000 * 60);

  useEffect(() => {
    window.addEventListener("mousemove", mouseEvent);
    return () => {
      window.removeEventListener("mousemove", mouseEvent);
    };
  }, []);

  return (
    <>
      {isOff ? (
        <Mask setOff={setOff} />
      ) : (
        <Router>
          <Layout className="App">
            <Header />
            <Layout hasSider={true}>
              <Navigation />
              <Content />
            </Layout>
            <Footer />
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;
