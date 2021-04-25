import React from "react";
import { useLocation } from "react-router";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function NotFind() {
  const { pathname } = useLocation();
  return (
    <div className="NotFind">
      {pathname === "/" ? (
        <Result
          status="404"
          title="No images here."
          subTitle="Would you try to search for anything else?"
        />
      ) : (
        <Result
          status="404"
          title="Here are images for now."
          subTitle="Would you try looking for something else?"
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      )}
    </div>
  );
}
