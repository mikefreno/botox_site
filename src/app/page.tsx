import { Raleway } from "next/font/google";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootPage() {
  return (
    <div className={`${raleway.className} z-10 mb-[100vh]`}>
      <div className="relative z-50 overflow-hidden bg-zinc-50">
        <div className="page-fade-in z-0 min-h-screen bg-[url('/Stock/man-getting-botox.jpg')] bg-cover bg-center bg-no-repeat">
          <div
            className={`text-shadow absolute left-0  top-1/3 z-10 w-full text-center text-4xl tracking-widest text-white`}
          >
            A Concierge Botox Provider
            <div className="py-8">Serving Manhattan&apos;s Upper East Side</div>
          </div>
        </div>
      </div>
      <MissionSection />
    </div>
  );
}
