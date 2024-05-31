"use client"

import { Creators } from "./ui/Creators";

export function Team() {
  return (
    <>
      <section className="py-12 relative overflow-x-hidden flex place-content-center">
        <div className="container px-4 md:px-6 max-w-screen-xl mb-10">
          <div className="my-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl lg:7xl bg-gradient-to-b from-zinc-100 clash via-zinc-300 to-red-400 bg-clip-text text-transparent">
              Meet {" "} Our Team
            </h2>
            <Creators />
          </div>

          <div className="grid"></div>
        </div>
      </section>
    </>
  );
}
