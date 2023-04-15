import {React,useState,useRef, useLayoutEffect}from "react";

import { Img, Text, Line, Button } from "components";
import '../../styles/sidebar.css'
import Hamburger from 'hamburger-react'
// import { Squash as Hamburger } from 'hamburger-react'




const Sidebar = (props) => {

  const burger = document.querySelector('.burger');
  

  const [isOpen, setOpen] = useState(false)
  const [thisHeight, setHeight] = useState(0)
  let styleCSS = {
    height : thisHeight+'px',
    overflow:'hidden',
    transition : 'all 0.3s ease'

} 
 


  
  // let visib = window.getComputedStyle(document.querySelector('.burger')).visibility 
  const changeHeight=()=>{ 
    if(!isOpen){
     setHeight(400)
    }else{
      setHeight(0)
    }
  }
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start my-[60px] w-full">
          
            <div className="burger" onClick={changeHeight}><Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} onClick={changeHeight}/></div>
          <div className="logo flex flex-row gap-2.5 items-end justify-center w-[47%] md:w-full">
            <Img
              src="images/img_fire.svg"
              className="h-8 w-[33px]"
              alt="fire"
            />
            <Text
              className="font-sulphurpoint mt-1.5 text-gray_50 text-left w-auto"
              variant="body1"
            >
              Realply
            </Text>
          </div>
          <div className="options flex flex-col items-center justify-start w-full" style={styleCSS}>
            <div className="flex flex-row items-start justify-start pr-[5px] py-[5px] w-full">
              <Line className="bg-deep_purple_100 h-[30px] w-[5px]" />
              <Img
                src="images/img_grid.svg"
                className="h-5 ml-[55px] mt-[5px] w-5"
                alt="grid"
              />
              <Text
                className="font-bold font-sulphurpoint ml-[15px] mt-1 text-deep_purple_100 text-left w-auto"
                variant="body4"
              >
                Dashboard
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-start justify-center mt-2.5 p-2 w-full">
              <Img
                src="images/img_car.svg"
                className="h-5 mb-1 ml-[52px] w-5"
                alt="car"
              />
              <Text
                className="font-bold font-sulphurpoint mr-[71px] mt-[3px] text-gray_50 text-left w-auto"
                variant="body4"
              >
                Messages
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-center mt-2.5 p-2.5 w-full">
              <Img
                src="images/img_mobile.svg"
                className="h-5 ml-[50px] w-5"
                alt="mobile"
              />
              <Text
                className="font-bold font-sulphurpoint mr-[73px] text-gray_50 text-left w-auto"
                variant="body4"
              >
                Calendar
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-center mt-2.5 p-2 w-full">
              <Img
                src="images/img_reply.svg"
                className="h-5 ml-[51px] w-5"
                alt="reply"
              />
              <Text
                className="font-bold font-sulphurpoint mr-[60px] text-gray_50 text-left w-auto"
                variant="body4"
              >
                Campaigns
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-center mt-[114px] p-2 w-full">
              <Img
                src="images/img_clock.svg"
                className="h-5 ml-[51px] w-5"
                alt="clock"
              />
              <Text
                className="font-bold font-sulphurpoint mr-[86px] text-gray_50 text-left w-auto"
                variant="body4"
              >
                Settings
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-center mt-2.5 p-2 w-full">
              <Img
                src="images/img_warning.svg"
                className="h-5 ml-[51px] w-5"
                alt="warning"
              />
              <Text
                className="font-bold font-sulphurpoint mr-[104px] text-gray_50 text-left w-auto"
                variant="body4"
              >
                Help?
              </Text>
            </div>
          </div>
            <div className="upgrade flex items-center justify-start mt-10 w-[77%] md:w-full">
              <div className=" border border-deep_purple_100 border-solid flex flex-col items-center justify-end p-5 rounded-[24px] w-full">
                <div className="flex items-center justify-start mt-[5px] w-auto md:w-full">
                  <Text
                    className="font-roboto text-gray_50 text-left"
                    variant="body2"
                  ></Text>
                </div>
                <Text
                  className="font-normal font-sulphurpoint leading-[13.00px] mt-2.5 not-italic text-deep_purple_100 text-left w-full"
                  variant="body6"
                >
                  You will not be billed during your free trial.To keep your
                  projects running after the trial end, upgrade to a paid
                  option.
                </Text>
                <div className="flex items-center justify-start mt-5 w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold font-roboto min-w-[146px] text-center text-gray_50 text-sm w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineDeeppurple100"
                  >
                    Upgrade
                  </Button>
                </div>
              </div>
            </div>
            <div className="logout flex flex-row gap-[15px] items-start justify-center mt-10 p-[9px] w-full">
              <Img
                src="images/img_arrowleft.svg"
                className="h-5 mb-0.5 ml-[69px] w-5"
                alt="arrowleft"
              />
              <Text
                className="font-bold font-sulphurpoint mr-[69px] mt-0.5 text-gray_50 text-left w-auto"
                variant="body4"
              >
                Log out
              </Text>
            </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
