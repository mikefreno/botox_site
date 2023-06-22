import { Raleway } from "next/font/google";
import UserIcon from "~/icons/UserIcon";
import MissionPageContents from "./MissionSectionContents";
import ContactForm from "./ContactForm";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootPage() {
  return (
    <div className={raleway.className}>
      <div className="relative h-screen overflow-hidden bg-zinc-50">
        <div className="page-fade-in z-50 h-screen bg-[url('/Stock/man-getting-botox.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
          <div
            className={`text-shadow fixed left-0 top-1/3 z-50 w-full text-center text-4xl tracking-widest text-white`}
          >
            Licensed Botox Clinicians
            <div className="py-8">Serving Manhattan&apos;s Upper East Side</div>
          </div>
        </div>
      </div>
      <MissionPage />
      <TeamPage />
      <ContactPage />
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
      <div className="flex flex-row justify-evenly pb-[20vh]">
        <div>
          <div className="flex justify-center">
            {/* <Image src={""} alt={"team member 1"} height={100} width={60} /> */}
            <UserIcon height={48} width={48} color={"white"} strokeWidth={1} />
          </div>
          <p className="px-8 text-center text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            eum voluptatum vitae illo quod assumenda, beatae quia tempora autem
            sunt?
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            {/* <Image src={""} alt={"team member 2"} height={100} width={60} /> */}
            <UserIcon height={48} width={48} color={"white"} strokeWidth={1} />
          </div>
          <p className="px-8 text-center text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            fugiat accusantium sint quisquam beatae blanditiis vero dolorem
            suscipit facilis voluptates?
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            {/* <Image src={""} alt={"team member 3"} height={100} width={60} /> */}
            <UserIcon height={48} width={48} color={"white"} strokeWidth={1} />
          </div>
          <p className="px-8 text-center text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse
            aliquam mollitia voluptates voluptatibus accusamus suscipit
            perferendis eius quisquam labore.
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            {/* <Image src={""} alt={"team member 4"} height={100} width={60} /> */}
            <UserIcon height={48} width={48} color={"white"} strokeWidth={1} />
          </div>
          <p className="px-8 text-center text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            numquam rerum amet magnam vitae, officia obcaecati enim temporibus
            explicabo iste.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div
      className="relative flex h-screen flex-col justify-evenly bg-zinc-50 px-4 md:px-12"
      id="contact"
    >
      <div className="text-center text-3xl">Contact Us</div>
      <Link
        href={"/booking"}
        className="mx-auto w-fit rounded-xl bg-orange-200 px-8 py-6 text-xl text-white shadow-md hover:bg-orange-300 active:bg-orange-400"
      >
        Book An Appointment
      </Link>

      <div className="rule-around">or</div>
      <div className="mx-auto w-11/12 rounded-xl px-8 py-4 shadow-2xl sm:w-3/4 md:w-2/3 lg:w-1/2">
        <div className="text-2xl font-light">Send Us A Message</div>
        <ContactForm />
      </div>
    </div>
  );
};
