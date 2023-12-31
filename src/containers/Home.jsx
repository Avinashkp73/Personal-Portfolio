import React from "react";
import { AnimatePresence,motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return <section id="home" className="flex items-center justify-center
  flex-col gap-12 relative">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full" >
    
    
        <div className="w-full h-full flex flex-col items-center lg:items-start 
        justify-center gap-4" >
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello,It's Me 
            <span className="block tracking-wider text-4xl  
            lg:tet-6xl mt-4 text-white">
              {" "}
              Avinash Kumar
            </span>
          </h2>


          <h2 className="text-2xl lg:text-4xl text-texlight 
          mt-4"> and I am {" "}
          <HeroTypeWritter 
          speed ={100}
          words={["a Developer" , "an Adventurer", 
          "a Freelancer"]} />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
          I specialize in full-stack web development, with proficiency in front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Node.js and Express. My academic journey and project work have honed my skills in database management, covering both SQL and NoSQL databases. As I approach graduation, I am actively seeking 
          internship and full-time opportunities as a software developer.
          </p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials && Socials.map((item, index) => (
              <HomeSocialLinks  key={index} data={item} index={index} />
            ))}
          </AnimatePresence>

        </div>
        <a 
        href="https://drive.google.com/file/d/10fNm8KITLtjeHwTWFOfkdd-3D9NKak7P/view?usp=sharing" 
        style={{boxShadow : "inset 0px 0px 10px rgba(255,255,255,0.3)"}}
        className="mt-12 border border-[rgba(255,255,255,0.3)]
        rounded-xl px-8 py-3 active:95 group hover:border-primary">
          <p className="text-texlight group-hover:text-transparent 
          group-hover:bg-clip-text  group-hover:bg-gradient-to-r 
          group-hover: from-primary group-hover: to-secondary">Resume</p>
        </a>


        </div>
      <div className="w-full h-full flex items-start justify-center 
      lg:items-center">
        <motion.img 
        initial={ {y:0}}
        animate ={{ y: [-10,10,-10]}}
        transition={{
          repeat:Infinity,
          duration :3,
          ease: "linear",
        }}
          src={Hero} className="w-auto  h-auto"/>
        
      </div>
    </div>

  </section>
};
export default Home;
