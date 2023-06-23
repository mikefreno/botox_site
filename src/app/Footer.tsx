import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <>
      <div
        className="fixed bottom-0 z-10 flex h-screen w-screen flex-col justify-evenly overflow-hidden bg-zinc-50 bg-fixed px-4 text-black md:px-12"
        id="contact"
      >
        <div className="-mb-12 text-center text-3xl tracking-widest">
          Contact Us
        </div>
        <div className="flex w-full flex-row">
          <div className="flex w-1/4 flex-col justify-between">
            <div>
              <div>UPPER EAST CLINICIANS</div>
              <div>BOTOX CONCIERGE,</div>
              <div className="font-bold text-orange-500 ">
                NEW YORK CITY <br />
                123 3RD AVE
              </div>
            </div>
            <div className="font-semibold">
              <div className="text-orange-500">(123) - 456 - 7890</div>
              <div>johndoe@gmail.com</div>
            </div>
          </div>
          <div className="h-full w-1 border-r border-black" />
          <div className="flex w-full flex-col">
            <Link
              href={"/booking"}
              className="mx-auto w-fit rounded bg-green-400 px-8 py-6 text-xl text-white drop-shadow-xl transition-all duration-200 ease-in-out hover:bg-green-500 hover:shadow-inner active:scale-90"
            >
              Book An Appointment
            </Link>

            <div className="rule-around mx-16 my-12">or</div>
            <div className="mx-auto w-5/6 rounded-md px-8 py-4 shadow-2xl">
              <div className="text-2xl font-light">Send Us A Message</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
