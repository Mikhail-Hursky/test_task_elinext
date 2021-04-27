import React, { useState } from "react";
import { SaveOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { Button, Card as AntCard } from "antd";
import { Photo } from "../../interfaces/IPhoto";
import { getLinkImg } from "../../tools/subsidiaryFunc";
import StoreUserPhoto from "../../store/StoreUserPhoto";
import "./Card.scss";
import { observer } from "mobx-react-lite";

interface Props {
  photo: Photo;
  isAuth: boolean;
}

const Card = observer(({ photo, isAuth }: Props) => {
  const [exists, setExists] = useState(
    Boolean(StoreUserPhoto.photos.find((el) => el.secret === photo.secret))
  );
  const { isLoad } = StoreUserPhoto;
  console.log();

  return (
    <>
      <AntCard
        className="Card"
        hoverable
        cover={<img alt={photo.title} src={getLinkImg(photo)} />}
        actions={[
          <>
            {isAuth ? (
              exists ? (
                <>Saved</>
              ) : (
                <Button
                loading={isLoad}
                  onClick={() => {
                    StoreUserPhoto.addPhoto(photo).then(() => {
                      setExists(true);
                    });
                  }}
                  type="primary"
                  shape="round"
                  icon={<SaveOutlined />}
                  size="large"
                >
                  Bookmark it!
                </Button>
              )
            ) : (
              <></>
            )}
          </>,
        ]}
      >
        <Meta title={photo.title} />
      </AntCard>
      ,
    </>
  );
});

export default Card;
