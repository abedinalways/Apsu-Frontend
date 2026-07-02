"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaRegCircleXmark } from "react-icons/fa6";

const menuItems = [
  { name: "Weight Loss", path: "/weight-loss" },
  { name: "Birth Control", path: "/birth-control" },
  { name: "Sleep", path: "/sleep" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* navbar */}

      <div
        className={` w-full px-5 xl:px-0 fixed left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out  ${scrolled ? "top-5 lg:top-7.5" : "top-5 lg:top-15"}`}
      >
        <div className="flex w-full justify-between xl:grid xl:grid-cols-4 items-center max-w-330 mx-auto h-15 bg-background rounded-full px-3 md:pr-1.5 md:pl-6 shadow-[0_4px_24.5px_0_rgba(0,0,0,0.09)]">
          {/* Left: Logo */}
          <Image src="/logo.png" alt="apsu" height={32} width={87}/>

          {/* Desktop Menu */}
          <nav className="hidden  xl:col-span-2 justify-center lg:flex space-x-6 text-base">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "  text-lg transition",
                  pathname === item.path ? "text-secondaryColor" : "text-black",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Language, Auth Buttons */}
          <div className=" md:flex justify-end items-center gap-4">
            <div className="hidden md:flex justify-end gap-4 items-center ">
              <Button className="text-lg">Get started</Button>
              <Button variant="outline" className="text-lg">
                Login
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black text-2xl flex items-center lg:hidden"
            >
              {menuOpen ? <FaRegCircleXmark className="size-8" /> : < HiOutlineMenuAlt3 className="size-8"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 w-full bg-blackColor/20 backdrop-blur-xs h-screen    space-y-3 z-50 transform transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="w-full  absolute top-0 p-4 right-0 h-full bg-primaryColor md:max-w-[320px]">
          <div className="flex w-full justify-between items-center mb-2">
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              LOGO
            </h2>
            <button
              aria-label="close-menu"
              className="absolute top-4 right-4 z-10 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <HiX className="text-2xl text-whiteColor" />
            </button>
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "block text-base py-2",
                pathname === item.path ? "text-secondaryColor" : "text-white",
              )}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center justify-between">
            <Link
              href="/login"
              className="text-white text-base"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/registration"
              className="bg-secondaryColor inline-block text-blackColor font-medium cursor-pointer text-base px-4 py-2 rounded-[8px]"
              onClick={() => setMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
