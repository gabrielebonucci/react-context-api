import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DefaultLayout() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
