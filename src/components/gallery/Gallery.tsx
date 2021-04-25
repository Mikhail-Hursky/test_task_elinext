import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Pagination, Spin } from "antd";
import Card from "../card/Card";
import Find from "../find_input/Find";
import StorePhotos from "../../store/StorePhotos";
import NotFind from "../not_find_images/NotFind";
import "./Gallery.scss";

const Gallery = observer(() => {
  useEffect(() => {
    return () => {
      StorePhotos.unMount();
    };
  }, []);

  const onChange = (e: number) => {
    StorePhotos.setPage(e);
  };

  return (
    <>
      <div className="Gallery_find">
        <Find />
        {StorePhotos.photo.length > 0 ? (
          <Pagination
            disabled={StorePhotos.isLoading}
            current={StorePhotos.page}
            pageSize={20}
            showSizeChanger={false}
            onChange={onChange}
            total={StorePhotos.total}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="Gallery">
        {!StorePhotos.isLoading ? (
          StorePhotos.photo.length > 0 ? (
            StorePhotos.photo.map((photo) => (
              <Card key={photo.id} photo={photo} />
            ))
          ) : (
            <>
              <NotFind />
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
