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
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Sapiente dolores qui cum, sunt natus nemo animi perferendis, esse modi voluptas quis quaerat placeat atque architecto numquam. Aut odio ut ad.
  </p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam obcaecati molestias mollitia in quis ducimus, 
vel repellat odio natus! Minus iusto autem optio! Voluptate non, provident impedit mollitia reiciendis et.
  </p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">
Lorem ipsum dolor, sit amet consectetur adipisicing elit.
 Fugit similique distinctio dolore impedit dolorem obcaecati. 
 Eveniet minus voluptates accusantium.
 Dolorum dolores sequi ipsam ipsa qui debitis quidem hic cupiditate quo?

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
