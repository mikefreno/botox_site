"use client";

import { useEffect, useRef, useState } from "react";
import UserIcon from "~/icons/UserIcon";

export default function TeamSection() {
  const [loadIn, setLoadIn] = useState<boolean>(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const fullDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // triggers when observer comes into view
        if (entry) setLoadIn(entry.isIntersecting);
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

  return (
    <>
      <div
        className="relative z-50 flex min-h-screen w-screen flex-col bg-orange-200 px-4 align-middle md:px-12"
        ref={fullDivRef}
      >
        <div
          ref={anchorRef}
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
