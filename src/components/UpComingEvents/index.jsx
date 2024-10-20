import React from "react";
import { events } from "../../constants";

export default function UpComingEvents() {
  return (
    <div className="pt-20 sm:px-10 " id="events">
      <div className="sm:w-10/12 w-screen mx-auto p-10">
        <h1 className="text-4xl md:text-6xl font-bold ">UpComingEvents</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto gap-10 p-5">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex md:flex-row flex-col   lg:flex-col xl:flex-row  gap-2  shadow-md rounded-md"
          >
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row  gap-4 p-10">
              <img
                src={event.image}
                alt={event.title}
                className="xl:w-52 xl:h-52 md:w-52 md:h-52 lg:w-full lg:h-64 w-full sm:h-64 object-cover rounded-md"
              />
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm">{event.title}</p>
                <h2 className="text-2xl font-bold mb-2">{event.by}</h2>
                <p>{event.desc}</p>
              </div>
            </div>

            <div className="w-40 h-[70%] text-center flex flex-col gap-5 bg-[#932111] rounded-md py-2 px-5 text-white">
              <h1 className="text-2xl font-bold border-b-4 border-[#9e3629] pb-2">
                {event.date}
              </h1>
              <p>{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
