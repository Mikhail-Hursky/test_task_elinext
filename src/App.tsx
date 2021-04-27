import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { debounce } from "lodash";
import { BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./App.scss";
import StoreAuth from "./store/StoreAuth";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import Mask from "./components/mask/Mask";

const App = observer(() => {
  const [isOff, setOff] = useState(false);

  const mouseEvent = debounce(() => {
    setOff(true);
    StoreAuth.logOut();
  }, 1000 * 60 * 600);

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
});

export default App;
