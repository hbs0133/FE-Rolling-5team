import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

// Kakao SDK 초기화
if (window.Kakao) {
  window.Kakao.init("21bb0d29fbe9ee9c924bccabee6f527e");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
