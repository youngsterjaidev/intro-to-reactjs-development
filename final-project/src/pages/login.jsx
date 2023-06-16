import React, { useState } from "react";
import { Cover } from "../assets";
import { Footer } from "../elements";
import { Link } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    try {
      let el = e.target;

      if (el.name === "email") {
        setEmail(e.value);
      }

      if (el.name === "password") {
        setPassword(e.value);
      }
      //

      return;
    } catch (e) {
      //
    }
  };

  return (
    <>
      <div
        className=" grid place-items-center bg-black text-white h-[100vh] p-6"
        style={{
          background: `url("${Cover}") no-repeat`,
          backgroundSize: "Cover",
          backgroundColor: "#000000ba",
          backgroundBlendMode: "soft-light",
        }}
      >
        <form className="bg-[#000000bf] w-full px-8 py-12 lg:max-w-[400px]">
          <legend className="font-600 text-4xl">Sign In</legend>
          <div className="py-2">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email address or Phone number"
              value={email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="py-2">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={handleChange}
            />
          </div>
          <div className="py-2">
            <button type="button" className="btn-primary w-full">
              Login
            </button>
          </div>
          <div className="py-2">
            <p>
              New to Netflix? <Link to="/">Sign up Now</Link>
            </p>
          </div>
          <div className="py-2">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot <a>Learn more</a>.
            </p>
          </div>
        </form>
      </div>
      <Footer style="text-slate-400" />
    </>
  );
};
