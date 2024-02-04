"use client"
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
    const [show, setShow] = useState(false);
  return (
    <>
    <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-xl font-semibold text-green">{question}</h1>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="pt-3 text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accordion