import React from "react";
import Image from "next/image";
import StarRating from "./starRating";

const CourseCard = ({ title, category, description, imageSrc, rating }) => {
    return (
        <>
        <div className="p-4 md:w-1/3">
            <div className="h-full border-none border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="h-48 md:h-36 w-full relative group">
                    <div className="group w-full h-full transition-transform hover:scale-110">
                        <Image src={imageSrc} alt="blog" className="object-cover object-center rounded-md" height={200} width={500} style={{ height: "200px" }} />
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex items-center justify-between">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">{category}</h2>
                        <StarRating rating={rating} />
                    </div>
                    <h1 className="title-font text-lg font-mediumtext-zinc-950 font-bold mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3 ">{description}</p>
                </div>
                <div className="flex mt-4">
                    <button className="text-white bg-sky-800 border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default CourseCard;