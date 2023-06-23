"use client";

import { useEffect, useRef, useState } from "react";
import UserIcon from "~/icons/UserIcon";

export default function TeamPageClientSide() {
  const [loadIn, setLoadIn] = useState<boolean>(false);

  const anchorRef = useRef<HTMLDivElement>(null);

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
      <div ref={anchorRef} className="absolute mt-[10vh] h-[100vh]" />
      <div
        className={`${
          loadIn ? "" : "translate-y-full"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="flex justify-center">
          {/* <Image src={""} alt={"team member 1"} height={100} width={60} /> */}
          <UserIcon height={48} width={48} color={"black"} strokeWidth={1} />
        </div>
        <p className="px-8 text-center text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          eum voluptatum vitae illo quod assumenda, beatae quia tempora autem
          sunt?
        </p>
      </div>
      <div
        className={`${
          loadIn ? "" : "translate-y-[150%]"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="flex justify-center">
          {/* <Image src={""} alt={"team member 2"} height={100} width={60} /> */}
          <UserIcon height={48} width={48} color={"black"} strokeWidth={1} />
        </div>
        <p className="px-8 text-center text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat
          accusantium sint quisquam beatae blanditiis vero dolorem suscipit
          facilis voluptates?
        </p>
      </div>
      <div
        className={`${
          loadIn ? "" : "translate-y-[200%]"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="flex justify-center">
          {/* <Image src={""} alt={"team member 3"} height={100} width={60} /> */}
          <UserIcon height={48} width={48} color={"black"} strokeWidth={1} />
        </div>
        <p className="px-8 text-center text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse
          aliquam mollitia voluptates voluptatibus accusamus suscipit
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
          <UserIcon height={48} width={48} color={"black"} strokeWidth={1} />
        </div>
        <p className="px-8 text-center text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui numquam
          rerum amet magnam vitae, officia obcaecati enim temporibus explicabo
          iste.
        </p>
      </div>
    </>
  );
}
