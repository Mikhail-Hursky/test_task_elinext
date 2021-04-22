import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
