import React from "react";

export default function AboutUs() {
  return (
    <div className="pt-28 sm:px-10 " id="about">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center gap-16 w-11/12 mx-auto">
        <div className="md:col-span-1 flex flex-col gap-5">
          <div className="sm:w-11/12 w-screen mx-auto pb-5">
            <h1 className="text-4xl md:text-6xl font-bold">About us</h1>
          </div>

          <p className="text-xl tracking-wide leading-8">
            Welcome to Nesrya Bookstore, where every book opens a door to new
            worlds and every event brings our community together! Founded in
            [Year], our bookstore is more than just a place to buy books—it's a
            vibrant hub for literature lovers and creative souls alike. From
            intimate book signings with local authors to engaging book club
            discussions, we celebrate the joy of reading and storytelling. Our
            mission is to create a warm and inviting space where everyone feels
            at home, inspired, and connected through the power of books.
          </p>
          <p className="text-xl tracking-wide leading-8">
            we are passionate about nurturing our community through a variety of
            engaging events. Join us for our lively book club meetings, where
            readers can dive deep into their favorite titles and share their
            thoughts with fellow enthusiasts. We also host exciting book signing
            events, giving you the chance to meet authors, ask questions, and
            get your books personalized. But that’s not all! Our art and craft
            events invite creativity and self-expression, perfect for families,
            friends, and individuals looking to explore their artistic side. We
            are committed to creating a space where everyone can learn, grow,
            and connect—because together, we can foster a love for literature
            and creativity that enriches our community!
          </p>
        </div>
        <img
          src="/store.jpg"
          alt="store"
          className="w-full md:col-span-1 h-4/6 object-cover"
        />
      </div>
    </div>
  );
}
