import Navbar from "../DoctorComponent/nav_bar";
import Sidebar from "../DoctorComponent/side_bar";
import Home from "../Doctor/index";
import { useState } from "react";
function DoctorLayout() {
  const [option, setOption] = useState("analytics");
  const changeoption = (newoption) => {
    setOption(newoption);
  };
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <div className="h-screen w-screen flex">
          <Sidebar changeoption={changeoption}/>
          <Home option={option}/>
        </div>
      </div>
    </>
  );
}
export default DoctorLayout;