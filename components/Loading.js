import React from "react";
import { Circle } from "better-react-spinkit";

function Loading(props) {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt="logo" height={200} style={{ marginBottom: 10 }} />
        <Circle color="#3CBC2B" size={60} />
      </div>
    </center>
  );
}

export default Loading;
