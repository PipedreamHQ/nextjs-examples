import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post(process.env.NEXT_PUBLIC_PIPEDREAM_WORKFLOW_URL, data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for signing up! Check your inbox for updates 😊`
        );
      })
      .catch((e) => console.error(e));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Join our newsletter!</h4>

      <input {...register("email")} defaultValue="me@gmail.com"></input>

      <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
