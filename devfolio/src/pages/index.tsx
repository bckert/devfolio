/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

import Image from "next/image";
//import sunflower from "../../public/images/sunflower.png";
import { DM_Serif_Display } from "next/font/google";
import NavBar from "component/components/navbar";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const dm = DM_Serif_Display({
  variable: "--font-dm",
  subsets: ["latin-ext"],
  weight: "400",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Julia Böckert</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <main
        className={`${dm.variable} min-w-325 h-screen w-screen overflow-scroll bg-green-bg font-sans`}
      >
        <div className="grid-row-4 mt-16 grid max-w-full justify-center">
          <span className="row-span-1 mb-5 w-screen text-center font-sans text-7xl text-white md:text-[120px] lg:mb-8 lg:text-[140px]">
            Julia Böckert
          </span>
          <span className=" row-span-1 w-screen px-10 text-center font-sans text-xl text-white sm:px-0 md:text-3xl lg:text-[40px]">
            M. Sc student in Interaction Design & Technologies
          </span>
          <div className="row-span-1 my-10 flex justify-center">
            <div className="grid grid-rows-2 sm:flex sm:flex-row">
              <a href="https://github.com/bckert">
                <button
                  className="mx-2 mb-6 h-12 w-44 rounded-3xl bg-black pl-5 text-left text-xl text-white drop-shadow-xl sm:mb-2"
                  type="button"
                >
                  GitHub
                  <i className="fa-brands fa-github ml-14"></i>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/julia-bockert/">
                <button
                  className="mx-2 mb-6 h-12 w-44 rounded-3xl bg-black pl-5 text-left text-xl text-white drop-shadow-xl sm:mb-2"
                  type="button"
                >
                  LinkedIn
                  <i className="fa-brands fa-linkedin ml-10"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="row-span-1 flex justify-center sm:mt-20">
            <Image
              src="/images/sunflower.png"
              alt="sunflower"
              width={200}
              height={100}
              className=""
            />
          </div>
        </div>

        {/* <div className="flex-row-3 ml-20 flex flex-wrap justify-center">
          {/* <NavBar></NavBar> */}
        {/* <div className="row-span-1 grid grid-cols-2 justify-start">
            <span className=" mb-30 ml-20 w-screen text-left font-sans text-[150px] text-white">
              {" "}
              Julia{" "}
            </span>
            <div>M. Sc student in Interaction Design</div>
          </div>
          <div className="row-span-1 grid grid-cols-2 justify-start">
            <span className=" mb-30 ml-20 mt-5 w-screen text-left font-sans text-[150px] text-white">
              {" "}
              Böckert{" "}
            </span>
            <div className="col-span-1 flex items-center">
              <div className="mt-10">
                <button className="mb-15 mx-2 h-20 w-60 rounded-3xl border-4 border-black bg-white text-2xl text-black drop-shadow-xl">
                  About Me
                </button>
                <button className="mb-15 mx-2 h-20 w-60 rounded-3xl bg-black text-2xl text-white drop-shadow-xl">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="row-span-1"></div>
        </div> */}
      </main>
    </>
  );
};

export default Home;
