import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Github } from "lucide-react";
import { TeamMembers } from "./Team";

export function Creators() {
  return (
    <div className="container grid px-1 md:grid-cols-2 md:px-6">
      {TeamMembers.map((member, index) => (
        <CardContainer key={index}>
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-red-500/[0.1] bg-zinc-800 backdrop-blur bg-opacity-20 border-black/[0.3] w-auto sm:w-[30rem] h-auto rounded-lg p-6 ">
            <CardItem
              translateZ="50"
              className="text-2xl bg-gradient-to-b from-zinc-100 clash via-zinc-300 to-red-400 bg-clip-text text-transparent"
            >
              {member.name}
            </CardItem>
            <CardItem translateZ="100" rotateX={-5} className="w-full mt-6">
              <Image
                src={member.imageUrl}
                height="700"
                width="700"
                className="h-[24rem] w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-12">
              <CardItem
                translateZ={20}
                translateX={-40}
                className="text-xs font-normal dark:text-white"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-gray-100 hover:bg-[#383838] h-11 px-4 font-semibold">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Know More →
                  </a>
                </button>
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                className="px-4 py-2 rounded-md bg-gradient-to-tl from-red-400 to-red-500 text-white text-xs font-bold"
              >
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  Github <Github size={20} />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
