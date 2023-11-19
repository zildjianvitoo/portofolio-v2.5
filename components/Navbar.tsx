import { socials } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="top-0 fixed z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center ">
        <div className="relative">
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
            style={{ filter: "grayscale(1) invert(1)" }}
          />
        </div>
        <h1 className="text-white text-[24px] font-semibold">Zildjian Vito</h1>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        {socials.map((social) => (
          <a key={social.name}>
            <social.icon className="text-[30px] text-white cursor-pointer transition-all hover:-translate-y-1" />
          </a>
        ))}
      </div>
    </div>
  );
}
