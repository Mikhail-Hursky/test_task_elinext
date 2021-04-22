import React from "react";
import { BookOutlined, CloudOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import "./Navigation.scss";

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      <Sider className="Navigation" collapsed={true}>
        <Menu className="Menu" theme="light" selectedKeys={[location.pathname]}>
          <Menu.Item key="/" icon={<CloudOutlined />}>
            <NavLink to="/" />
          </Menu.Item>
          <Menu.Item key="/gallery" icon={<BookOutlined />}>
            <NavLink to="/gallery" />
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
