import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      Welcome to AdminLayout component
      <Outlet />
    </div>
  );
};

export default AdminLayout;
