import React from "react";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import Avatar from "antd/lib/avatar/avatar";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <Layout.Header className="Header">
      <Link to="/">
        <Title>Image finder</Title>
      </Link>

      <Avatar size="large" icon={<UserOutlined />} />
    </Layout.Header>
  );
}
