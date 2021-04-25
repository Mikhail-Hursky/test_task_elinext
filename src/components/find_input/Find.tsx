import React from "react";
import { debounce } from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { observer } from "mobx-react-lite";
import StorePhotos from "../../store/StorePhotos";
import "./Find.scss";

export const Find = observer(() => {
  const onChange = debounce((tags: string) => {
    if (!tags.trim()) {
      StorePhotos.setPhoto([]);
      return;
    }
    StorePhotos.fetchPhotos(tags);
  }, 400);

  return (
    <div className="Find">
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search images"
        prefix={<SearchOutlined />}
      />
    </div>
  );
});
