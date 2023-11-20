import ContactForm from "@/components/ContactForm";
import React from "react";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <main
      style={{ backgroundImage: "url(/assets/bg-3.jpg)" }}
      className="w-screen px-5 h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        className="w-full  md:w-4/5 h-2/3 relative bg-cover bg-center rounded-xl border border-white "
        style={{ backgroundImage: "url(/assets/atombg-comp.webp)" }}
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
