import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import GalleryUser from "../gallery_user/GalleryUser";
import Gallery from "../gallery/Gallery";

export default function Content() {
  return (
    <>
      <Layout.Content>
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route path="/gallery">
            <GalleryUser />
          </Route>
        </Switch>
      </Layout.Content>
    </>
  );
}
