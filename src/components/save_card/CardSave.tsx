import React from "react";
import { observer } from "mobx-react-lite";
import Meta from "antd/lib/card/Meta";
import { Button, Card as AntCard } from "antd";
import { Photo } from "../../interfaces/IPhoto";
import { getLinkImg } from "../../tools/subsidiaryFunc";
import photoUser from "../../store/StoreUserPhoto";
import { DeleteOutlined } from "@ant-design/icons";
import "../card/Card.scss";

interface Props {
  photo: Photo;
}

export const CardSave = observer(({ photo }: Props) => {
  const { isLoad } = photoUser;
  return (
    <>
      <AntCard
        className="Card"
        hoverable
        cover={<img alt={photo.title} src={getLinkImg(photo)} />}
        actions={[
          <Button
            loading={isLoad}
            onClick={() => photoUser.dletePhoto(photo.secret)}
            type="primary"
            shape="round"
            danger
            icon={<DeleteOutlined />}
            size="large"
          >
            Remove!
          </Button>,
        ]}
      >
        <Meta title={photo.title} />
      </AntCard>
      ,
    </>
  );
});
