

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router"; // Import the router

const App = () => {
    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <RouterProvider router={router} />
        </GoogleOAuthProvider>
    );
};

export default App;
