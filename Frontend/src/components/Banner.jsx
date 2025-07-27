import React from "react";
import banner from "../../public/Banner.png";
import banner1 from "../../public/Banner1.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            Welcome to Nepal Bookstore {" "}
            
              <span className="text-pink-600">"Your Gateway to Knowledge and Culture"</span>
            </h1>
            <p className="text-sm md:text-xl">
            Nestled in the heart of the Himalayas, Nepal Bookstore is your one-stop online destination for books that inspire, educate, and entertain. Whether you're a student, a passionate reader, or a curious soul, we bring you a curated collection of books across all genres—from Nepali literature and history to international bestsellers, academic texts, and children’s stories.
            At Nepal Bookstore, we believe that every book has the power to open minds and connect worlds. </p>
            <p className="text-sm md:text-xl">
             Our platform is designed to make reading accessible and enjoyable for everyone, with easy navigation, detailed book descriptions, and secure delivery all across Nepal.
             Explore our shelves, discover your next favorite read, and become a part of Nepal’s growing community of readers. Happy reading!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[400px] md:ml-12"
            alt=""
          />
          <br className="hidden md:block" />
          <img
            src={banner1}
            className="md:w-[550px] md:h-[400px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
