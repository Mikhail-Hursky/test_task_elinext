import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Find } from "../find_input/Find";
import StorePhotos from "../../store/StorePhotos";
import Card from "../card/Card";
import "./Gallery.scss";
import Title from "antd/lib/typography/Title";
import { Spin } from "antd";
import StoreUserPhoto from "../../store/StoreUserPhoto";

const Gallery = observer(() => {
  useEffect(() => {
    return () => {
      StoreUserPhoto.saveLocalStorage();
    };
  }, []);
  return (
    <>
      <Find />
      <div className="Gallery">
        {!StorePhotos.isLoading ? (
          StorePhotos.photo.length > 0 ? (
            StorePhotos.photo.map((photo) => (
              <Card key={photo.id} photo={photo} />
            ))
          ) : (
            <>
              <Title level={2}>
                No images here. Would you try to search for anything else?
              </Title>
            </>
          )
        ) : (
          <Spin size="large" />
        )}
      </div>
    </>
  );
});

export default Gallery;
