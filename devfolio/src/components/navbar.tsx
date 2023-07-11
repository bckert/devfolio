import Image from "next/image";
import { FunctionComponent } from "react";

const NavBar: FunctionComponent = () => {
  return (
    <>
      {/** lägg till fixed om navbaren ska vara fastklistrad */}
      <nav className="transparent fixed left-0 top-0 z-20 mx-2 mb-10 w-full sm:visible sm:static sm:bg-green-bg">
        <div className="max-w-screen grid justify-items-center p-2 sm:justify-items-end">
          {/* <div
            className="hidden w-full justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          > */}
          <ul className="mt-2 flex flex-row p-2 text-xl md:flex-row md:border-0 md:bg-green-bg md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="mx-3 block rounded py-2 pl-3 pr-4 text-white hover:text-black"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mx-3 block rounded py-2 pl-3 pr-4 text-white hover:text-black"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mx-3 block rounded py-2 pl-3 pr-4 text-white hover:text-black "
              >
                CV
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default NavBar;
