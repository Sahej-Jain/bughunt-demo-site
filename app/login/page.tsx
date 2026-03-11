"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return localStorage.getItem("logged_in_user") || "";
  });

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    // Intentional bug: this allows login without validating password properly.
    if (email.includes("@")) {
      localStorage.setItem("logged_in_user", email);
      setUserEmail(email);
      setPassword("");
      return;
    }

    alert("Invalid login");
  };

  const handleLogout = () => {
    localStorage.removeItem("logged_in_user");
    setUserEmail("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="auth-wrap">
      <h1>Login</h1>
      {userEmail ? (
        <div className="welcome-box">
          <p>You are logged in as {userEmail}.</p>
          <button className="secondary-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className="auth-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button type="submit" className="primary-btn">
            Sign In
          </button>
        </form>
      )}
    </section>
  );
}
