import { Form, Input } from "antd";
import React, { useEffect } from "react";
import { debounce } from "lodash";

export const Find = () => {
  const [form] = Form.useForm();

  const onChange = debounce((tags: string) => {
    console.log(tags);
  }, 400);

  useEffect(() => {
    return () => onChange.cancel();
  }, []);

  return (
    <div>
      <Form form={form} name="horizontal_login">
        <Input
          onChange={(e) => onChange(e.target.value)}
          placeholder="input placeholder"
        />
      </Form>
    </div>
  );
};
