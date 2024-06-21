import Signup from "./signup";
import Login from "./login/login";
import { useState } from "react";
// import DoctorLayout from "./Layout/DoctorLayout";
// import AdminLayout from "../components/Layout/AdminLayout";
// import PatientLayout from "./Layout/PatientLayout";

function Index() {
    const [isLogin, setIsLogin] = useState(true);

    const updateState = (newState) => {
        setIsLogin(newState);
    }
    return (
        <>
        
        <div className="w-screen h-screen bg-gray-300">
            {isLogin && <Login setLogin={updateState} />}
            {!isLogin && <Signup setLogin={updateState} />}
            {/* <AdminLayout/> */}
            {/* <PatientLayout/> */}
            {/* <DoctorLayout/> */}
        </div>
        </>
    );
}
export default Index;