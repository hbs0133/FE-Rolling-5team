import "../src/styles/reset.css";
import "../src/styles/global.css";
import "../src/styles/common.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import { ThemeProvider } from "./components/UI/Theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
