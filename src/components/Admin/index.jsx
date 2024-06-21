import Admin from "./Admin";
import Doctors from "./doctor";
import Profile from "./profile";


function Home({option}) {
  
  return (
    <>
      <div className="w-4/5 h-full bg-gray-200 flex">
        {option == "Admin" && <Admin/>}
        {option == "Doctor" && <Doctors/>}
        {option == "Profile" && <Profile/>}
      </div>
    </>
  );
}
export default Home;