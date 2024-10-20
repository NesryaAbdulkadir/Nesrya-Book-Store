import React from "react";
import { testimonials } from "../../constants";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div>
      <div className="pt-20 sm:px-10 " id="testimonials">
        <div className="sm:w-10/12 w-screen mx-auto p-10">
          <h1 className="text-4xl md:text-6xl font-bold ">Testimonials</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-10 p-10 shadow-md rounded-md"
            >
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">{testimonial.quote}</p>
                <p>{testimonial.desc}</p>
              </div>
              <div className="flex gap-5 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="flex flex-col gap-2 ">
                  <p className="text-gray-500 text-sm">{testimonial.name}</p>
                  <span>{testimonial.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
