import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";

const Header = (props) => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const onMoboClick = () => {
    props.onMoboClicks();
  };
  return (
    <div>
      {" "}
      <div
        className={
          "md:fixed md:top-0 md:w-full md:transition-all " +
          (props.scrollActive
            ? "md:z-[1000] md:shadow-md bg-white "
            : "bg-white")
        }>
        <div className="md:max-w-[1400px] w-full bg-transperent md:px-10 px-5 mx-auto -z-10 text-black">
          <div className="flex  justify-between  md:items-center  py-5">
            <div className="flex justify-start items-start">Mypthub</div>
            <div className=" md:flex hidden ">
              <div className=" text-[18px] font-medium leading-[22px]  cursor-pointer">
                {/* <LinkScroll
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink("Home");
                  }}>
                  Home
                </LinkScroll> */}
              </div>
            </div>
            <div className="text-[18px] font-medium leading-[22px] text-black cursor-pointer ">
              <button
                className="border-black border-solid border-[1px] py-[15px]  px-[20px]  rounded-[15px] md:flex hidden text-[18px] font-medium leading-[22px] text-black cursor-pointer w-[152px] h-[53px] text-center"
                onClick={props.openModal}>
                Get Started
              </button>
              <div className="md:hidden block " onClick={onMoboClick}>
                {props.showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div>
            </div>

            <div
              className={
                props.showNav
                  ? "fixed top-[4rem] left-0 bg-[#1F0048] w-full ease-in-out duration-500 z-[1000]"
                  : "fixed top-[-100%]"
              }>
              <ul className="md:hidden flex text-white p-5  flex-col mx-auto justify-center items-center">
                <li className="my-2 leading-[30px] text-[18px] font-semibold ">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Home"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Home");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Home"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Home
                  </LinkScroll>
                </li>
                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("WhoWeAre");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "WhoWeAre"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    About Us
                  </LinkScroll>
                </li>
                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Service"
                    offset={-100}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Service");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Service"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Services
                  </LinkScroll>
                </li>
                <li
                  className="my-2 le
            ading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Client"
                    offset={-100}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Client");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Client"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Testimonials
                  </LinkScroll>
                </li>

                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Contact");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Contact"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Contact Us
                  </LinkScroll>
                </li>
                <li>
                  {" "}
                  <button
                    className="font-bold border-solid border-[1px] py-2 my-2 px-6 rounded-md border-white"
                    onClick={props.openModal}>
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
