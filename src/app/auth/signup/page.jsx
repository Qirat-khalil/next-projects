"use client";
import { useState } from "react";

export default function AuthPage() {
  const [activePage, setActivePage] = useState("signup"); // default signup

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "12px" }}>
        {activePage === "signup" && (
          <div>
            <h3 className="text-center mb-4">Signup</h3>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-dark w-100">Signup</button>
            </form>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <button className="btn btn-link p-0" onClick={() => setActivePage("login")}>
                Login
              </button>
            </p>
          </div>
        )}

        {activePage === "login" && (
          <div>
            <h3 className="text-center mb-4">Login</h3>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-dark w-100">Login</button>
            </form>
            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <button className="btn btn-link p-0" onClick={() => setActivePage("signup")}>
                Signup
              </button>
            </p>
            <p className="text-center">
              <button className="btn btn-link p-0" onClick={() => setActivePage("forgot")}>
                Forgot Password?
              </button>
            </p>
          </div>
        )}

        {activePage === "forgot" && (
          <div>
            <h3 className="text-center mb-4">Forgot Password</h3>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-dark w-100">Send Reset Link</button>
            </form>
            <p className="text-center mt-3">
              <button className="btn btn-link p-0" onClick={() => setActivePage("login")}>
                Back to Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
