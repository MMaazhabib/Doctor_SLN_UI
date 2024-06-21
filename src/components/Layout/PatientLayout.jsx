import Navbar from "../PatientComponent/nav_bar";
import Sidebar from "../PatientComponent/side_bar";
import Home from "../Patient/index";
import { useState } from "react";
function PatientLayout() {
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
export default PatientLayout;