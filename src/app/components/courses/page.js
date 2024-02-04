import React from "react";
import CourseCard from "./courseCard";
import { GoDotFill } from 'react-icons/go'

const Course = () => {
  // Sample course data with ratings (you can replace this with your actual data)
  const courses = [
    {
      title: "Frontend Developer",
      category: "Web Development",
      description: "A frontend development course equips students with the essential skills and tools to design and build captivating user interfaces for websites and web applications. ",
      imageSrc: "/images/Frontend.jpg",
      rating: 5,
    },
    {
      title: "Backend Developer",
      category: "Web Development",
      description: "A backend development course focuses on teaching students the art of building and maintaining the server-side of websites and web applications.",
      imageSrc: "/images/Backend.jpg",
      rating: 5,
    },
    {
      title: "Fullstack Developer",
      category: "Web Development",
      description: "A full-stack development course provides comprehensive training in both frontend and backend technologies, equipping students to handle end-to-end web application development. ",
      imageSrc: "/images/fullstack.png",
      rating: 5,
    },
    {
      title: "Data Science",
      category: "Web Development",
      description: "A frontend development course equips students with the essential skills and tools to design and build captivating user interfaces for websites and web applications. ",
      imageSrc: "/images/Frontend.jpg",
      rating: 5,
    },
    {
      title: "UI/UX Designer",
      category: "Web Development",
      description: "A frontend development course equips students with the essential skills and tools to design and build captivating user interfaces for websites and web applications. ",
      imageSrc: "/images/Frontend.jpg",
      rating: 5,
    },
    {
      title: "Machine Learning",
      category: "Web Development",
      description: "A frontend development course equips students with the essential skills and tools to design and build captivating user interfaces for websites and web applications. ",
      imageSrc: "/images/Frontend.jpg",
      rating: 5,
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font mt-8">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-row p-3">
          <GoDotFill size={20} className="text-sky-800 mt-1" />
              <GoDotFill size={20} className="text-sky-800 mt-1" />
              <span className='text-slate-400 px-4  text-xl'>LEARN NEW SKILL</span>
              <GoDotFill size={20} className="text-sky-800 mt-1" />
              <GoDotFill size={20} className="text-sky-800 mt-1" />
          </div>
          <span className="text-6xl pb-2"> <span className="font-bold color-black text-zinc-950">Popular</span> Courses.</span>

          <div className="flex flex-wrap mt-3 -m-4 ">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                category={course.category}
                description={course.description}
                imageSrc={course.imageSrc}
                rating={course.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
