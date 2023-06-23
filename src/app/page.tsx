import { Raleway } from "next/font/google";
import UserIcon from "~/icons/UserIcon";
import MissionPageContents from "./MissionSectionContents";
import TeamPageClientSide from "./TeamPageClientSide";
// import ContactForm from "./ContactForm";
// import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootPage() {
  return (
    <div className={`${raleway.className} mb-[100vh]`}>
      <div className="relative h-screen overflow-hidden bg-zinc-50">
        <div className="page-fade-in z-10 h-screen bg-[url('/Stock/man-getting-botox.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
          <div
            className={`text-shadow fixed left-0 top-1/3 z-[-20] w-full text-center text-4xl tracking-widest text-white`}
          >
            A Refined Botox Concierge Aesthetics Provider
            <div className="py-8">Serving Manhattan&apos;s Upper East Side</div>
          </div>
        </div>
      </div>
      <MissionPage />
      <TeamPage />
    </div>
  );
}

const MissionPage = () => {
  return (
    <div className="topShadow relative flex h-screen flex-col justify-evenly bg-zinc-50 px-4 md:px-12">
      <div className="flex justify-evenly">
        <MissionPageContents />
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="relative flex h-screen flex-col justify-evenly bg-orange-200 px-4 align-middle md:px-12">
      <div className="text-center text-5xl font-light tracking-wider text-black">
        Our Team
      </div>
      <div className="flex flex-row justify-evenly pb-[30vh]">
        <TeamPageClientSide />
      </div>
    </div>
  );
};
