import { Outlet, useOutlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Home from "./home";
import Footer from "../components/Footer/Footer";

export default function Root() {
  const outlet = useOutlet();
  return (
    <>
      <Navbar />
      <div>{outlet || <Home />}</div>
      <Footer />
    </>
  );
}
