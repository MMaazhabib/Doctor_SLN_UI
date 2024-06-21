import Doctor from "./Doctor";
import Patient from "./Patient";
import Profile from "./profile";
import ApplyDoctor from "./ApplyDoctor";
import Appoinment from "./Appoinment";


function Home({option}) {
  
  return (
    <>
      <div className="w-4/5 h-full bg-gray-200 flex">
        {option == "Doctor" && <Doctor/>}
        {option == "Patient" && <Patient/>}
        {option == "Appoinment" && <Appoinment/>}
        {option == "Profile" && <Profile/>}
        {option == "Apply Doctor" && <ApplyDoctor />}
      </div>
    </>
  );
}
export default Home;