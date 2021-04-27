import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import StoreAuth from "../../store/StoreAuth";
import GalleryUser from "../gallery_user/GalleryUser";
import Gallery from "../gallery/Gallery";

const Content = observer(() => {
  const { isAuth } = StoreAuth;
  return (
    <>
      <Layout.Content>
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          {isAuth ? (
            <Route path="/gallery">
              <GalleryUser />
            </Route>
          ) : (
            <></>
          )}
        </Switch>
      </Layout.Content>
    </>
  );
});

export default Content;
