import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import StoreAuth from "../../store/StoreAuth";

interface Props {
  setIsModalVisible(boolean: boolean): void;
}

const LoginForm = observer(({ setIsModalVisible }: Props) => {
  const [form] = Form.useForm();
  const { isLoad } = StoreAuth;

  const onFinish = ({ email, password }: any) => {
    StoreAuth.authorization(email, password);
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <Form.Item
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
            prefix={<UserOutlined className="site-form-item-icon" />}
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
              Sign in
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
});

export default LoginForm;
