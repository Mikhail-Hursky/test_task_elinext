import { observer } from "mobx-react-lite";
import React from "react";
import { useLocation } from "react-router-dom";

const GalleryUser = observer(() => {
  const { pathname } = useLocation();
  return <div>{pathname === "/" ? <>INET</> : <>Local</>}</div>;
});

export default GalleryUser;
