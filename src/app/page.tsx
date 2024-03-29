import MissionSection from "./BodySection";
import Footer from "./Footer";

export default function RootPage() {
  return (
    <>
      <div className={`z-10 mb-[100vh]`}>
        <div className="relative z-50 overflow-hidden bg-zinc-50">
          <div className="page-fade-in z-20 h-[100dvh] w-screen bg-[url('/Stock/man-getting-botox-mobile.jpg')] bg-cover bg-fixed bg-center bg-no-repeat md:bg-[url('/Stock/man-getting-botox.jpg')] md:bg-cover">
            <div
              className={`text-shadow fixed left-0 z-10 mt-[33vh] w-full text-center text-4xl tracking-widest text-white`}
            >
              <div className="z-0">
                A Concierge Botox Provider
                <div className="py-8">
                  Serving Manhattan&apos;s Upper East Side
                </div>
              </div>
            </div>
          </div>
          <MissionSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
