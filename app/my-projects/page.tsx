import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import React from "react";

type Props = {};

export default function MyProjects({}: Props) {
  return (
    <main
      style={{ backgroundImage: "url(assets/mountains.jpg)" }}
      className="w-screen min-h-screen px-8 flex items-center  justify-center bg-center bg-cover  overflow-auto md:overflow-hidden"
    >
      <div className="my-24 lg:my-0  max-w-full  place-items-center md:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-5 md:max-w-[90%]  relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </main>
  );
}
