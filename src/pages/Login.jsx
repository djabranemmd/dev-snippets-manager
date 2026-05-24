import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { auth } from "../firebase/firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <form
        onSubmit={handleLogin}
        className="auth-form"
      >

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="primary-btn"
          disabled={loading}
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>

        <p className="auth-switch">
          Don’t have an account?{" "}
          <Link to="/register">
            Create one
          </Link>
        </p>

      </form>

    </div>
  );
}