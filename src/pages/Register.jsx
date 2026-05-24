import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function Register() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert(
        "Account created successfully"
      );

    } catch (error) {
      alert(error.message);
    }
  };

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

        <button
          type="submit"
          className="primary-btn"
        >
          Register
        </button>

      </form>
    </div>
  );
}