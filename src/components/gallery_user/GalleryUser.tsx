import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from "antd";
import { CardSave } from "../save_card/CardSave";
import NotFind from "../not_find_images/NotFind";
import photoUser from "../../store/StoreUserPhoto";
import "./GalleryUser.scss";

const GalleryUser = observer(() => {
  const [current, setCurrent] = useState(1);
  const [pageSize] = useState(20);

  return (
    <>
      {photoUser.photos.length > 0 ? (
        <>
          <div className="Gallery_find">
            <Pagination
              current={current}
              defaultPageSize={pageSize}
              onChange={setCurrent}
              total={photoUser.photos.length}
            />
          </div>

          <div className="GalleryUser">
            {photoUser.photos
              .slice(pageSize * (current - 1), pageSize * current)
              .map((el) => (
                <CardSave key={el.id} photo={el} />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="GalleryUser">
            <NotFind />
          </div>
        </>
      )}
    </>
  );
});

export default GalleryUser;
