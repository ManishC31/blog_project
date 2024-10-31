import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { loginUserCall } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, setIsAuth } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSignIn = async (e) => {
    e.preventDefault();

    let isError = false;
    const tempErrors = {};

    if (!userData.email) {
      tempErrors.email = "Email is required";
      isError = true;
    }

    if (!userData.password) {
      tempErrors.password = "Password is required";
      isError = true;
    }

    setErrors(tempErrors);

    if (isError) return;

    const loginResponse = await loginUserCall(userData);

    if (loginResponse.success) {
      toast.success(loginResponse.message);

      login(loginResponse.data.user);
      setIsAuth(true);

      localStorage.setItem("user", JSON.stringify(loginResponse.data.user));
      localStorage.setItem("token", loginResponse.data.token);

      navigate("/dashboard");
    } else {
      toast.error(loginResponse.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="flex flex-col gap-4 w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSignIn}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login to Your Account</h2>
        
        <div>
          <Label htmlFor="email" value="Your email" className="mb-1" />
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            color={errors.email ? "failure" : "default"}
            helperText={errors.email && <span className="text-red-600">{errors.email}</span>}
          />
        </div>
        
        <div>
          <Label htmlFor="password" value="Your password" className="mb-1" />
          <TextInput
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            color={errors.password ? "failure" : "default"}
            helperText={errors.password && <span className="text-red-600">{errors.password}</span>}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        
        <Button type="submit" color="info" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
