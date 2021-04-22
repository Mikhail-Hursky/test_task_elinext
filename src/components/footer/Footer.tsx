import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Link from "antd/lib/typography/Link";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <Layout.Footer className="Footer">
        <Link href="https://github.com/Mikhail-Hursky" target="_blank">
          <GithubOutlined /> Mikhail_Hursky
        </Link>
      </Layout.Footer>
    </>
  );
}
