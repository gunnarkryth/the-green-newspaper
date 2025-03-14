import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async ({ username, password }) => {
    const body = new URLSearchParams();
    body.append("username", username);
    body.append("password", password);

    try {
      const response = await fetch("http://localhost:4242/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.access_token);
        setUser(data.user || null);
        return { success: true };
      } else {
        return { success: false, error: data.message || "Login failed" };
      }
    } catch (err) {
      return { success: false, error: "Network error. Please try again." };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
