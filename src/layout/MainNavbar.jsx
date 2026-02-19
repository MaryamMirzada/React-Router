import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
export default function MainNavbar() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Outlet />
    </div>
  );
}
