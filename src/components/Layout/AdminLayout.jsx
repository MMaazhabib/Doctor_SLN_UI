
import Sidebar from "../AdminComponent/side_bar";
import Home from "../Admin/index";
import { useState } from "react";
import Headerinside from "../Header/Headerinside";
function AdminLayout() {
  const [option, setOption] = useState("analytics");
  const changeoption = (newoption) => {
    setOption(newoption);
  };
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Headerinside/>
        <div className="h-screen w-screen flex bg-gray-200">
          <Sidebar changeoption={changeoption}/>
          <Home option={option}/>
        </div>
      </div>
    </>
  );
}
export default AdminLayout;