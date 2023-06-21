import { Raleway } from "next/font/google";
import UserIcon from "~/icons/UserIcon";
import Image from "next/image";
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
      {MissionPage()}
      {TeamPage()}
      {ContactPage()}
    </div>
  );
}

const MissionPage = () => {
  return (
    <div className="topShadow relative flex h-screen flex-col justify-evenly bg-zinc-50 px-4 md:px-12">
      <div className="flex justify-evenly">
        <div className="flex h-full flex-col justify-evenly">
          <Image
            src={"/Stock/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"}
            alt={"jake-nackos"}
            height={320}
            width={320}
          />
          <Image
            src={"/Stock/michael-dam-mEZ3PoFGs_k-unsplash.jpg"}
            alt={"michael-dam"}
            height={320}
            width={320}
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
          />
          <Image
            src={"/Stock/terricks-noah-wJQk6xilGWk-unsplash.jpg"}
            alt={"terricks-noah"}
            height={320}
            width={320}
          />
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="relative flex h-screen flex-col justify-evenly bg-orange-200 px-4 md:px-12">
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
  return <div></div>;
};
