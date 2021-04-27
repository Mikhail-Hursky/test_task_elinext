import React, { useEffect, useState } from "react";
import { Button, Layout, Popconfirm } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import AuthModal from "../modal/AuthModal";
import { observer } from "mobx-react-lite";
import StoreAuth from "../../store/StoreAuth";
import StoreUserPhoto from "../../store/StoreUserPhoto";

const Header = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isAuth, name, token } = StoreAuth;
  const history = useHistory();

  useEffect(() => {
    StoreUserPhoto.setToken(token);
  }, [isAuth]);

  return (
    <Layout.Header className="Header">
      <Link to="/">
        <Title>Image finder</Title>
      </Link>

      {isAuth ? (
        <>
          <Popconfirm
            placement="bottomRight"
            title={`${name} Do you really want to leave?`}
            onConfirm={() => {
              StoreAuth.logOut();
              history.push("/");
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              onClick={() => setIsModalVisible(true)}
              shape="round"
            >
              LogOut <LogoutOutlined />
            </Button>
          </Popconfirm>
        </>
      ) : (
        <>
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            shape="round"
          >
            Sign in <LoginOutlined />
          </Button>
          <AuthModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </>
      )}
    </Layout.Header>
  );
});

export default Header;
