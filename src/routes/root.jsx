import { Outlet, useOutlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Home from "./home";

export default function Root() {
  const outlet = useOutlet();
  return (
    <>
      <Navbar />
      <div id="detail">
        <div>{outlet || <Home />}</div>
      </div>
    </>
  );
}
