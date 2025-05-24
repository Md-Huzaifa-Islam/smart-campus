import React, { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const { createUser, signInWithGoogle, setUser, user } = useAuth();
  useEffect(() => {
    // Check if user is already logged in
    if (user) {
      // Redirect to home or dashboard if user is already logged in
      console.log("User is already logged in:", user);
      window.location.href = "/";
      // You can use navigate('/dashboard') or similar to redirect
    } else {
      console.log("User is not logged in");
    }
  }, [user]);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    // Call createUser function from useAuth
    createUser(email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const payLoad = {
          email,
          name,
          role,
        };
        if (role === "vendor") {
          payLoad.menu = 0;
        }
        // await axios.post(`${import.meta.env.VITE_API_URL}/users`, payLoad);
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payLoad),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User created successfully:", data);
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
        setUser(user);
        console.log(user);

        // You can also update the user's profile with name and role here
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleSignUpWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
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
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>
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
          <div className="mb-4">
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
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="student"
                className="radio"
                required
                defaultChecked // Student is selected by default
              />
              <span>Student</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="vendor"
                className="radio"
                required
              />
              <span>Vendor</span>
            </label>
          </div>
          <button className="btn btn-neutral w-full mt-2">Sign Up</button>
          <div className="divider">or</div>
          <button
            type="button"
            onClick={handleSignUpWithGoogle}
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
            Sign up with Google
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/auth" className="link link-primary">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
