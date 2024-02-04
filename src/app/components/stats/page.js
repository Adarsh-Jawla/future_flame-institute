"use client";
import { useState, useEffect, useMemo } from "react";
import { FaGlobe, FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";

const Stats = () => {
  const [counters, setCounters] = useState({
    countries: 0,
    graduates: 0,
    staff: 0,
    courses: 0,
  });

  const targetCounts = useMemo(() => ({
    countries: 120,
    graduates: 15000,
    staff: 150,
    courses: 150,
  }), []);

  const countSpeed = 5; // Count speed in seconds

  const totalCounts = useMemo(() => ({
    countries: Math.ceil(targetCounts.countries / (countSpeed * 10)),
    graduates: Math.ceil(targetCounts.graduates / (countSpeed * 10)),
    staff: Math.ceil(targetCounts.staff / (countSpeed * 10)),
    courses: Math.ceil(targetCounts.courses / (countSpeed * 10)),
  }), [targetCounts, countSpeed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        countries: Math.min(prevCounters.countries + totalCounts.countries, targetCounts.countries),
        graduates: Math.min(prevCounters.graduates + totalCounts.graduates, targetCounts.graduates),
        staff: Math.min(prevCounters.staff + totalCounts.staff, targetCounts.staff),
        courses: Math.min(prevCounters.courses + totalCounts.courses, targetCounts.courses),
      }));
    }, 100); // Increase counters every 100 milliseconds

    setTimeout(() => {
      clearInterval(interval); // Stop the interval after 5 seconds
    }, countSpeed * 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [targetCounts, totalCounts, countSpeed]);

  return (
    <div className=" bg-sky-800 flex flex-col justify-center items-center h-48" style={{backgroundImage: 'url("/stats.jpg")'}}>
      
      <div className="flex flex-row justify-center items-center gap-24 text-white space-x-4">
        <div className="flex flex-col gap-4 text-xl items-center">
          <FaGlobe size={48} />
          <p>{counters.countries}</p>
          <p>Countries Reach </p>
        </div>
        <div className="flex flex-col gap-4 text-xl items-center">
          <FaGraduationCap size={48} />
          <p>{counters.graduates}</p>
          <p>Passed Graduates </p>
        </div>
        <div className="flex flex-col gap-4 text-xl items-center">
          <FaUserFriends size={48} />
          <p>{counters.staff}</p>
          <p>Qualified Staff </p>
        </div>
        <div className="flex flex-col gap-4 text-xl items-center">
          <BsFileTextFill size={48} />
          <p>{counters.courses}</p>
          <p>Courses Published</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;