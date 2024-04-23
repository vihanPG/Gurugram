import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const storedIsAdmin = localStorage.getItem("isAdmin");
  const initialIsAdmin = storedIsAdmin ? JSON.parse(storedIsAdmin) : false;

  const [currentUser, setCurrentUser] = useState(initialUser);
  const [isAdmin, setIsAdmin] = useState(initialIsAdmin);

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", inputs);

      if (res.status === 200) {
        const { token, userId, isAdmin } = res.data;
        localStorage.setItem("jwttoken", token);
        localStorage.setItem("userid", userId);
        setCurrentUser(res.data);
        setIsAdmin(isAdmin); 
        localStorage.setItem("isAdmin", isAdmin); 
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", inputs);
      if (res.status === 201) {
        const { token, userId, isAdmin } = res.data;
        localStorage.setItem("jwttoken", token);
        localStorage.setItem("userid", userId);
        setCurrentUser(res.data);
        setIsAdmin(isAdmin);
        localStorage.setItem("isAdmin", isAdmin); 
      }
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    setCurrentUser(null);
    setIsAdmin(false); 
    localStorage.removeItem("isAdmin"); 
  };

  useEffect(() => {
    if (currentUser && typeof currentUser === "object") {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const contextValue = {
    currentUser,
    isAdmin,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
