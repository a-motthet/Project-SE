import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleRegister = () => {
    navigate("/register"); // Navigate to the login page
  };

  return (
    <div>
      <div className="flex justify-center mt-3">
        <button
          className="bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          className="mx-4 bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
