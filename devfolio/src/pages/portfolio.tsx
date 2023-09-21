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
      <main className={`${dm.variable} min-w-325 h-screen w-screen overflow-scroll bg-green-bg font-sans`}>
        <div className="mt-16 grid max-w-full ml-16 justify-left">
             <span className="mb-5 text-left font-sans text-5xl text-white md:text-[60px] lg:mb-8 lg:text-[100px]">
            Portfolio
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4  sm:flex sm:flex-row sm:my-16">
          <div className="col-span-1 w-1/2 h-1/2 bg-white text-black mx-10 lg:mx-8 sm:mx-2"> HEJ </div>
          <div className="col-span-1 w-1/2 h-1/2 bg-white text-black mx-10 lg:mx-8 sm:mx-2"> HEJ </div>
        </div>
      </main>
    </>
  );
};

export default Home;
