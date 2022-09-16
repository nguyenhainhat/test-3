import "./App.scss";
import Header from "./components/header/Header";
import Router from "./config/Router";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Home from "./pages/Home/Home";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
