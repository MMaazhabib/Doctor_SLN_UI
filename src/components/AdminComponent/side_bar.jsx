function Sidebar({ changeoption }) {
    return (
      <>
        <div className=" w-64  h-full bg-white rounded-lg p-4 m-3">
          <p
            className="p-4 hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 text-black text-lg"
            onClick={() => {
              changeoption("Admin")
            }}
          >
            Home
          </p>
          <p
            className="p-4 hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 text-black text-lg"
            onClick={() => {
              changeoption("Doctor")
            }}
          >
            Doctor
          </p>
          <p
            className="p-4 hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 text-black text-lg"
            onClick={() => {
              changeoption("Profile")
            }}
          >
            Profile
          </p>
          <p
            className="p-4 hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 text-black text-lg"
            
          >
            <a href="#" onClick={() => {
                window.location.href = '/';
            }}>Logout</a>
          </p>
        </div>
      </>
    );
  }
  
  export default Sidebar;