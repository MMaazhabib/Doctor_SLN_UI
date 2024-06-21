function Sidebar({ changeoption }) {
    return (
      <>
        <div className=" w-1/5 h-full bg-black ">
          <p
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
            onClick={() => {
              changeoption("Doctor")
            }}
          >
            Home
          </p>
          <p
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
            onClick={() => {
              changeoption("Patient")
            }}
          >
            Patient
          </p>
          <p
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
            onClick={() => {
              changeoption("Profile")
            }}
          >
            Profile
          </p>
          <p
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
            onClick={() => {
              changeoption("Appoinment")
            }}
          >
            Appoinment
          </p>
          <p
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white text-xl"
            onClick={() => {
              changeoption("Apply Doctor")
            }}
          >
            Apply Doctor
          </p>
        </div>
      </>
    );
  }
  
  export default Sidebar;