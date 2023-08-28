import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#F4F5F7'
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
