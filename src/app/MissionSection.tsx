/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MissionSection() {
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [secondLoad, setSecondLoad] = useState<boolean>(false);

  const anchorRefOne = useRef<HTMLDivElement>(null);
  const anchorRefTwo = useRef<HTMLDivElement>(null);

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

    if (anchorRefOne.current) {
      observer.observe(anchorRefOne.current);
    }
    if (anchorRefTwo.current) {
      observerTwo.observe(anchorRefTwo.current);
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
    </>
  );
}
