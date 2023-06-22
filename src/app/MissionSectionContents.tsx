"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MissionPageContents() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [secondLoad, setSecondLoad] = useState<boolean>(false);

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
    if (scrollHeight >= 200 && scrollHeight <= 1200) {
      setFirstLoad(true);
    } else {
      setFirstLoad(false);
    }
    if (scrollHeight >= 550 && scrollHeight <= 1680) {
      setSecondLoad(true);
    } else {
      setSecondLoad(false);
    }
  }, [scrollHeight]);

  return (
    <>
      <div className="flex h-full flex-col justify-evenly">
        <Image
          src={"/Stock/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"}
          alt={"jake-nackos"}
          height={320}
          width={320}
          className={`${
            firstLoad ? "fade-in-long" : "fade-out translate-y-full opacity-0"
          } transition-all duration-1000 ease-in-out`}
        />
        <Image
          src={"/Stock/michael-dam-mEZ3PoFGs_k-unsplash.jpg"}
          alt={"michael-dam"}
          height={320}
          width={320}
          className={`${
            secondLoad ? "fade-in-long" : "fade-out -translate-x-full opacity-0"
          } transition-all duration-1000 ease-in-out`}
        />
      </div>
      <div className="flex h-screen w-[20vw] pt-[30vh] text-center align-middle text-3xl">
        We seek to provide an uncompromising experience for our clients
      </div>
      <div className="flex h-full flex-col justify-evenly">
        <Image
          src={"/Stock/nicolas-horn-MTZTGvDsHFY-unsplash.jpg"}
          alt={"nicolas-horn"}
          height={320}
          width={320}
          className={`${
            firstLoad ? "fade-in-long" : "fade-out translate-x-full opacity-0"
          } transition-all duration-1000 ease-in-out`}
        />
        <Image
          src={"/Stock/terricks-noah-wJQk6xilGWk-unsplash.jpg"}
          alt={"terricks-noah"}
          height={320}
          width={320}
          className={`${
            secondLoad ? "fade-in-long" : "fade-out translate-y-full opacity-0"
          } transition-all duration-1000 ease-in-out`}
        />
      </div>
    </>
  );
}
