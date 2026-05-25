import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { auth } from "../firebase/firebase";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    setError("");

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");

    } catch (err) {
      setError(
        "Unable to create account"
      );
    }
  }

  return (
    <div className="auth-page">
      <form
        onSubmit={handleRegister}
        className="auth-form"
      >
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        {error && <p>{error}</p>}

        <button type="submit">
          Create Account
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}