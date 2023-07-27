import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import InputType from "@/atoms/InputType";

const About = () => {
  let schema = yup.object({
    FullName: yup.string().required("FullName Name is required"),
    FullNames_explanation: yup
      .string()
      .required("FullNames explanation is required"),
    FullNames_comments: yup.string().required("FullNames comments is required"),
  });
  const isNewFullName =
    typeof isNewFullNameProp !== "undefined" ? isNewFullNameProp : true;

  const previousData = {
    FullName: "Previous FullName",
    FullNames_comments: "Previous Comments",
    FullNames_explanation: "Previous Explanation",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      FullName: isNewFullName ? "" : previousData.FullName,
      FullNames_comments: isNewFullName ? "" : previousData.FullNames_comments,
      FullNames_explanation: isNewFullName
        ? ""
        : previousData.FullNames_explanation,
      reviewername: isNewFullName ? "" : previousData.reviewername,
    },
  });
  const onSubmit = async (data) => {
    console.log("onSubmitonSubmitonSubmitonSubmit", data);
  };
  return (
    <div>
      <div className=" md:max-w-[1400px] mt-[30rem] h-screen p-10 w-full flex-col justify-center items-center text-center  md:px-10 px-5 mx-auto relative ">
        <div className="w-full flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full mx-auto ">
            <div className="md:max-w-[1200px] flex justify-center flex-col  w-full  mt-[3rem]  items-center mx-auto p-9 rounded-md">
              <div>
                <h1 className="text-[3.5rem]  font-bold leading-[48px] mt-8">
                  My PT Hub: The Best Personal <br />
                  Training Software
                </h1>
                <p className="md:max-w-[700px] text-[#ACADB2] w-full  text-[1.1rem] font-medium mt-[3rem] ">
                  My PT Hub is an online web and mobile app that enables
                  personal trainers, coaches, and gym owners to manage their
                  clients with ease. You can create workout and nutrition plans
                  tailored to each individual client, while tracking their
                  progress and achievements.
                </p>
              </div>
            </div>

            <div className="bg-white font-semibold my-[3rem]  shadow-2xl rounded-full  text-[#0077ff] md:max-w-[600px] flex justify-center items-centermx-auto ">
              <button className="md:max-w-[600px] font-semibold py-4 px-8  text-[1rem] ">
                VIEW ALL FEATURES
              </button>
            </div>
            <div className=" md:my-20 " id="WhoWeAre">
              <div className="w-full justify-center items-center  px-5 md:max-w-[1400px] mx-auto  flex md:flex-row flex-col ">
                <div className="flex justify-center items-center ">
                  <div
                    className="md:w-[800px] flex flex-col justify-start  items-center  relative "
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #555 0, #161313 100%)",
                    }}>
                    <div className="flex   justify-center items-center p-9">
                      <div className="relative flex flex-col justify-center items-center text-white ">
                        <div className="bg-[#7ED321] font-semibold rounded-full mt-6 md:max-w-[100px]  text-[#FFFF]  flex justify-center items-cente rmx-auto ">
                          <button className="md:max-w-[100px]  px-4 py-2 text-[1rem] ">
                            New
                          </button>
                        </div>
                        <h1 className="flex text-white text-[3.3rem]  my-[2rem] font-semibold leading-[63px] ">
                          {" "}
                          My PT Hub X <br />
                          Apple Watch: <br />
                          Coaching on
                          <br /> Your Wrist
                        </h1>
                        <p className="text-[1.1rem] font-medium mt-6 capitalize">
                          Logging and tracking client workouts <br />
                          just got a whole lot better, easier, and smoother.
                        </p>
                      </div>
                      <div className="absolute right-0">
                        <img
                          src="half-watch.png"
                          alt="image"
                          className="h-[12rem] w-[8rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <img
                      src="./half-apps.png"
                      alt="image"
                      className="h-[12rem] w-[12rem]"
                    />
                  </div>
                </div>

                <div className="w-full justify-center items-center md:w-1/2 flex flex-col text-primary ">
                  <div className="flex flex-col  font-semibold justify-center items-center">
                    <div className="bg-[#7ED321] font-semibold rounded-full mt-6 md:max-w-[100px]  text-[#FFFF]  flex justify-center items-cente rmx-auto ">
                      <button className="md:max-w-[100px]  px-4 py-2 text-[1rem] ">
                        New
                      </button>
                    </div>
                    <h1 className="flex  text-[3.3rem] font-semibold leading-[48px] my-[3rem]">
                      Discover All of <br /> My PT Hub’s <br /> Integrations
                    </h1>
                    <p className="py-2 text-[18px] font-medium leading-[30px] text-[#ACADB2] ">
                      My PT Hub is a fully integrated personal trainer app with
                      Apple Health, Fitbit + Google Fit. Gain deeper insight
                      into clients’ health data, from Active Calories to Lean
                      Body Mass.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col  justify-start items-center">
              <div className="md:w-1/2">
                {" "}
                {/* <img src="./download.webp" alt="" /> */}
              </div>
              <div className="flex flex-col justify-start items-start md:w-1/2">
                <div className="flex flex-col  justify-start items-start font-semibold justify-start">
                  <h1 className="md:text-[2.5rem] text-[1rempx] text-[#1A1B1D] text-left leading-[50px] font-medium">
                    Build Your Own Custom Personal Training App
                  </h1>
                  <p className=" text-[18px] font-medium leading-[30px] text-[#ACADB2] text-start mt-5">
                    Your fitness brand deserves the best tools. That’s why we
                    pack so many features into our personal training software to
                    help you achieve your goals.
                  </p>
                  <p className=" text-[18px] font-medium leading-[30px] text-[#ACADB2] text-start mt-5">
                    Cater for both your iOS and Android customers with one
                    single app that your personal training clients can download
                    whenever, wherever.
                  </p>
                  <p className=" text-[18px] font-medium leading-[30px] text-[#ACADB2] text-start mt-5">
                    Elevate your brand and get your own custom personal training
                    app with the help of My PT Hub.
                  </p>
                  <div className="bg-[#0077FF] font-semibold text-red-600 rounded-full mt-6 text-[#FFFF] shadow-md md:max-w-[600px] flex justify-center  ">
                    <button className="md:max-w-[200px] p-4 h-[12] text-[1.1rem] w-[500px]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mx-auto my-[8rem]">
              <div className="flex flex-col justify-center items-center w-full mx-auto ">
                <h1 className="md:text-[2.5rem] text-[1rempx] text-[#1A1B1D] text-left leading-[50px] font-medium">
                  1,000's of Workout Plans & Templates
                </h1>
                <p className=" text-[18px] font-medium leading-[30px] text-[#ACADB2] text-center mt-5">
                  Create and design workouts for all. My PT Hub has an extensive
                  library of over 7,500 HD video exercises for you to make
                  custom workouts for your clients or easily edit one of our
                  templates.
                </p>
                <p className=" text-[18px] font-medium leading-[30px] text-[#ACADB2] text-center mt-5">
                  Get started with our workout plan features.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="waitlist rounded-3xl">
          <div
            className="
              
          container
          min-h-screen
          mx-auto
          px-8
          flex flex-col
          items-center
          justify-center
    
          lg:flex-row lg:px-0 lg:space-x-8 
          xl:space-x-24
      ">
            <div className="relative w-full max-w-full md:px-24 ">
              <div
                className="
                  text-black
                  w-full
                  bg-white
                  flex flex-col
                  items-center
                  px-8
                  py-10
                  rounded-2xl
                  z-10
                  shadow-2xl shadow-black/10
                  md:px-[9rem]
                  lg:py-16
                  selection:bg-black selection:text-white
              ">
                <h3 className="font-bold text-3xl mb-10 lg:text-4xl">
                  Get early access
                </h3>

                <form
                  className="text-[16px] font-semibold leading-[30px]"
                  onSubmit={onSubmit}>
                  <div className="grid grid-cols-2 md:gap-5 gap-2 mt-5 t">
                    <InputType
                      id="FullName"
                      name="FullName"
                      type="text"
                      placeholder="FullName"
                      register={register}
                      error={errors.FullName}
                    />

                    <InputType
                      id="FullNames_comments"
                      name="FullNames_comments"
                      type="text"
                      placeholder="FullNames Comments"
                      register={register}
                      error={errors.FullNames_comments}
                    />
                  </div>
                  <div className="grid grid-cols-2 md:gap-5 gap-2 mt-5 t">
                    <InputType
                      id="reviewername"
                      name="reviewername"
                      type="text"
                      placeholder="Reviewer Name"
                      register={register}
                      error={errors.reviewername}
                    />
                    <InputType
                      id="reviewername"
                      name="reviewername"
                      type="text"
                      placeholder="Reviewer Name"
                      register={register}
                      error={errors.reviewername}
                    />
                  </div>

                  <div className="mt-5 flex mx-auto justify-center items-center">
                    <input
                      type="submit"
                      className="md:max-w-[200px] cursor-pointer flex justify-center items-center h-12 w-full text-center border-[1px] bg-[rgba(0, 0, 0, 0.05)] py-[2px] px-[5px] rounded-[15px] font-semibold text-[16px] leading-[22px] border-solid border-black"
                      style={{
                        backdropFilter: "blur(5px)",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                      }}
                    />
                  </div>
                </form>
                <p className="text-slate-500">
                  We'll get in touch with you
                  <span className="font-bold mx-2">soon</span>.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
