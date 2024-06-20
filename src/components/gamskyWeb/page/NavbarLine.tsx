const NavbarLine = () => {
  return (
    //Header
    <nav className="bg-blue-300 text-black px-4 py-2 md:px-20 md:py-5 flex flex-wrap items-center justify-between sticky top-0">
      <div className="flex items-center">
        <h2 className="font-bold text-4xl m-10px">
          <a href="/home">
            GAMSKY<sup>Corp</sup>
          </a>
        </h2>
      </div>

      {/* <div className="block md:hidden">For small screen create toggle button</div> */}

      <ul className="flex flex-wrap gap-4 font-bold md:flex-row md:gap-4">
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
      <ul className="flex gap-4 font-bold md:pl-3">
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
