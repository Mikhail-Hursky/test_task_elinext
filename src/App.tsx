import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { debounce } from "lodash";
import { BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./App.scss";
import StoreAuth from "./store/StoreAuth";
import StoreUserPhoto from "./store/StoreUserPhoto";
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
  }, 1000 * 60);

  const listener = (e: StorageEvent) => {
    switch (e.key) {
      case "ADD":
        StoreUserPhoto.updateArray(localStorage.getItem("ADD"));
        break;
      case "GET":
        StoreUserPhoto.updateArray(localStorage.getItem("GET"));
        break;
      case "DELETE":
        StoreUserPhoto.updateArray(localStorage.getItem("DELETE"));
        break;
      case "LOG_OUT":
        StoreAuth.setAuthData();
        break;
      case "AUTH":
        const userJSON = localStorage.getItem("AUTH") || "";
        const user = JSON.parse(userJSON);
        StoreAuth.setAuthData(user.name, user.token, user.isAuth);
        break;
    }
    console.log(e.key);
  };

  const click = () => {
    localStorage.setItem("CLICK", Date.now() + "");
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseEvent);
    window.addEventListener("storage", mouseEvent);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("storage", mouseEvent);
      window.removeEventListener("mousemove", mouseEvent);
      window.removeEventListener("click", click);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
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
