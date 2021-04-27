import React, { useState } from "react";
import { Button, Modal } from "antd";
import { observer } from "mobx-react-lite";
import LoginForm from "../login_form/LoginForm";
import Registration from "../registr_form/Registration";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible(isModalVisible: boolean): void;
}

const AuthModal = observer(({ isModalVisible, setIsModalVisible }: Props) => {
  const [isLogin, setLogin] = useState(true);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setLogin(true);
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title={isLogin ? "Sign in" : "Create an account"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="auth" type="primary" onClick={() => setLogin(!isLogin)}>
            {isLogin ? "Register now" : "Already have an account"}
          </Button>,
          <Button key="closeg" type="primary" danger onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        {isLogin ? (
          <LoginForm setIsModalVisible={setIsModalVisible} />
        ) : (
          <Registration />
        )}
      </Modal>
    </>
  );
});

export default AuthModal;
