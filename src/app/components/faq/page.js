import Accordion from "./accordian";
import { accordions } from "./data";
import { GoDotFill } from 'react-icons/go'

const Faq = () => {
  return (
    <>
    <div className=" bg-gray-100">
    <div className="flex flex-row p-3 justify-center mt-10 ">
        <GoDotFill size={20} className="text-sky-800 mt-2" />
        <GoDotFill size={20} className="text-sky-800 mt-2" />
        <span className='text-slate-400 px-4  text-2xl'>Frequently Asked Questions</span>
        <GoDotFill size={20} className="text-sky-800 mt-2" />
        <GoDotFill size={20} className="text-sky-800 mt-2" />
      </div>

      {/* main content here */}
      <div className="max-w-[700px] w-full mx-auto my-6 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {/* passing two props to this component */}
              <Accordion question={question} answer={answer}></Accordion>
            </div>
          );
        })}
      </div>

    </div>
    </>
  );
};

export default Faq;