
import Patient from "./Patient";
import Profile from "./profile";
import Appoinment from "./Appoinment";


function Home({option}) {
  
  return (
    <>
      <div className="w-4/5 h-full bg-gray-200 flex">
        {option == "Appoinment" && <Appoinment/>}
        {option == "Patient" && <Patient/>}
        {option == "Profile" && <Profile/>}
      </div>
    </>
  );
}
export default Home;