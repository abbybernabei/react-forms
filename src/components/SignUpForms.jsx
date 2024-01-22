import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.length < 8) {
      setError("username must be at least eight characters");
      return;
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="username">
          Username
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button>submit</button>
      </form>
    </>
  );
}
