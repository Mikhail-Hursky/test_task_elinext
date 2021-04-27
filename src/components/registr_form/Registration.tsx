import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import StoreAuth from "../../store/StoreAuth";

const Registration = observer(() => {
  const [form] = Form.useForm();
  const { isLoad } = StoreAuth;

  const onFinish = async function ({ name, email, password }: any) {
    StoreAuth.registration(name, email, password);
    form.resetFields();
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        shouldUpdate={true}
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please enter your email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="E-mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
            min: 6,
            max: 15,
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            loading={isLoad}
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Registration
          </Button>
        )}
      </Form.Item>
    </Form>
  );
});

export default Registration;
