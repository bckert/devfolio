
import { FunctionComponent } from "react";

const NavBar: FunctionComponent = () => {
 

    return (
      <>
{/** lägg till fixed om navbaren ska vara fastklistrad */}
<nav className="bg-green-bg dark:bg-gray-900 w-full min-w-700 z-20 top-0 left-0 dark:border-gray-600 mb-10">
  <div className="max-w-screen grid justify-items-end p-4">

  <div className="justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 text-2xl border rounded-lg md:flex-row  md:mt-0 md:border-0 md:bg-green-bg dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 mx-6 text-white rounded hover:text-black" aria-current="page">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 mx-6 text-white rounded hover:text-black">Portfolio</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 mx-6 text-white rounded hover:text-black">Contact</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 mx-6 text-white rounded hover:text-black ">CV</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


</>
  );
};

export default NavBar;
