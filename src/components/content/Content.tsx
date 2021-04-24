import React, { useEffect } from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import { Api } from "../../api/Api";
import { Find } from "../find_input/Find";

export default function Content() {
  return (
    <>
      <Layout.Content>
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route path="/gallery">Gallery</Route>
        </Switch>
      </Layout.Content>
    </>
  );
}

const Gallery = () => {
  useEffect(() => {
    Api.getPhotoById("cats");
  }, []);

  return (
    <>
      <Find />
    </>
  );
};
