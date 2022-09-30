import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function New() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://eoyocn3n7jd4eb9.m.pipedream.net", data);
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl font-semibold my-6">
        Add a new Tiny House Community
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="">
          <label className="text-slate-500">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            defaultValue="test"
            {...register("name")}
          />
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="bg-slate-500 text-white px-5 py-4 shadow-md rounded-md text-xl my-7"
          type="submit"
        />
      </form>
    </div>
  );
}
