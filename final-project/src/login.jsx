import React, { useState } from "react";
import { signIn, signUp } from "./utils/api";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    try {
      e.preventDefault();

      let res = signIn({ email, password });

      if (res) {
        console.log("The Response : ", res);
      }
    } catch (e) {
      console.log("Erorr Occured from submiting the form : ", e);
    }
  };

  const handleChange = (e) => {
    try {
      console.log(e.target.value);
      let el = e.target;

      if (el.name === "email") {
        setEmail(el.value);
        return;
      }

      if (el.name === "password") {
        setPassword(el.value);
        return;
      }

      return "";
    } catch (e) {
      console.log("Error Occured : ", e);
    }
  };

  return (
    <div className=" grid place-items-center bg-black text-white h-[100vh]">
      <form onSubmit={handleSubmit}>
        <div className="py-5">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email address"
            value={email || ""}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            required
          />
        </div> */}
        <div>
          <button type="button" className="btn-primary w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
