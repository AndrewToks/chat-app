import React from "react";
import { UserAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"; // Assuming you use react-router

type PrivateRouteProps = {
  children: React.ReactNode; // Use React.ReactNode to support any valid React child (string, component, etc.)
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const {currentUser} = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />; // Redirect to login if not authenticated
  }

  return <>{children}</>; // If authenticated, render the children components
};
