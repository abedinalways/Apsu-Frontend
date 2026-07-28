"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CircleX, ChevronDown, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import UserIcon from "./icons/UserIcon";

const menuItems = [
  { name: "Weight Loss", path: "/weight-loss" },
  { name: "Birth Control", path: "/birth-control" },
  { name: "Sleep", path: "/sleep" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    setProfileDropdownOpen(false);
    router.push('/');
    router.refresh();
  };

  return (
    <header>
      {/* navbar */}

      <div
        className={`z-998 w-full px-4 sm:px-5 xl:px-0 fixed left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out  ${scrolled ? 'top-4 sm:top-5 lg:top-7.5' : pathname === '/' ? 'top-4 sm:top-5 lg:top-15' : 'top-4 sm:top-5 lg:top-8'}`}
      >
        <div className="flex w-full justify-between xl:grid xl:grid-cols-4 items-center container mx-auto h-14 sm:h-15 bg-bgColor rounded-full px-3  sm:px-4 md:pr-1.5 md:pl-6 shadow-[0_4px_24.5px_0_rgba(0,0,0,0.09)]">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="apsu"
              height={32}
              width={87}
              className="h-7 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:col-span-2 justify-center lg:flex space-x-6 text-base">
            {menuItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  'relative text-lg transition-colors duration-300 hover:text-[#00774d]',
                  pathname === item.path
                    ? 'text-[#00774d] font-medium'
                    : 'text-black',
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Language, Auth Buttons or Profile */}
          <div className="md:flex justify-end items-center gap-4">
            {isAuthenticated && user ? (
              /* Logged In: Show Profile Dropdown */
              <div className="hidden md:block relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2  text-white rounded-full aspect-square pl-1 pr-3 py-1 "
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#142C1E] flex items-center justify-center font-semibold text-sm">
                    {/* {user.email.charAt(0).toUpperCase()} */}
                    <UserIcon />
                  </div>
                  {/* <span className="text-sm font-medium max-w-[150px] truncate">
                    {user.email}
                  </span> */}
                  {/* <ChevronDown className="w-4 h-4" /> */}
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900 truncate py-2">
                          {user.email}
                        </p>
                      </div>
                      <Link
                        href="/profile"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#ecf9f1] transition-colors"
                      >
                        <span className="text-xs md:text-sm  font-normal text-gray-700">
                          My Account
                        </span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#ecf9f1] transition-colors text-left"
                      >
                        <span className="text-xs md:text-sm font-normal text-[#3b3b3c]">
                          Log Out
                        </span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Logged Out: Show Auth Buttons */
              <div className="hidden md:flex justify-end gap-4 items-center ">
                <Button className="text-lg">Get started</Button>
                <Link href="/login">
                  <Button variant="outline" className="text-lg">
                    Login
                  </Button>
                </Link>
              </div>
            )}

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
          'lg:hidden fixed top-0 right-0 w-full bg-blackColor/20 backdrop-blur-xs h-screen space-y-3  transform transition-transform duration-300 ease-in-out z-999',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="w-full absolute top-0 p-3 right-0 h-full bg-background md:max-w-[320px] md:rounded-l-2xl">
          <div className="border bg-white h-full rounded-2xl px-2 py-3 space-y-15">
            <div className="flex w-full justify-between items-center pb-2 border-b-2 border-[#CDDCD3]">
              <Image src="/logo.png" alt="apsu" height={32} width={87} />
              <button
                aria-label="close-menu"
                className=" z-10 "
                onClick={() => setMenuOpen(false)}
              >
                <CircleX className="size-8 text-secondary" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-xl font-medium text-secondary gap-5">
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'transition-colors duration-300 hover:text-[#00774d]',
                    pathname === item.path
                      ? 'text-[#00774d] font-medium'
                      : 'text-secondary',
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center justify-between">
              {isAuthenticated && user ? (
                /* Logged In: Show Profile Info */
                <>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                      {user.email}
                    </p>
                  </div>
                  <Link href="/profile" className="w-full">
                    <Button className="text-lg w-full">My Account</Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="text-lg w-full text-red-600 border-red-600"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                /* Logged Out: Show Auth Buttons */
                <>
                  <Button className="text-lg w-full">Get started</Button>
                  <Link href="/login" className="w-full">
                    <Button variant="outline" className="text-lg w-full">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
