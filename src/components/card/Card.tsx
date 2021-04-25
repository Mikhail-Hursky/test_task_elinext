import React from "react";
import { SaveOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { Button, Card as AntCard } from "antd";
import { Photo } from "../../interfaces/IPhoto";
import { getLinkImg } from "../../tools/subsidiaryFunc";
import "./Card.scss";
import StoreUserPhoto from "../../store/StoreUserPhoto";

interface Props {
  photo: Photo;
}

export default function Card({ photo }: Props) {
  return (
    <>
      <AntCard
        className="Card"
        hoverable
        cover={<img src={getLinkImg(photo)} />}
        actions={[
          <Button
            onClick={() => StoreUserPhoto.addPhoto(photo)}
            type="primary"
            shape="round"
            icon={<SaveOutlined />}
            size="large"
          >
            Bookmark it!
          </Button>,
        ]}
      >
        <Meta title={photo.title} />
      </AntCard>
      ,
    </>
  );
}
