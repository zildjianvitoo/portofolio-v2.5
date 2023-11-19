import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-screen h-screen relative">
      <section
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/main-bg.webp)" }}
      >
        <div className="md:px-20 ml-10 mb-[300px] xxs:mb-[400px] md:mb-20 flex flex-col z-10 max-w-[750px] gap-5">
          <h1 className="text-[36px] sm:text-[50px] text-white font-semibold">
            Buat semuanya memungkinkan dengan{" "}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            accusamus.
          </p>
          <div className="hidden md:flex flex-col md:flex-row gap-5">
            <Link
              href={"/my-skills"}
              className="relative rounded-[20px] bg-purple-700 group hover:bg-red-800 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Selengkapnya
            </Link>
            <Link
              href={"/my-projects"}
              className="relative rounded-[20px] bg-purple-700 group hover:bg-red-800 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className=" absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-10" />
              Project saya
            </Link>
            <Link
              href={"/contact-me"}
              className="relative rounded-[20px] bg-purple-700 group hover:bg-red-800 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className=" absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-10" />
              Hubungi saya
            </Link>
          </div>
        </div>
      </section>
      <div className="absolute flex bottom-10 z-20 right-5 flex-col md:hidden gap-5">
        <Link
          href={"/my-skills"}
          className="rounded-[20px] text-center bg-purple-700 group hover:bg-red-800 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Baca selengkapnya
        </Link>
        <Link
          href={"/my-projects"}
          className="rounded-[20px] text-center bg-purple-700 group hover:bg-red-800 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className=" absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          Project saya
        </Link>
        <Link
          href={"/contact-me"}
          className="rounded-[20px] text-center bg-purple-700 group hover:bg-red-800 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Hubungi saya
        </Link>
      </div>
      <div className="absolute  bottom-0 right-0 z-10">
        <img
          src={"/assets/horse.png"}
          alt="kuda"
          height={300}
          width={300}
          className="absolute -scale-x-100 sm:scale-x-100 right-56 top-40"
        />
        <Image
          src={"/assets/cliff.webp"}
          alt="tebing"
          height={480}
          width={480}
        />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src={"/assets/trees.webp"}
          alt="pohon"
          height={2000}
          width={2000}
          className="w-full h-full"
        />
      </div>
      <img
        src={"/assets/stars.png"}
        alt="bintang"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-10"
      />
    </main>
  );
}
