"use client"

import { IoMdArrowDropdown, IoMdNotifications, IoMdSearch  } from "react-icons/io";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img from '/public/flixfilmes-logo.png'
import avatar from '/public/user-standard-avatar.png'
import './styles.scss'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link href="/" className="link logo-container">
        <Image
            src={img}
            alt="Flixfilmes logo"
            className="logo"
            width={150}
            height={120}
          />
          </Link>
          <Link href="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link href="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <IoMdSearch className="icon" />
          <span>KID</span>
          <IoMdNotifications className="icon" />
          <Image
            src={avatar}
            alt="Flixfilmes logo"
            width={100}
            height={100}
          />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;