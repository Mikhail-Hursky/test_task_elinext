import { Button, Result } from "antd";
import React from "react";

interface Props {
  setOff(isOff: boolean): void;
}

export default function Mask({ setOff }: Props) {
  return (
    <>
      <Result
        title="You have not been active for a long time, so we ended your session."
        extra={
          <Button
            onClick={() => {
              setOff(false);
            }}
            type="primary"
          >
            Go back!
          </Button>
        }
      />
    </>
  );
}
