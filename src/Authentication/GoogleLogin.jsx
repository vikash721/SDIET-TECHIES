import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = ({ onLogin }) => {
  const handleLoginSuccess = (response) => {
    // Here, handle the Google login success, like verifying the token
    // and then call the `onLogin` function passed as a prop
    onLogin(); // This will update the isAuthenticated state
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed", error);
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin 
        onSuccess={handleLoginSuccess} 
        onError={handleLoginFailure} 
      />
    </div>
  );
};

export default LoginPage;
