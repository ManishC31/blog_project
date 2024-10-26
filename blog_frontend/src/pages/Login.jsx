import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { loginUserCall } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSignIn = async (e) => {
    e.preventDefault();

    let isError = false;
    if (!email) {
      setErrors({ ...errors, email: "Email is required" });
      isError = true;
    }

    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
      isError = true;
    }

    if (isError) {
      return;
    }
    // send data to backend

    const loginResponse = await loginUserCall(userData);

    if (loginResponse.success) {
      toast.success(loginResponse.message);
      navigate("/dashboard");
    } else {
      toast.error(loginResponse.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex w-full md:w-1/2 lg:w-1/4 flex-col gap-4" onSubmit={handleSignIn}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
