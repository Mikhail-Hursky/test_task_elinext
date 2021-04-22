import React from "react";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import Avatar from "antd/lib/avatar/avatar";
import "./Header.scss";

export default function Header() {
  return (
    <Layout.Header className="Header">
      <Title>Image finder</Title>
      <Avatar size="large" icon={<UserOutlined />} />
    </Layout.Header>
  );
}
