/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

import Image from "next/image";
//import sunflower from "../../public/images/sunflower.png";
import { DM_Serif_Display } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const dm = DM_Serif_Display({
  variable: "--font-dm",
  subsets: ["latin-ext"],
  weight: "400",
});

const Home: NextPage = () => {
  return (
    <>

 
  <div className="bg-white lg:w-screen lg:h-screen md:w-screen md-h-screen w-full h-screen overflow-scroll">
    <object data="JB-portfolio.pdf"  className="w-full h-full overflow-scroll"> </object>
    
 </div>
    </>
  );
};

export default Home;
