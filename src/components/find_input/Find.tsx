import React, { useEffect } from "react";
import { debounce } from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { observer } from "mobx-react-lite";
import StorePhotos from "../../store/StorePhotos";

export const Find = observer(() => {
  const onChange = debounce((tags: string) => {
    if (!tags.trim()) return;
    StorePhotos.fetchPhotos(tags);
  }, 400);

  useEffect(() => {
    return () => onChange.cancel();
  }, []);

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
