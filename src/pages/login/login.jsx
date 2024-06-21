import { useState } from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Login({ setLogin }) {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {

    const { data } = await axios.post("http://localhost:3000/user/logInUser", {
      userName,
      password,
    });
    if (data.error) {
      return alert("Logged In Error");
    }

    
    navigate("/Adminlayout")
    return alert("Login Successfully");
  }
  

  return (
    <>

<Header />
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">
            Login
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="userName"
              required
              onChange={(event) => {
                setuserName(event.target.value);
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
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              {"Don't Have and Account?"}
              {""}
              <span
                className="cursor-pointer"
                onClick={() => setLogin(false)}
              >
                Go to Signup
              </span>
            </p>
          </div>
            <input
              type="submit"
              id="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={login}
            />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Login;