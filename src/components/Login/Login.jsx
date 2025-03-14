import React, { useState } from "react";
import { useUser } from "../../context/UserContext";

export const Login = () => {
  const { login } = useUser();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(credentials);
    if (!result.success) {
      setError(result.error);
    } else {
      setError(null);
      console.log("Login successful");
      // Additional actions (e.g., navigation) can be added here.
    }
  };

  return (
    <section>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Email</label>
        <input
          type="email"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
};
