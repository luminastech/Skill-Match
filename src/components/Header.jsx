import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <span className="sr-only">JobFinder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NavLink
            to="/browse-jobs"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Browse Jobs
          </NavLink>
          <NavLink
            to="/companies"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Companies
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Login
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
