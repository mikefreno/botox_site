import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <>
      <div className="fixed top-0 z-0 flex h-screen w-screen flex-col justify-evenly bg-zinc-50 bg-fixed px-4 text-black md:px-12">
        <div className="pt-8 text-center text-3xl tracking-widest">
          Contact Us
        </div>
        <div
          className="flex h-3/4 w-full flex-col overflow-scroll rounded-md bg-orange-50 shadow-inner"
          id="contact"
        >
          <div className="flex h-2/3 flex-col justify-evenly">
            <Link
              href={"/booking"}
              className="-my-8 mx-auto h-fit w-fit rounded bg-green-400 px-8 py-6 text-2xl text-white drop-shadow-xl transition-all duration-200 ease-in-out hover:bg-green-500 hover:shadow-inner active:scale-90"
            >
              Book An Appointment
            </Link>
            <div className="flex flex-row justify-evenly px-12 pt-8">
              <Link
                href={"/testimonials"}
                className="drawn-border my-auto w-fit rounded-md px-6 py-2 text-lg text-black underline underline-offset-4 md:text-3xl"
              >
                <div className="text-center text-sm">See:</div>
                Testimonials
              </Link>
              <Link
                href={"/pricing"}
                className="drawn-border my-auto w-fit rounded-md px-6 py-2 text-lg text-black underline underline-offset-4 md:text-3xl"
              >
                <div className="text-center text-sm">See:</div>
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex h-1/3 w-full flex-col">
            <div className="rule-around mx-16 -mt-4 mb-4">or</div>
            <div className="pb-8 text-center text-2xl">Reach out!</div>
            <div className="mx-auto w-full rounded-md bg-zinc-50 px-8 py-4 shadow-2xl md:w-2/3">
              <div className="text-2xl font-light">
                Send Us A Message
                <ContactForm />
              </div>
            </div>
            <div className="flex flex-row justify-between pt-6 md:flex-col">
              <div className="text- flex w-full flex-col justify-between md:flex-row md:justify-evenly">
                <div>
                  UPPER EAST CLINICIANS <br /> BOTOX CONCIERGE
                </div>
                <div className="font-bold text-orange-500 ">
                  NEW YORK CITY <br />
                  123 3RD AVE
                </div>
              </div>
              <div className="mt-8 text-center font-semibold">
                <div className="text-orange-500">(123)-456-7890</div>
                <div>johndoe@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
