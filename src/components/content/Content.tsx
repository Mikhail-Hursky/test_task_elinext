import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

export default function Content() {
  return (
    <>
      <Layout.Content>
        <Switch>
          <Route exact path="/">
            CLOUD
          </Route>
          <Route path="/gallery">Gallery</Route>
        </Switch>
      </Layout.Content>
    </>
  );
}
