"use client";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Transition from "./Transition";

export default function Navigation() {
  const [isRouting, setIsRouting] = useState(false);

  const path = usePathname();
  const [isActive, setIsActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <>
      <div className="absolute hidden sm:flex  z-[50] -bottom-20 w-1/2 md:w-1/4 max-h-[150px] rounded-full justify-between items-center border border-white left-1/5 pb-7">
        <div className="ml-10 flex flex-col sm:flex-row gap-4 items-center w-[80%]">
          {isRouting && <Transition />}
          {navLinks.map((nav) => (
            <Link key={nav.name} href={nav.link} className="mb-16 min-w-[25%]">
              <nav.icon
                className={`w-[24px] mt-5 h-[24px] ${
                  path === nav.name ? "text-purple-800" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`flex  absolute  z-[50] sm:hidden gap-4 items-center p-8 ${
          path === "/my-skills" || path === "/contact-me"
            ? "flex-row left-[8%] xxs:left-0 gap-8 xxs:gap-4 bottom-0"
            : "flex-col sm:flex-row -bottom-10"
        }`}
      >
        {isRouting && <Transition />}
        {navLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className=" min-w-[25%]">
            <nav.icon
              className={`w-[24px] mt-5 h-[24px] ${
                path === nav.name ? "text-purple-800" : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
