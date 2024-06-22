const NavbarLine = () => {
  return (
    //Header

    <nav className="bg-blue-300 text-black px-4 py-2 md:px-20 md:py-5 flex flex-wrap items-center justify-between sticky top-0 ">
      <div className="flex items-center ">
        <h2 className="font-bold text-4xl m-10px md:text-3xl hidden md:flex">
          <a href="/home">
            GAMSKY<sup>Corp</sup>
          </a>
        </h2>
      </div>

      {/* <div className="block md:hidden">For small screen create toggle button</div> */}
      <button className="block md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <ul className="flex flex-wrap gap-4 font-bold hidden md:flex space-x-4 font-bold">
        <li>
          <a href="/about" className="text-black hover:text-blue-900">
            About Us
          </a>
        </li>
        <li>
          <a href="/service" className="text-black hover:text-blue-900">
            Service
          </a>
        </li>
        <li>
          <a href="/teams" className="text-black hover:text-blue-900">
            Teams
          </a>
        </li>
      </ul>

      {/* Login and Signup links */}
      <ul className="flex gap-4 font-bold hidden md:flex">
        <a href="/login" className="text-black hover:text-blue-900">
          Login
        </a>
        <a href="/signup" className="text-black hover:text-blue-900">
          Sign up
        </a>
      </ul>
    </nav>
  );
};

export default NavbarLine;
