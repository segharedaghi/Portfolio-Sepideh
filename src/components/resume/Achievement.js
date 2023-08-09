import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2013 - Present
          </p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="In the Milad Hospital"
            subTitle=" (2013 - 2015)"
            des="I have implemented internet admission for patients through the hospital website and solved the biggest problem for them."
          />
          <ResumeCard
            title="In Beheshti University of Medical Sciences"
            subTitle=" (2015- 2018)"
            des="design a new website for the faculty and set up a subdomain for all majors and sub-majors"
          />
          <ResumeCard title="Bidar.ca  " subTitle="(2021)" des="" />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2013 - Present
          </p>
          <h2 className="text-4xl font-bold">Membership in Committees</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT manager of the International Congress of Neurosurgeons Professor Majid Samii"
            subTitle=" (2014 - 2015)"
            result=""
            des="http://www.ini-hannover.de/en"
          />
          <ResumeCard
            title="IT manager of the International Congress of Kidney and Urinary Tracts by Professor Sim Farush"
            subTitle=" (2013)"
            result=""
            des=""
          />
          <ResumeCard
            title="Honorary member of Iranian Ostomy Association as IT and website manager  "
            subTitle="(2017)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
