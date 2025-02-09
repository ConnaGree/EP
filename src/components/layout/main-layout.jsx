import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Nav from "./nav/nav";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
