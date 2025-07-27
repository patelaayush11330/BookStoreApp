import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome to Nepal Bookstore
            <br />
            <span className="text-pink-600">Explore Our Courses – Learn, Grow, Succeed</span>
            
          </h1>
          <p className="mt-12">
            At Nepal Bookstore, we believe that knowledge is the key to unlocking your potential.
            We’re more than just a place for books—we’re your partner in lifelong learning.
            <br />
            Our Courses section offers a variety of learning opportunities designed to help you expand your knowledge, sharpen your skills, and achieve your goals. 
            Whether you're a student, a professional, or a curious learner, you'll find courses tailored to your interests—from literature and language to technology, business, and personal development.
            Join our growing community of learners and take your next step with confidence—right here at Nepal Bookstore.
          </p>
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-600"> Here! :)</span>
          </h1>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
