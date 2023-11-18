import React from "react";
import {motion } from "framer-motion";
import { Leaf1,Leaf2,} from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return <section 
  id="skills" 
  className="flex items-center justify-center
  flex-col gap-12 my-12">

    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
       initial={ {opacity:0, width:0}}
       animate ={{opacity:1,width:200}}
       exit={{opacity:0,width:0}}
       transition={{delay: 0.4}} 
      
      
      className="w-full flex items-center flec-col gap-12 my-12">
          <img src={Leaf1} className="w-6 h-auto object-contain " alt=""/>
          <p className="text-transparent 
          bg-clip-text  bg-gradient-to-r 
           from-primary  to-secondary">Skills</p>
          <img src={Leaf2} className="w-6 h-auto object-contain " alt="" />
      </motion.div>


    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full" >
   
 {/* content section*/}

 <div className="w-full px-8 flex flex-col 
 gap-4 items-start justify-start">
   <p className="text-transparent 
          bg-clip-text  bg-gradient-to-r 
           from-primary  to-secondary">
            My Skills and Work Experience</p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">

Over the past three years, I've delved into full stack development, mastering HTML, CSS, and Tailwind CSS for crafting visually appealing and responsive user interfaces. My proficiency extends to JavaScript, React JS, and Redux for dynamic front-end applications, coupled with back-end expertise in MongoDB, MySQL, Node JS, and Express JS for robust server-side architectures.
  </p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">
Active involvement in college technical clubs has shaped my skills through hands-on projects, enhancing my problem-solving abilities and applying intermediate data structures and algorithms knowledge. This practical experience emphasizes the importance of clean and maintainable code in delivering high-quality software solutions.
  </p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">
A notable aspect of my college journey involves expertise in Javascript,I have also worked in mobile app development using Kotlin for creating efficient and user-friendly Android applications. This cross-platform development experience enriches my versatility as a full stack developer, reflecting my commitment to excellence and passion for innovation in the dynamic realm of technology.

  </p>

 </div>
 {/* image*/}
 <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
  <SkillCard  skill={"HTML"} percentage={"90%"} color={"#FF3F3F"} move={true} />
  <SkillCard  skill={"CSS"} percentage={"80%"} color={"green"} move={false} />
  <SkillCard  skill={"Javascript"} percentage={"95%"} color={"yellow"} move={true} />
  <SkillCard  skill={"React JS"} percentage={"90%"} color={"cyan"} move={false} />
  <SkillCard  skill={"NodeJS"} percentage={"94%"} color={"magenta"} move={true} />
  <SkillCard  skill={"Express JS"} percentage={"88%"} color={"#90EE90"} move={false} />
  <SkillCard  skill={"MongoDB"} percentage={"75%"} color={"blue"} move={true} />
  <SkillCard  skill={"mySql"} percentage={"78%"} color={"#FFCC99"} move={false} />
  <SkillCard  skill={"Kotlin"} percentage={"69%"} color={"pink"} move={true} />
   </div>

    </div>
    </section>
};

export default Skills;
