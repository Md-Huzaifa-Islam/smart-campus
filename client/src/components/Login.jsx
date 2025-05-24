import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function Login() {
  const { signIn, setUser, signInWithGoogle } = useAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Call signIn function from useAuth
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log("User signed in:", user);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        // ...
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end mb-4">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>
          <button className="btn btn-neutral w-full mt-2">Login</button>
          <div className="divider">or</div>
          <button
            type="button"
            onClick={handleLoginWithGoogle}
            className="btn btn-outline btn-primary w-full flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M44.5 20H24V28.5H36.9C35.5 33.1 31.2 36.5 24 36.5C16.3 36.5 10 30.2 10 22.5C10 14.8 16.3 8.5 24 8.5C27.3 8.5 30.2 9.7 32.4 11.7L38.1 6C34.5 2.7 29.6 0.5 24 0.5C10.7 0.5 0 11.2 0 24.5C0 37.8 10.7 48.5 24 48.5C37.3 48.5 48 37.8 48 24.5C48 22.8 47.8 21.4 47.5 20H44.5Z"
                  fill="#FFC107"
                />
                <path
                  d="M6.3 14.1L13.2 19.1C15.1 15.1 19.2 12.5 24 12.5C27.3 12.5 30.2 13.7 32.4 15.7L38.1 10C34.5 6.7 29.6 4.5 24 4.5C16.3 4.5 10 10.8 10 18.5C10 20.2 10.2 21.6 10.5 23H6.3V14.1Z"
                  fill="#FF3D00"
                />
                <path
                  d="M24 44.5C31.2 44.5 37.5 38.2 37.5 30.5C37.5 28.8 37.3 27.4 37 26H24V34.5H32.9C31.1 38.5 27.1 41.5 24 41.5C19.2 41.5 15.1 38.9 13.2 34.9L6.3 39.9C10.2 44.2 16.3 44.5 24 44.5Z"
                  fill="#4CAF50"
                />
                <path
                  d="M44.5 20H24V28.5H36.9C36.5 30.1 35.5 31.6 34.1 32.7L41.2 37.7C43.7 34.7 45.5 30.5 45.5 24.5C45.5 22.8 45.3 21.4 45 20H44.5Z"
                  fill="#1976D2"
                />
              </g>
            </svg>
            Login with Google
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <Link to={"/auth/signup"} className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
