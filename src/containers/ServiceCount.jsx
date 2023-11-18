import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return <div className="w-full py6 lg:py-24 mt-24 
  flex items-center justify-center flex-wrap gap-8">
  <ServiceCard count={"50+"} text={"Happy Clients"}/>
  <ServiceCard count={"3+"} text={"Experience"}/>
  <ServiceCard count={"20+"} text={"Public Projects"}/>
  <ServiceCard count={"5+"} text={"Full Stack Projects"}/>
 

    
    </div>;
};

export default ServiceCount;
