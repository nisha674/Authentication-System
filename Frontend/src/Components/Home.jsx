import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleError } from "../utils";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    handleError("Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      <ToastContainer />
    </div>
  );
}
export default Home;
