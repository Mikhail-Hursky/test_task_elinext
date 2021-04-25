import React, { useState } from "react";
import { SaveOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { Button, Card as AntCard } from "antd";
import { Photo } from "../../interfaces/IPhoto";
import { getLinkImg } from "../../tools/subsidiaryFunc";
import StoreUserPhoto from "../../store/StoreUserPhoto";
import "./Card.scss";

interface Props {
  photo: Photo;
}

export default function Card({ photo }: Props) {
  const [exists, setExists] = useState(
    Boolean(StoreUserPhoto.photos.find((el) => el.secret === photo.secret))
  );

  return (
    <>
      <AntCard
        className="Card"
        hoverable
        cover={<img alt={photo.title} src={getLinkImg(photo)} />}
        actions={[
          <>
            {exists ? (
              <>Saved</>
            ) : (
              <Button
                onClick={() => {
                  StoreUserPhoto.addPhoto(photo);
                  setExists(true);
                }}
                type="primary"
                shape="round"
                icon={<SaveOutlined />}
                size="large"
              >
                Bookmark it!
              </Button>
            )}
          </>,
        ]}
      >
        <Meta title={photo.title} />
      </AntCard>
      ,
    </>
  );
}
