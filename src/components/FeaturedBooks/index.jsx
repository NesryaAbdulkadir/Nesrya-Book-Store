import React from "react";
import { featuredBooks } from "../../constants";
import { Carousel, IconButton } from "@material-tailwind/react";

export default function FeaturedBooks() {
  return (
    <div className="pt-14 sm:px-10 " id="featured">
      <Carousel
        className="rounded-xl w-11/12 mx-auto"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 bg-gray-300 sm:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-gray-300 sm:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {featuredBooks.map((book) => (
          <div
            key={book.id}
            className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-20 gap-5 justify-between   items-center sm:p-20 p-5"
          >
            <div className="flex flex-col  gap-5  col-span-2 ml-10">
              <h2 className="text-3xl lg:text-6xl font-bold">{book.title}</h2>
              <p>Author: {book.author}</p>
              <p className="lg:text-xl text-gray-700">{book.desc}</p>
            </div>
            <img
              src={book.image}
              alt={book.title}
              className="w-80 rounded-md col-span-1"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
