import { Form } from "@/src/components/form";
import React from "react";

const Signup = () => {
  const onSubmit = async (email, password) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
      alert("sign up successful");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Form signIn={false} onFormSubmit={onSubmit} />
    </div>
  );
};

export default Signup;
