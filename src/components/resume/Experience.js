import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2013 - Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="BIDAR.ca, Montreal (2021 - Present )"
            result="CANADA"
            des={[
              "Developed and implemented responsive web applications using React, JavaScript, HTML, and CSS",
              "Collaborated with cross-functional teams to gather requirements and translate them into technical specifications",
              "Designed and implemented user interfaces (UI) using React components, ensuring a seamless user experience and optimal performance",
              "Optimized application performance through efficient rendering, caching, and asynchronous data loading techniques",
              "Conducted thorough testing and debugging of applications to identify and resolve issues, ensuring high-quality deliverables",
              "Actively participated in code reviews, providing constructive feedback and ensuring adherence to coding standards and best practices",
              "Stayed up to date with the latest trends and advancements in frontend development, constantly expanding knowledge and skills",
            ]}
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="PDD.ir. (2018 - 2021) "
            result="IRAN-Remote"
            des={[
              "Design and implement web pages",
              "Optimize applications for maximum performance",
              "Analyze and design system based on client requirements",
              "Design database tables and store procedures",
              "Create reports on web application",
              "Fix bugs and issues in application",
            ]}
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Beheshti University of Medical Sciences. (2015 - 2018) "
            result="IRAN"
            des={[
              "Determining the structure and design of web pages",
              "Developing new user-facing features",
              "Determining the structure and design of web pages",
              "Building reusable codes",
              "Optimizing page loading times",
              "Using a variety of markup languages to create the web pages",
              "Knowledgeable of layout aesthetics and browser testing, in different browsers and devices",
            ]}
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Milad Hospital. (2013 - 2015)"
            result="IRAN"
            des={[
              "Determining the structure and design of web pages",
              "Designing, analyse and implement internet admission for patients through the hospital website",
              "Responsible for developing all the UI pages using HTML, CSS3, Bootstrap, JavaScript",
              "Worked in a team, involved in developing the UI layout and front-end programming for web application that matches requirements of Client",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
