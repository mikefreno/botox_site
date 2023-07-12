"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuBars from "~/icons/MenuBars";
import useOnClickOutside from "../components/ClickOutsideHook";
import { Raleway } from "next/font/google";
import { FaceBookIcon, InstagramIcon, TicTocIcon } from "~/icons/BrandIcons";
import { usePathname } from "next/navigation";

const raleway = Raleway({ subsets: ["latin"] });

export default function Navbar() {
  const [menuShowing, setMenuShowing] = useState<boolean>(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState<boolean>(true);
  const pathname = usePathname();

  useOnClickOutside([menuRef, closeRef], () => {
    setMenuShowing(false);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // triggers when observer comes into view
        if (entry) setAtTop(entry.isIntersecting);
      },
      {
        root: null, // observing intersections with respect to the viewport
        threshold: 0.1, // callback will execute when 10% of the target is visible
      }
    );

    if (anchorRef.current) {
      observer.observe(anchorRef.current);
    }
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
      <div ref={anchorRef} className="absolute h-24" />
      <div className="fixed z-[100]">
        <div className="flex w-screen px-4">
          <div className={` my-2 flex flex-1 py-2`}>
            <Link href={"/"} className="flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"/Logos/Transparent - logo no bar.png"}
                alt="logo"
                height={atTop ? 47 : 38}
                width={atTop ? 52 : 42}
                className="transform transition-all duration-500 ease-in-out"
              />
              <div
                className={`${
                  atTop ? "fade-in" : "fade-out opacity-0"
                } mx-1 h-full border-r border-orange-500`}
              />
              <div
                className={`${raleway.className} ${
                  atTop ? "fade-in" : "fade-out opacity-0"
                }  my-auto flex transform pl-2 text-xl font-light tracking-wide text-orange-500 transition-all duration-500 ease-in-out md:text-3xl md:tracking-widest`}
              >
                Upper East Clinicians
              </div>
            </Link>
          </div>
          <button
            onClick={menuToggle}
            className={"fixed right-4 top-6 z-50 my-auto"}
            ref={closeRef}
          >
            <MenuBars stroke={"#fb923c"} />
          </button>
        </div>
        <nav ref={menuRef}>{menu(menuShowing, pathname)}</nav>
      </div>
    </>
  );
}

const menu = (menuShowing: boolean, pathname: string | null) => {
  return (
    <>
      <div
        className={`${
          menuShowing ? "navShadow right-0" : "-right-[100%]"
        } fixed top-0 z-20 h-[100dvh] border-l-2 border-orange-200 bg-zinc-800 p-4 text-white transition-all duration-500 ease-in-out`}
      >
        <div className="px-10 pt-[6px] text-center text-3xl font-thin italic tracking-wider">
          Navigation
        </div>
        <ul className="flex flex-col px-8 py-8 align-middle tracking-wide md:px-12">
          <a
            href={pathname == "/" ? "#contact" : "/contact"}
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
            className="hover-underline-animation mx-auto my-8 flex w-fit px-4 text-lg tracking-wider"
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
