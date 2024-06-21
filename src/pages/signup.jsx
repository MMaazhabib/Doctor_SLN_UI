import axios from "axios";
import { useState, useEffect } from "react";

import Select from "react-select";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Signup({ setLogin }) {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setroleId] = useState("");
  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    const { data } = await axios.get("http://localhost:3000/user/getRole");
    if (data.error) {
      return alert("No Roles Exists");
    }

    let roleDropDown = [];
    data.response.map((role) => {
      const roleValues = {
        label: role.roleName,
        value: role.roleId,
      };
      roleDropDown.push(roleValues);
    });
    setRoles(roleDropDown);
    console.log(setRoles);
  };

  const signup = async () => {
    console.log("check signup");
    const { data } = await axios.post(
      "http://localhost:3000/user/signup",
      {
        userName,
        password,
        email,
        roleId,
      },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert("Unable to Create User");
    }
    alert("User Created Successfully");
    return setLogin(true);
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
    <Header />
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">
            Signup
          </h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="username"
                required
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              {/* <input
                type="text"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              /> */}
              <Select
                className="rounded-md focus:outline-none text-black"
                isSearchable={true}
                options={roles}
                onChange={(e) => {
                  console.log(e.value);
                  setroleId(e.value);
                }}
                placeholder="Select Role"
              />
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                {"Already Have and Account?"}
                {""}
                <span className="cursor-pointer" onClick={() => setLogin(true)}>
                  Go to Login
                </span>
              </p>
            </div>

            <button
              // disabled={!(userName, password, address, roleId)}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                signup();
              }}>
              Signup
            </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
