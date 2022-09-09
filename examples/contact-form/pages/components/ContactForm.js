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
    // How this code snippet works:
    // This logic overwrites the default behavior of `grecaptcha.ready()` to
    // ensure that it can be safely called at any time. When `grecaptcha.ready()`
    // is called before reCAPTCHA is loaded, the callback function that is passed
    // by `grecaptcha.ready()` is enqueued for execution after reCAPTCHA is
    // loaded.
    if (typeof grecaptcha === "undefined") {
      grecaptcha = {};
    }
    grecaptcha.ready = function (cb) {
      if (typeof grecaptcha === "undefined") {
        // window.__grecaptcha_cfg is a global variable that stores reCAPTCHA's
        // configuration. By default, any functions listed in its 'fns' property
        // are automatically executed when reCAPTCHA loads.
        const c = "___grecaptcha_cfg";
        window[c] = window[c] || {};
        (window[c]["fns"] = window[c]["fns"] || []).push(cb);
      } else {
        cb();
      }
    };

    grecaptcha.ready(function () {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
          action: "submit",
        })
        .then(function (token) {
          axios
            .post(process.env.NEXT_PUBLIC_PIPEDREAM_WORKFLOW_URL, {
              ...data,
              token,
            })
            .then((response) => {
              setSuccessMessage(
                `Thanks for signing up! Check your inbox for updates 😊`
              );
            })
            .catch((e) => console.error(e));
        });
    });
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
