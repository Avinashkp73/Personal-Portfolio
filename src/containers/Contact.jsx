import React, { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { Leaf1,Leaf2} from "../assets";

import {addDoc, collection} from "firebase/firestore"
import {db} from "../config/firebase.config"
import { Alert } from "./"

const Contact = () => {

  const [data,setData] =useState ({
    firstName :"",
    lastName :"",
    email :"",
    message :"",

  })

  const [alert,setAlert] = useState({
    isAlert :false,
    message:"",
    status:null,
  });

  const  handleTextChange =(e) =>{
    const {name,value} =e.target;

    //update the state
    setData((prevData) => ({...prevData, [name]:value})); 


  };

  const sendMessage = async ()=>{
    if(data.email === "" || data.email === null){
      setAlert({isAlert:true,
        message: "Required Fields cannot be Empty",
        status :"warning",
    });
    setInterval(() =>{
      setAlert({
        isAlert: false,
        message: "",
        status :null,
    });
     },4000);
      //alert
    }else{
      await addDoc(collection(db,"message"), {...data})
      .then(() => {
        //alert
        setData({
          firstName :"",
          lastName :"",
          email :"",
          message :""

        })
        setAlert({
          isAlert:true,
          message: "Thanks for reaching out to me!",
          status :"success",
      });
      setInterval(() =>{
        setAlert({
          isAlert: false,
          message: "",
          status :null,
      });
       },4000);
      })
      .catch((err) => {
        setAlert({
          isAlert:true,
          message:`Error : ${err.message}`,
          status :"danger",
      });
      setInterval(() =>{
        setAlert({
          isAlert: false,
          message: "",
          status :null,
      });
       },4000);
        

      });
    }
  };



  return (<section 
  id="contact" 
  className="flex items-center justify-center
  flex-col gap-12 my-12" >

 {/* Alert Toast*/}  

<AnimatePresence>
  {alert.isAlert && (
    <Alert  status={alert.status} message={alert.message} />
  )}
</AnimatePresence>

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
           from-primary  to-secondary">Contact Me</p>
          <img src={Leaf2} className="w-6 h-auto object-contain " alt=""/>
      </motion.div>


    </div>
    
    {/* Main Content*/}

    <div className="w-full flex flex-col items-center
     justify-start gap-4">
      <div className=" w-full lg:w-[600px] p-2 
      flex flex-col items-center justify-start gap-4">
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
   
   <input text="text"
    name="firstName"
    value={data.firstName}
    onChange={handleTextChange}
    placeholder="First Name" className="w-full px-4 py-3 rounded-md
    border border-[rgba(255,255,255,0.3)] bg-transparent 
     focus:border-primary outline-none text-white"/>

    <input text="text"
    name="lastName" 
    value={data.lastName}
    onChange={handleTextChange}
    placeholder="Last Name" 
    className="w-full px-4 py-3 rounded-md
    border border-[rgba(255,255,255,0.3)] bg-transparent 
     focus:border-primary outline-none text-white"/>
    </div>


    <input text="email"
    name="email" placeholder="Email"
    value={data.email}
    onChange={handleTextChange} 
    className="w-full px-4 py-3 rounded-md
    border border-[rgba(255,255,255,0.3)] bg-transparent 
     focus:border-primary outline-none text-white"/>
    
    <textarea name="message" id="" cols="0" rows="10" 
    placeholder="Message Here"
    value={data.message}
    onChange={handleTextChange}
    className="w-full px-4 py-3 rounded-md
    border border-[rgba(255,255,255,0.3)] bg-transparent 
     focus:border-primary outline-none text-white" >

     </textarea>
     <div className="w-full flex items-center justify-center">
      <button className="px-12 py-3 
      bg-gradient-to-br from-primary to-secondary rounded-md
      w-full lg:w-auto hover:bg-gradient-to-be hover:from-black hover:to-black 
      hover:border hover:border-primary hover:text-primary "
      onClick={sendMessage} >
      
      
       Send 
      </button>
     </div>


    </div>
              
    </div>
    </section>
);
};

export default Contact;
