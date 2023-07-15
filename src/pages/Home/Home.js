import React, { useState, useEffect } from "react";

const Home = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <div
        className="   flex mx-auto justify-center flex-col items-center"
        id="Home">
        <div className=" hero rounded-br-[27rem]  w-full flex-col justify-center items-center text-center  mx-auto relative ">
          <div
            className={`flex w-full justify-between items-center py-4 gradient-header text-[#FFFF] md:fixed ${
              scrollActive ? "md:z-[1000]" : ""
            }`}>
            <div className="ml-8">MyPThub</div>
            <button className="border-[FFFF] border-solid border-[1px] py-[15px]  px-[20px]  rounded-[15px] md:flex hidden text-[18px] font-medium leading-[22px] cursor-pointer w-[152px] h-[53px] text-center mx-8">
              Get Started
            </button>
          </div>
          <div className="md:max-w-[1400px] w-full flex flex-col justify-center  items-center text-[#FFFF] mt-[6rem]  mx-auto mb-[8rem] py-10 ">
            <div className="flex flex-col justify-center items-center w-full mx-auto ">
              <h1 className="text-[3.5rem]  font-bold leading-[48px] mt-8">
                The All-In-One Personal Training <br />
                Software &amp; App
              </h1>
              <p className="text-[1.1rem] font-medium mt-6">
                Your personal training business deserves the best software and
                app.
              </p>
              <p className="text-[1.1rem] font-medium mt-6">
                Start a 30-day FREE trial today.
              </p>
              <div className="bg-[#FFFF] font-semibold text-red-600 rounded-full mt-6 text-[#0077ff] md:max-w-[600px] flex justify-center items-centermx-auto ">
                <button className="md:max-w-[200px] p-4 h-[12] text-[1.1rem] w-[500px]">
                  Get Started
                </button>
              </div>
              <p className="text-[1.1rem] font-medium mt-6 capitalize">
                No credit card required. Cancel Anytime.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 top-[19rem]">
              <img
                src="https://www.mypthub.net/wp-content/uploads/watch-home-hero.png.webp"
                className="h-[150vh] w-auto  -ml-20"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
