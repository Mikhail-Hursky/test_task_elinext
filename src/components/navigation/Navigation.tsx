import React from "react";
import { BookOutlined, CloudOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import StoreAuth from "../../store/StoreAuth";
import "./Navigation.scss";

const Navigation = observer(() => {
  const location = useLocation();
  const { isAuth } = StoreAuth;

  return (
    <>
      <Sider className="Navigation" collapsed={true}>
        <Menu className="Menu" theme="light" selectedKeys={[location.pathname]}>
          <Menu.Item key="/" icon={<CloudOutlined />}>
            <NavLink to="/" />
          </Menu.Item>
          {isAuth ? (
            <Menu.Item key="/gallery" icon={<BookOutlined />}>
              <NavLink to="/gallery" />
            </Menu.Item>
          ) : (
            <></>
          )}
        </Menu>
      </Sider>
    </>
  );
});

export default Navigation;
