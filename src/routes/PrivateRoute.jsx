import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = UserAuth();
  console.log(currentUser);
  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
