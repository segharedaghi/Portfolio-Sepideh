import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:se.gharedaghi@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/sepideh-gharehdaghi-05088989/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        
      </div>
  )
}

export default Media