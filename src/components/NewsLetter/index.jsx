import React, { useEffect, useState } from "react";
import { socials } from "../../constants";

export default function NewsLetter() {
  const [data, setData] = useState({ email: "", error: "" });
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorCheck =
      !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        value
      );

    if (errorCheck) {
      setData({
        email: "",
        error: "Something is not right! Try entering a valid email",
      });
      console.log(data);
    } else {
      setData({ email: value, error: "" });
      console.log(data);
      setValue("");
      setMessage("Thank you for subscribing!");
    }
  };
  useEffect(() => {
    setMessage("");
  }, []);

  return (
    <div className="pt-20 sm:px-10 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="sm:w-10/12 w-screen mx-auto p-10">
          <h1 className="text-3xl md:text-6xl font-bold lg:pb-10 md:pb-6 p-3">
            Join our Newsletter
          </h1>
          <p className="md:text-xl tracking-wide leading-6">
            We will let you know when there is an exclusive discount or event
            notification.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-4  gap-10 py-10 sm:px-10 lg:w-10/12  w-11/12 mx-auto ">
          <div className="md:col-span-3">
            <input
              type="Email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={value}
              className="w-full max-h-max px-6 py-3 rounded-md border-2 border-gray-300 outline-none"
            />
            {data.error && (
              <div className="flex justify-between border-l-4 border-red-900 bg-red-100 text-red-900 py-5 px-10 mt-5">
                <p className="text-xl font-bold">{data.error}</p>
                <span
                  className="text-red-900 cursor-pointer text-2xl font-bold"
                  onClick={() => setData({ email: "", error: "" })}
                >
                  x
                </span>
              </div>
            )}
            {message && (
              <div className="flex justify-between border-l-4 border-green-900 bg-green-100 text-green-900 py-5 px-10 mt-5">
                <p className="text-xl font-bold">{message}</p>
                <span
                  className="text-green-900 cursor-pointer text-2xl font-bold"
                  onClick={() => setMessage("")}
                >
                  x
                </span>
              </div>
            )}
          </div>
          <button
            className="bg-black text-white py-3 px-6 h-max rounded-md max-w-max md:col-span-1"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Join our community
          </button>
        </div>

        <div className="flex gap-5  sm:px-10 w-10/12 justify-center items-center pb-2 pt-10">
          {socials.map((social) => (
            <a href={social.link} key={social.id}>
              {social.icon}
            </a>
          ))}
        </div>
        <p className="md:text-xl">follow us on social media</p>
      </div>
    </div>
  );
}
