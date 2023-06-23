/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import UserIcon from "~/icons/UserIcon";

export default function MissionSection() {
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
    <>
      <div className="topShadow relative z-50 flex min-h-screen flex-col justify-evenly bg-zinc-50 px-4 md:px-12">
        <div ref={anchorRefOne} className="absolute mt-[-10vh] h-[60vh]"></div>
        <div ref={anchorRefTwo} className="absolute mt-[30vh] h-[60vh]"></div>
        <div className="flex justify-evenly">
          <div className="grid h-screen grid-flow-row grid-cols-3 gap-4">
            <div className="flex flex-col justify-evenly">
              <Image
                src={"/Stock/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"}
                alt={"jake-nackos"}
                height={320}
                width={320}
                className={`${
                  firstLoad
                    ? "fade-in-long"
                    : "fade-out translate-y-full opacity-0"
                } transition-all duration-1000 ease-in-out`}
              />

              <Image
                src={"/Stock/michael-dam-mEZ3PoFGs_k-unsplash.jpg"}
                alt={"michael-dam"}
                height={320}
                width={320}
                className={`${
                  secondLoad
                    ? "fade-in-long"
                    : "fade-out -translate-x-full opacity-0"
                } transition-all duration-1000 ease-in-out`}
              />
            </div>
            <div className="h-screen overflow-hidden text-ellipsis px-8 pt-[30vh] text-center text-3xl md:px-12">
              We seek to provide an uncompromising experience for our clients
            </div>
            <div className="flex w-full flex-col justify-evenly">
              <div className="flex w-full justify-end">
                <Image
                  src={"/Stock/nicolas-horn-MTZTGvDsHFY-unsplash.jpg"}
                  alt={"nicolas-horn"}
                  height={320}
                  width={320}
                  className={`${
                    firstLoad
                      ? "fade-in-long"
                      : "fade-out translate-x-full opacity-0"
                  } transition-all duration-1000 ease-in-out`}
                />
              </div>
              <div className="flex w-full justify-end">
                <Image
                  src={"/Stock/terricks-noah-wJQk6xilGWk-unsplash.jpg"}
                  alt={"terricks-noah"}
                  height={320}
                  width={320}
                  className={`${
                    secondLoad
                      ? "fade-in-long"
                      : "fade-out translate-y-full opacity-0"
                  } transition-all duration-1000 ease-in-out`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative z-50 flex min-h-screen w-screen flex-col bg-orange-200 px-4 align-middle md:px-12"
        ref={fullDivRef}
      >
        <div
          ref={anchorRefThree}
          className="absolute mt-[40vh]"
          style={{ height: fullDivRef.current?.offsetHeight }}
        />
        <div className="pb-16 pt-8 text-center text-5xl font-light tracking-wider text-black md:pb-52 md:pt-36">
          Our Team
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            className={`${
              loadIn ? "" : "translate-y-full"
            } transition-all duration-1000 ease-in-out`}
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
            <p className="px-8 text-center text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias eum voluptatum vitae illo quod assumenda, beatae quia
              tempora autem sunt?
            </p>
          </div>
          <div
            className={`${
              loadIn ? "" : "translate-y-[150%]"
            } transition-all duration-1000 ease-in-out`}
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
            <p className="px-8 text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              fugiat accusantium sint quisquam beatae blanditiis vero dolorem
              suscipit facilis voluptates?
            </p>
          </div>
          <div
            className={`${
              loadIn ? "" : "translate-y-[200%]"
            } transition-all duration-1000 ease-in-out`}
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
            <p className="px-8 text-center text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              esse aliquam mollitia voluptates voluptatibus accusamus suscipit
              perferendis eius quisquam labore.
            </p>
          </div>
          <div
            className={`${
              loadIn ? "" : "translate-y-[250%]"
            } transition-all duration-1000 ease-in-out`}
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
            <p className="px-8 text-center text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              numquam rerum amet magnam vitae, officia obcaecati enim temporibus
              explicabo iste.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
