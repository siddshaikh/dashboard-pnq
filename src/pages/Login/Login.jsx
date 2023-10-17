import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const demoCred = () => {
    setEmail("demo@gmail.com");
    setPassword("123456");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="border-gray-100 w-64 bg-gray-200 rounded-md px-4 py-4">
        <h2>Welcome Back!</h2>
        <p>Sign in to continue to Skote.</p>
        <form className="" onSubmit={handleSubmit}>
          <p className="text-left">Email</p>
          <br />
          <input
            type="email"
            placeholder="Email"
            className=" border border-gray-700 outline-none rounded-md"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <p className="text-left">Password</p>
          <br />
          <input
            type="password"
            placeholder="password"
            required
            className="border border-gray-700 outline-none rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <span className="flex items-center justify-center px-2">
            <input type="checkbox" />
            <label className="ml-2">Remember me</label>
          </span>
          <br />
          <span className="cursor-pointer underline" onClick={demoCred}>
            Demo Credentials
          </span>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md w-full cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
