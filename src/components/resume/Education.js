import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MSc in Computer Science – Computer Systems"
            subTitle="AmirKabir University of Technology - Iran (2011 - 2013)"
          />
          <ResumeCard
            title="B.A in Computer Software Engineering "
            subTitle="	Azad University - Iran (2003 - 2005)"
          />
          <ResumeCard
            title="Associate in Computer (Software)"
            subTitle="Azad University - Iran (1997 - 1999)"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Creating a Responsive Web Experience"
            subTitle="Linkedin"
            result="Online"
          />
          <ResumeCard
            title=" CSS Essential Training"
            subTitle="Linkedin"
            result="Online"
          />
          <ResumeCard
            title="JavaScript Essential Training"
            subTitle="Linkedin"
            result="Online"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
