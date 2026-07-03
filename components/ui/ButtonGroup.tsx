import React from "react";
import { Button } from "./button";
import { FaArrowRight } from "react-icons/fa6";

const ButtonGroup = ({ children }: { children: React.ReactNode }) => {
  return <Button className="h-14 lg:text-lg pl-8 pr-2 group">{children} <span className="size-8 rounded-full bg-white text-secondary flex items-center justify-center"><FaArrowRight className="group-hover:rotate-45"/></span></Button>;
};

export default ButtonGroup;
