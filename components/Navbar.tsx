"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CircleX } from "lucide-react";

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
          <Image src="/logo.png" alt="apsu" height={32} width={87} />

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
              {menuOpen ? (
                <FaRegCircleXmark className="size-8" />
              ) : (
                <HiOutlineMenuAlt3 className="size-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 w-full bg-blackColor/20 backdrop-blur-xs h-screen space-y-3 z-50 transform transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="w-full absolute top-0 p-3 right-0 h-full bg-background md:max-w-[320px] md:rounded-l-2xl">
          <div className="border bg-white h-full rounded-2xl px-2 py-3 space-y-15">
            <div className="flex w-full justify-between items-center pb-2 border-b-2 border-[#CDDCD3]">
              <Image src="/logo.png" alt="apsu" height={32} width={87} />
              <button
                aria-label="close-menu"
                className="absolute top-4 right-4 z-10 "
                onClick={() => setMenuOpen(false)}
              >
                <CircleX className="size-7 text-secondary" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-xl font-medium text-secondary gap-5">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "",
                    pathname === item.path ? "text-[#00774D]" : "",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center justify-between">
              <Button className="text-lg w-full">Get started</Button>
              <Button variant="outline" className="text-lg w-full">
                Login
              </Button>
                            <Button variant="outline" className="text-lg w-full  text-red-600 border-red-600">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
