import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { apiUser } from "../../utils/apiCalls";
import { useQuery } from "@tanstack/react-query";

const Layout = () => {
  const {
    isLoading,
    data,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: apiUser.getProfile,
  });

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
