/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import UserIcon from "~/icons/UserIcon";

export default function BodySection() {
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [secondLoad, setSecondLoad] = useState<boolean>(false);

  const [loadIn, setLoadIn] = useState<boolean>(false);

  const anchorRefOne = useRef<HTMLDivElement>(null);
  const anchorRefTwo = useRef<HTMLDivElement>(null);

  const anchorRefThree = useRef<HTMLDivElement>(null);
  const fullDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // triggers when observer comes into view
        if (entry) setFirstLoad(entry.isIntersecting);
      },
      {
        root: null, // observing intersections with respect to the viewport
        threshold: 0.1, // callback will execute when 10% of the target is visible
      }
    );
    const observerTwo = new IntersectionObserver(
      ([entry]) => {
        // triggers when observer comes into view

        if (entry) setSecondLoad(entry.isIntersecting);
      },
      {
        root: null, // observing intersections with respect to the viewport
        threshold: 0.1, // callback will execute when 10% of the target is visible
      }
    );
    const observerThree = new IntersectionObserver(
      ([entry]) => {
        // triggers when observer comes into view
        if (entry) setLoadIn(entry.isIntersecting);
      },
      {
        root: null, // observing intersections with respect to the viewport
        threshold: 0.1, // callback will execute when 10% of the target is visible
      }
    );

    if (anchorRefOne.current) {
      observer.observe(anchorRefOne.current);
    }
    if (anchorRefTwo.current) {
      observerTwo.observe(anchorRefTwo.current);
    }

    if (anchorRefThree.current) {
      observerThree.observe(anchorRefThree.current);
    }
  }, []);

  return (
    <div className="max-w-[100vw]">
      <div className="topShadow relative z-50 flex flex-col justify-evenly bg-zinc-50">
        <div ref={anchorRefOne} className="absolute mt-[-10vh] h-[30vh]"></div>
        <div ref={anchorRefTwo} className="absolute mt-[45vh] h-[60vh]"></div>
        <div className="absolute z-50 flex h-screen w-screen justify-center">
          <div className="flex flex-col justify-evenly">
            <div className="text-shadow flex justify-center text-center text-2xl text-white md:text-4xl">
              An uncompromising experience
            </div>
            <div className="flex justify-center">
              <Link
                href={"/testimonials"}
                className="drawn-border text-shadow my-auto w-fit rounded-md px-6 py-2 text-xl text-white underline underline-offset-4 md:text-3xl"
              >
                <div className="text-center text-lg">See:</div>
                Testimonials
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-evenly">
            <Image
              src={"/Stock/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"}
              alt={"jake-nackos"}
              height={320}
              width={320}
              className={`${
                firstLoad
                  ? "fade-in-long"
                  : "fade-out translate-x-full translate-y-full opacity-0"
              } z-0 transition-all duration-1000 ease-in-out`}
            />

            <Image
              src={"/Stock/michael-dam-mEZ3PoFGs_k-unsplash.jpg"}
              alt={"michael-dam"}
              height={330}
              width={330}
              className={`${
                secondLoad
                  ? "fade-in-long"
                  : "fade-out -translate-x-full opacity-0"
              } z-0 transition-all duration-1000 ease-in-out`}
            />
          </div>
          <div className="hidden flex-col justify-evenly md:flex">
            <Image
              src={"/Stock/joel-mott-LaK153ghdig-unsplash.jpg"}
              alt={"joel-mott"}
              height={320}
              width={320}
              className={`${
                firstLoad
                  ? "fade-in-long"
                  : "fade-out -translate-x-full translate-y-full opacity-0"
              } z-0 transition-all duration-1000 ease-in-out`}
            />
            <Image
              src={"/Stock/afif-ramdhasuma-D1z3dwROc44-unsplash.jpg"}
              alt={"afif-ramdhasuma"}
              height={320}
              width={320}
              className={`${
                secondLoad ? "fade-in-long" : "fade-out opacity-0"
              } z-0 transition-all duration-1000 ease-in-out`}
            />
            <Image
              src={"/Stock/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg"}
              alt={"afif-ramdhasuma"}
              height={320}
              width={320}
              className={`${
                secondLoad
                  ? "fade-in-long"
                  : "fade-out translate-x-full opacity-0"
              } z-0 transition-all duration-1000 ease-in-out`}
            />
          </div>
          <div className="flex flex-col justify-evenly">
            <Image
              src={"/Stock/nicolas-horn-MTZTGvDsHFY-unsplash.jpg"}
              alt={"nicolas-horn"}
              height={365}
              width={365}
              className={`${
                firstLoad
                  ? "fade-in-long"
                  : "fade-out translate-x-full opacity-0"
              } transition-all duration-1000 ease-in-out`}
            />
            <Image
              src={"/Stock/terricks-noah-wJQk6xilGWk-unsplash.jpg"}
              alt={"terricks-noah"}
              height={320}
              width={320}
              className={`${
                secondLoad
                  ? "fade-in-long"
                  : "fade-out translate-x-full translate-y-full opacity-0"
              } transition-all duration-1000 ease-in-out`}
            />
          </div>
        </div>
      </div>
      <div
        className="relative z-50 flex min-h-screen w-screen flex-col bg-orange-200 px-4 align-middle md:px-12"
        ref={fullDivRef}
      >
        <div
          ref={anchorRefThree}
          className="absolute mt-[50vh]"
          style={{
            height: fullDivRef.current?.offsetHeight
              ? fullDivRef.current?.offsetHeight * 1.2
              : "100vh",
          }}
        />
        <div className="pb-16 pt-8 text-center text-5xl font-light tracking-wider text-black md:pb-52 md:pt-36">
          Our Team
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
          <div
            className={`${
              loadIn ? "" : "translate-y-full"
            }  transition-all duration-1000 ease-in-out`}
          >
            <div className="flex justify-center">
              {/* <Image src={""} alt={"team member 1"} height={100} width={60} /> */}
              <UserIcon
                height={80}
                width={80}
                color={"black"}
                strokeWidth={1}
              />
            </div>
            <p className="px-2 text-center text-black md:px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              necessitatibus.
            </p>
          </div>
          <div
            className={`${
              loadIn ? "" : "translate-y-[150%]"
            }  transition-all duration-1000 ease-in-out`}
          >
            <div className="flex justify-center">
              {/* <Image src={""} alt={"team member 2"} height={100} width={60} /> */}
              <UserIcon
                height={80}
                width={80}
                color={"black"}
                strokeWidth={1}
              />
            </div>
            <p className="px-2 text-center text-black md:px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              tenetur neque. Natus.
            </p>
          </div>
          <div
            className={`${
              loadIn ? "" : "translate-y-[200%]"
            }  transition-all duration-1000 ease-in-out`}
          >
            <div className="flex justify-center">
              {/* <Image src={""} alt={"team member 3"} height={100} width={60} /> */}
              <UserIcon
                height={80}
                width={80}
                color={"black"}
                strokeWidth={1}
              />
            </div>
            <p className="px-2 text-center text-black md:px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            className={`${
              loadIn ? "" : "translate-y-[250%]"
            }  transition-all duration-1000 ease-in-out`}
          >
            <div className="flex justify-center">
              {/* <Image src={""} alt={"team member 4"} height={100} width={60} /> */}
              <UserIcon
                height={80}
                width={80}
                color={"black"}
                strokeWidth={1}
              />
            </div>
            <p className="px-2 text-center text-black md:px-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor
              accusantium magnam recusandae odit voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
