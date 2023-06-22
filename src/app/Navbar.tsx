"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuBars from "~/icons/MenuBars";
import useOnClickOutside from "../components/ClickOutsideHook";
import { Raleway } from "next/font/google";
import { FaceBookIcon, InstagramIcon, TicTocIcon } from "~/icons/BrandIcons";

const raleway = Raleway({ subsets: ["latin"] });

export default function Navbar() {
  const [menuShowing, setMenuShowing] = useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([menuRef, closeRef], () => {
    setMenuShowing(false);
  });

  useEffect(() => {
    const onScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuShowing) {
      document.getElementById("LineA")?.classList.add("LineA");
      document.getElementById("LineB")?.classList.add("LineB");
    } else {
      document.getElementById("LineA")?.classList.remove("LineA");
      document.getElementById("LineB")?.classList.remove("LineB");
    }
  }, [menuShowing]);

  const menuToggle = () => {
    setMenuShowing(!menuShowing);
  };

  return (
    <>
      <nav className="fixed z-10 flex w-screen">
        <div className={`mx-4 my-2 flex flex-1 py-2`}>
          <Link href={"/"} className="flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"/Logos/Transparent - logo no bar.png"}
              alt="logo"
              height={scrollHeight <= 100 ? 47 : 38}
              width={scrollHeight <= 100 ? 52 : 42}
              className="transform transition-all duration-500 ease-in-out"
            />
            <div
              className={`${
                scrollHeight <= 40 ? "fade-in" : "fade-out opacity-0"
              } mx-1 h-full border-r border-orange-500`}
            />
            <div
              className={`${raleway.className} ${
                scrollHeight <= 40 ? "fade-in" : "fade-out opacity-0"
              }  my-auto flex transform pl-2 text-3xl font-light tracking-widest text-orange-500 transition-all duration-500 ease-in-out`}
            >
              Upper East Clinicians
            </div>
          </Link>
        </div>
        <div
          className={`${
            menuShowing ? "top-5 -mr-[6px]" : "top-4"
          } absolute right-4 z-50 transition-all duration-300 ease-in-out`}
        >
          <button onClick={menuToggle} className={"z-50"} ref={closeRef}>
            <MenuBars stroke={"#fb923c"} />
          </button>
        </div>
        <nav ref={menuRef}>{dropdown(menuShowing)}</nav>
      </nav>
    </>
  );
}

const dropdown = (menuShowing: boolean) => {
  return (
    <>
      <div
        className={`${
          menuShowing ? "navShadow right-0" : "-right-[100%]"
        } fixed z-20 h-screen border-l-2 border-orange-200 bg-zinc-50 p-4 text-black transition-all duration-500 ease-in-out`}
      >
        <div className="px-10 text-center text-3xl font-thin italic tracking-wider">
          Navigation
        </div>
        <ul className="flex flex-col px-8 py-8 align-middle tracking-wide md:px-12">
          <a
            href={"#contact"}
            className="hover-underline-animation mx-auto my-8 w-fit px-4 text-lg tracking-wider"
          >
            Contact Us
          </a>
          <Link
            href={"/pricing"}
            className="hover-underline-animation mx-auto my-8 w-fit px-4 text-lg tracking-wider"
          >
            Pricing
          </Link>
          <Link
            href={"/login"}
            className="hover-underline-animation mx-auto my-8 w-fit px-4 text-lg tracking-wider"
          >
            Login
          </Link>
        </ul>
        <div className="absolute bottom-8 w-full">
          <ul className="icons flex w-full justify-center py-4">
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="hvr-grow-rotate-left rounded-full border-zinc-800 dark:border-zinc-300"
              >
                <span className="m-auto">
                  <FaceBookIcon height={28} width={28} />
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="hvr-grow-rotate rounded-full border-zinc-800 dark:border-zinc-300"
              >
                <span className="m-auto">
                  <InstagramIcon height={28} width={28} />
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="hvr-grow-rotate rounded-full border-zinc-300"
              >
                <span className="m-auto">
                  <TicTocIcon height={28} width={28} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
