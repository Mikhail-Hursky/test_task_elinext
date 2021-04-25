import React from "react";
import { debounce } from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { observer } from "mobx-react-lite";
import StorePhotos from "../../store/StorePhotos";

const Find = observer(() => {
  const onChange = debounce((tag: string) => {
    if (!tag.trim()) {
      StorePhotos.setPhoto([]);
      return;
    }
    StorePhotos.setTag(tag);
  }, 400);

  return (
    <div>
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search images"
        prefix={<SearchOutlined />}
      />
    </div>
  );
});

export default Find;
