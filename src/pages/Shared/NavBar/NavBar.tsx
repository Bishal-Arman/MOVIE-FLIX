import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.avif";
import "./NavBar.css";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const { watchList } = useSelector((state: RootState) => state.watchList);
  console.log(watchList);

  const NavOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-30  menubar-section ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden menu-icon">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {NavOptions}
          </ul>
        </div>
        <div className="logo">
          <img
            data-aos="zoom-out-"
            className="w-[50px] rounded-full shadow-[5px_5px_0px_0px_rgba(109,40,217)] hidden lg:block "
            src={logo}
            alt=""
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <a className=" btn btn-ghost text-white text-xl ms-2  font-thin">
            <span className="text-yellow-400">MOVIE</span>{" "}
            <span className="text-green-400">~</span>
            <span className="text-yellow-400">FLIX</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
      </div>
      <div className="navbar-end text-yellow-400 text-xl me-10 hover:text-green-400">
        <button onClick={showDrawer}>
          {" "}
          WatchList {watchList.length ? watchList.length : ""}
        </button>

        <Drawer
          title="WATCHLIST DETAILS"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Link to="/watchList">
            <Button>My watchList</Button>
          </Link>
          <Link to="">
            <Button>OK</Button>
          </Link>
          <Link to="">
            <Button>NO</Button>
          </Link>
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
