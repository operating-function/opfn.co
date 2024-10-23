"use client";

import React, { useEffect } from "react";
import Lockup from "@/components/Lockup";
import Logo from "@/components/Logo";
//<Logo size={100} color="white" className="bg-black" />
//<Logo size={100} color="black" />
//
import Link from "next/link";
// import Image from "next/image";

// Cosmetics, for later
// import WebGLTest from "@/components/WebGLTest";
//
//        <WebGLTest
//          speed={0.5}
//          color={[0.5, 0.3, 1.0]}
//          size={0.1}
//          targetSelectors={["#test", "#thing"]}
//          debug={true} // Enable this temporarily to see what's happening
//        />
//
// import ScrollSequence from "@/components/ScrollSequence";
//
//          <div className="text-center relative">
//            <ScrollSequence
//              frameDir="forest_frames"
//              frameCount={100}
//              width={698}
//              height={1081}
//              backgroundImage="/images/wide-forest.jpeg"
//            >
//              <section className="flex justify-center text-center flex-col items-center align-center transparent text-white h-[90vh]">
//                <div>
//                  <h1 className="text-6xl">
//                    <OpfnSvg />
//                  </h1>
//                  <h2 className="no-underline">Sub header</h2>
//                </div>
//              </section>
//            </ScrollSequence>

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <main className="">
        <section className="relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center h-[70vh]">
          <img
            src="/images/wide-forest.jpeg"
            alt="Forest Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="text-6xl">
              <Lockup className="mx-auto" size={300} color="white" />
            </h1>
            <h2 className="no-underline">The Operating Function Company</h2>
          </div>
        </section>

        <section className="content-zone">
          <p>
            An Operating Function specifies a new kind of personal computer. The
            computer is decentralized because it exists on many devices
            simultaneously, including the cloud, and can run forever.
          </p>

          <p>
            OFs save data automatically and can be moved even while running. All
            programs are open and modifiable. Users retain control over their
            software, their data, and their networks. Developers bear no
            infrastructure cost.
          </p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">All Software is Open</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            The system is inspectable down to the bottom. Our compiler binary is
            called PLAN and is pure, lazy, and human readable. The entire system
            bootstraps itself from PLAN using reflection and dynamic code
            generation.
          </p>

          <p>
            End-user programs are created without siloing functionality in
            applications. When software is installed, source is automatically
            available for inspection. Modifications can be hot reloaded with no
            downtime.
          </p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">No Server Costs</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            Users connect to each other peer-to-peer. OpFn’s run on edge devices
            and cloud servers, moving programs between domains depending on
            need.
          </p>

          <p>
            Developers write full stack programs that are like serverless
            functions, or smart contracts. Publishing software is equivalent to
            sharding: the user runs an entirely independent copy.
          </p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">Programs Run Forever</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            A personal computer should never become obsolete. PLAN has 5 opcodes
            that are frozen in time, guaranteeing old code will work on new
            implementations, and new code will work on old (but maybe more
            slowly).
          </p>

          <p>
            To make it fast, targets for hardware acceleration are encoded
            within the system. New targets can be added as standards. Stateful
            effects are handled by a small number of IO channels that are
            specified by the system, but implemented in the runtime.
          </p>
        </section>

        <div className="my-[400px]"></div>

        <section className="content-zone">
          <p>
            Each OF can run many processes, called cogs. Cogs are responsible
            for running all of your programs and storing all of your data. They
            do this automatically so you never have to think about saving or
            backup....
          </p>

          <div className="text-center">
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
          </div>
        </section>

        <section>
          <div className="text-center">
            <Link href="/contribute">
              <button>Contribute</button>
            </Link>
          </div>
        </section>

        <section className="content-zone">
          <div className="horizontal-bars my-4"></div>
        </section>

        <section className="content-zone" id="callouts">
          <article className="left">
            <header>PLAN</header>
            <main>
              Some more words on PLAN lorem ipsum Some more words on PLAN lorem
              ipsum Some more words on PLAN lorem ipsum Some more words on PLAN
              lorem ipsum Some more words on PLAN lorem ipsum
            </main>
          </article>

          <article className="right flex flex-row-reverse">
            <header>Ships</header>
            <main>
              Some more words on PLAN lorem ipsum Some more words on PLAN lorem
              ipsum Some more words on PLAN lorem ipsum Some more words on PLAN
              lorem ipsum Some more words on PLAN lorem ipsum
            </main>
          </article>

          <article className="left">
            <header>Runtime</header>
            <main>
              Some more words on PLAN lorem ipsum Some more words on PLAN lorem
              ipsum Some more words on PLAN lorem ipsum Some more words on PLAN
              lorem ipsum Some more words on PLAN lorem ipsum
            </main>
          </article>
        </section>

        <section>
          <div className="flex flex-row gap-x-4 justify-center">
            <div className="">
              <a href="https://opfn.gitbook.io/pallas" target="_blank">
                <button>Read the Docs</button>
              </a>
            </div>

            <div className="">
              <Link href="/about">
                <button>Join the Community</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
