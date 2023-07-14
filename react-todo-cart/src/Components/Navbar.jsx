import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar border-2 sticky top-0 shadow-lg bg-gray-300 z-10">
        <div></div>
        <div className="navbar-center hidden lg:flex flex-1 ml-60">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/">
                <button className="btn btn-outline btn-ghost w-28 ">
                  Home
                </button>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/about">
                <button className="btn btn-outline btn-ghost w-28">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="btn btn-outline btn-ghost w-28">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <button className="btn btn-outline btn-ghost w-28">Todo</button>
              </Link>
            </li>
            <li>
              <Link to="/shopping">
                <button className="btn btn-outline btn-ghost w-28">
                  Shopping
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none mr-60">
          <div className="dropdown dropdown-end">
            <Link to="/cart">
              <label
                tabIndex={0}
                className="btn btn-circle btn-outline btn-ghost  border-2 "
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
            </Link>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-ghost btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
