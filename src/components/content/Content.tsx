import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import { Find } from "../find_input/Find";
import Gallery from "../gallery/Gallery";

export default function Content() {
  return (
    <>
      <Layout.Content>
        <Switch>
          <Route exact path="/">
            <Callery />
          </Route>
          <Route path="/gallery"><Gallery /></Route>
        </Switch>
      </Layout.Content>
    </>
  );
}

const Callery = () => {
  return (
    <>
      <Find />
      <Gallery />
    </>
  );
};
