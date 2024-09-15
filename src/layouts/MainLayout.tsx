import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Containter from "../components/ui/container/Containter";

const MainLayout = () => {
  return (
    <div>
      <Containter>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Containter>
    </div>
  );
};

export default MainLayout;
