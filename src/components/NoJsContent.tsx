import React from "react";
import Image from "next/image";
import Lockup from "@/components/Lockup";
import Link from "next/link";

import UseCase from "@/components/UseCase";

const USE_CASES = [
  {
    title: "Fungible compute markets",
    hasBackground: true,
    content:
      "PLAN's portable evaluation model standardizes how computation moves between resources. This enables markets where compute can be traded and running programs can migrate to optimal execution environments.",
  },
  {
    title: "Decentralized social graphs",
    hasBackground: true,
    content:
      "Operating functions solve the problem of siloed social graphs by maintaining connections and data at the system level, independent of any single app. Users can try new social software while maintaining their existing graphs and data, dramatically reducing switching costs.",
  },
  {
    title: "Semantic exploratory programming",
    hasBackground: true,
    content:
      "Developers can integrate external AI services and use them to investigate and modify full stack systems while they run, entirely through natural language. Direct connections to underlying implementations are always available.",
  },
  {
    title: "P2P software distribution",
    hasBackground: true,
    content:
      "Pins enable data and code to be stored as a Merkle DAG. Combined with a top level cryptographic identity, authors can sign their software packages, creating verifiable content-addressed artifacts that can be shared across a p2p network.",
  },
  {
    title: "Personal data storage",
    hasBackground: true,
    content:
      "Operating functions store large amounts of data and can transparently page in large heaps while maintaining efficient access patterns. Combined with extreme forward and backward compatibility guarantees, they create a stable platform for storing personal data.",
  },
  {
    title: "Agent orchestration",
    hasBackground: true,
    content:
      "Operating functions provide a substrate for agent orchestration where the programming environment itself can evolve alongside the agents. Agents can inspect and modify not just source objects but the entire runtime environment.",
  },
  {
    title: "Lifestreams",
    hasBackground: true,
    content:
      "A lifestream is an ordered collection of all your documents and communications, organized automatically by timestamp. Operating functions are pure and event-sourced, making them particularly well-suited as a platform for universal chronological interfaces.",
  },
  {
    title: "Malleable software design",
    hasBackground: true,
    content:
      "Operating functions have the most complete feature set for malleable software design: full structural and behavioral reflection, capability-based access control, unified code/data representation, gradual adaptation patterns, and an effect system.",
  },
  {
    title: "Non-custodial programmable wallets",
    hasBackground: true,
    content:
      "Wallets don't need third parties for MPC coordination if users run their own distributed computer. Because operating functions also act as general purpose web servers, wallets can programmatically interact with multiple chains through RPCs.",
  },
];

const useCaseTotal = USE_CASES.length;

interface UseCasesSectionProps {
  children: ReactNode[];
}

const UseCasesSection = ({ children }: UseCasesSectionProps) => {
  // Group the cases into pairs (for rows)
  const pairs = [];
  for (let i = 0; i < children.length; i += 2) {
    pairs.push(children.slice(i, Math.min(i + 2, children.length)));
  }

  return (
    <div className="flex w-full md:px-0 lg:content-zone mx-auto flex-col justify-items-stretch">
      {/* desktop */}
      <div className="hidden md:flex md:flex-col w-full container mx-auto max-w-opfn">
        {pairs.map((pair, pairIndex) => (
          <div key={pairIndex} className="relative">
            {/* Shared background for the pair */}
            <div className="absolute inset-0">
              <div className="jungle-bg">
                <img
                  src="/images/dithered-jungle.png"
                  alt="background"
                  className="mt-[12px] w-full object-cover opacity-15 grayscale"
                />
                <div className="use-case-gradient"></div>
              </div>
            </div>
            {/* Pair content */}
            <div className="relative z-10 grid px-4 grid-cols-2 gap-x-[96px]">
              {pair}
            </div>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="md:hidden flex flex-col">
        {children.map((child, index) => (
          <div key={index} className="relative">
            {/* Individual background per item */}
            <div className="absolute inset-0">
              <div className="jungle-bg">
                <img
                  src="/images/dithered-jungle.png"
                  alt="background"
                  className="mt-[12px] w-full object-cover opacity-15 grayscale"
                />
                <div className="use-case-gradient"></div>
              </div>
            </div>
            {/* Item content */}
            <div className="relative z-10">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* components/NoJsContent.tsx */
}
export default function NoJsContent() {
  return (
    <div
      className="nojs-content"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <header>
        <h1 style={{ fontFamily: "LatinModern" }}>opfn</h1>
        <h2 className="my-4">The Operating Function Company</h2>
      </header>

      <main>
        <section>
          <p>
            An operating function is a new kind of personal computer where all
            programs are open, malleable and owned by the user.
          </p>

          <p>
            It isn't a device&mdash;it's a computer defined as software. And it
            runs everywhere simultaneously.
          </p>
        </section>

        <div className="my-8 border-b border-black"></div>

        <section>
          <dl>
            <dt className="text-lg mb-2 font-bold">App-Less Software</dt>
            <dd>
              Because software in an operating function isn't siloed in apps,
              you have full access to the codebase, backend included. "Inspect
              source" everything, and change anything you want.
            </dd>

            <dt className="text-lg mb-2 mt-4 font-bold">No Server Costs</dt>
            <dd>
              Write full stack programs as you would serverless functions, or
              smart contracts. Operating functions are owned by users and scale
              automatically based on their owners' demand and preferences.
            </dd>

            <dt className="text-lg mb-2 mt-4 font-bold">
              Programs Run Forever
            </dt>
            <dd>
              Operating functions provides strong backward and forward
              compatibility guarantees and make it possible to move running
              computations between machines, with no impact to the program.
            </dd>

            <dt className="text-lg mb-2 mt-4 font-bold">
              Uncensorable Publishing
            </dt>
            <dd>
              All data and code is hashed and stored in a content-addressable
              Merkle DAG. Content can be published using a protocol that
              combines aspects of IPFS and BitTorrent.
            </dd>
          </dl>

          <div className="flex justify-center my-8">
            <a className="font-normal" href="https://docs.opfn.co">
              Read the docs
            </a>
          </div>
        </section>

        <div className="my-8 horizontal-bars"></div>

        <section>
          <h2 className="my-4">Core Technology</h2>

          <article>
            <h3 className="text-lg my-4">PLAN is a calculus</h3>
            <pre
              style={{
                fontSize: "12px",
                whiteSpace: "pre-wrap",
                background: "#f5f5f5",
                padding: "1em",
                margin: "1em 0",
              }}
            >
              {`
Each value is a pin x:<i>, a law x:{n a b}, an app x:(f g), or a nat x:@.

Treat this as a combinator system, and use normal-order evaluation to normalize.
Unmatched patterns diverge.

(0 n a b) | NAT(a)>0 = {NAT(n) NAT(a) force(b)}
(1 p _ _ _ <x>)      = (p x)
(1 _ l _ _ {n a b})  = (l n a b)
(1 _ _ a _ (f x))    = (a f x)
(1 _ _ _ n x:@)      = (n x)
(2 z p x)            = n=NAT(x); if n=0 then z else p (n-1)
(3 x)                = NAT(x)+1
(4 x)                = <force(x)>
`}
            </pre>

            <p>
              PLAN is the core innovation that makes a ubiquitous personal
              computer possible. It enables universal portability across
              devices, guarantees backward compatibility, and makes forward
              compatibility between runtimes tractable.
            </p>

            <p>
              PLAN is functional, lazy, and <em>reflective</em>.
            </p>
          </article>

          <article>
            <h3 className="text-lg my-4">Cogs Run Forever</h3>
            <p>
              Cogs are programs that run forever. Even if you reboot, cogs will
              continue exactly where they left off because they persist state
              automatically. A personal computer should never become obsolete.
              And it should <strong>never</strong> lose your data.
            </p>
          </article>
        </section>

        <div className="my-8 horizontal-bars"></div>

        <section>
          <h2 className="my-4">System Overview</h2>
          <p>
            An operating function is a programming environment that combines
            aspects of Erlang/OTP, the EVM, and Lisp.
          </p>
          <p>
            Like Erlang, the system is functional, supports concurrency through
            message passing, and programs can be hot reloaded without downtime.
            Like the EVM, program state is automatically persisted. Programs
            keep everything "in memory" and will run forever (but there is no
            global consensus). Like Lisp, programs can universally introspect
            themselves and their environment, and dynamically introduce new
            code.
          </p>
        </section>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #333",
            margin: "2em 0",
          }}
        />

        <section>
          <h3 className="text-lg my-4">PLAN</h3>
          <p>
            PLAN is the foundation of our system software—the operating function
            bootstraps from PLAN. It is a functional, lazy, and reflective
            "bytecode" and is designed to strike a reasonable balance between
            several requirements: human readability, functional compile target,
            efficient and stable memory representation, ease of implementation,
            and extensibility and modifiability.
          </p>
          <pre
            style={{
              fontSize: "12px",
              background: "#f5f5f5",
              padding: "1em",
              overflowX: "auto",
            }}
          >
            {`PLAN ::= <PLAN>
       | {Nat Nat PLAN}
       | (PLAN PLAN)
       | Nat

Pins - subheaps: content addressed DAG nodes
Laws - supercombinators: pure n-ary functions
Apps - applications: closures or thunks
Nats - natural numbers: opaque data or opcodes`}
          </pre>
        </section>

        <section>
          <h3 className="text-lg my-4">Machines</h3>
          <p>
            Operating functions run on a virtual machine. The semantics of the
            machine are completely encoded within the system—like a runnable
            spec—which makes it tractable to implement and audit multiple
            competing versions. Each user device runs one machine; together they
            form a networked computer.
          </p>
        </section>

        <section>
          <h3 className="text-lg my-4">Cogs</h3>
          <p>
            Machines run cogs. Cogs are responsible for user programs and
            managing the persistence of data. They do this automatically. Within
            the system, cogs are closures which capture their full environment.
            Cogs can upgrade themselves while running by accepting a value which
            defines a new cog.
          </p>
          <pre
            style={{
              fontSize: "12px",

              background: "#f5f5f5",
              padding: "1em",
              overflowX: "auto",
            }}
          >
            {`type Worker   = Driver | Job
type WorkerId = Nat
type MsgId    = Nat
type Input    = (WorkerId, PLAN)
type Output   = (WorkerId, MsgId, PLAN)

type CogClosure =
  { run     :: CogClosure 
            -> Array Input 
            -> (CogClosure, Array Output)
  , state   :: state
  , query   :: WorkerID -> state -> PLAN -> PLAN
  , workers :: Array Worker
  }`}
          </pre>
        </section>

        <section>
          <h3 className="text-lg my-4">Drivers</h3>
          <p>
            Drivers are a special program that only a cog can create. Each cog
            can create and manage many drivers. Drivers interact with a small
            set of standardized virtual hardware devices and let an operating
            function connect to things like the web, a file system, or a GPU.
          </p>
        </section>

        <section>
          <h3 className="text-lg my-4">Manifests</h3>
          <p>
            Manifests are a special PLAN value that must be provided to a new
            machine. The manifest tells the machine what contents from a user's
            existing network of operating functions it is responsible for: both
            programs and data.
          </p>
        </section>

        <div style={{ textAlign: "center", margin: "2em 0" }}>
          <a
            href="https://docs.opfn.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Docs
          </a>
        </div>

        <div className="my-8 horizontal-bars"></div>

        <section>
          <h2 className="my-4">Use Cases</h2>
          <dl style={{ display: "grid" }}>
            {USE_CASES.map((useCase, index) => (
              <div key={index} style={{ marginBottom: "2em" }}>
                <dt
                  style={{
                    fontWeight: "bold",
                    marginBottom: "0.5em",
                    display: "flex",
                    gap: "1em",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8em",
                      opacity: "0.7",
                    }}
                  >
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  {useCase.title}
                </dt>
                <dd style={{ margin: 0 }}>{useCase.content}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="my-8">What motivates us</h2>
          <p>
            Software is the best tool we have to solve societal issues at scale,
            so why does modern software seem to cause so much harm and conflict?
            We believe the root cause is the siloing of software into
            applications and the economic relationships it incentivizes.
          </p>

          <p>
            Apps isolate data and code in opaque siloes, corrupting the
            incentives of successful companies and alienating developers from
            their labor. Massive data breaches, the loss of personal artifacts
            like photos and notes, and ratcheting online political conflict and
            polarization are all downstream of the app model. How do they cause
            this? Apps create high transaction costs for developers (the amount
            of effort required to make a code change) and high switching costs
            for users (the amount of effort to use new software). These
            constraints limit the rational coordination strategies of each party
            and nudge the market system toward mass surveillance, censorship of
            minorities, and winner-take-all dynamics.
          </p>

          <p>
            Siloed apps make it more difficult to create new kinds of software.
            Organizations that produce a valuable software product tend to get
            large, and large centralized organizations must rationally plan
            their activities. With enough success, these firms become so large
            that useful activity becomes impossible to centrally administrate.
            The organization becomes bureaucratic and experimental code changes
            are subject to coordination costs which grow super-linearly with
            codebase size. Commercially viable software goes unshipped because
            the returns seem too small, or it’s impossible to sustain focus and
            motivation, or it overlaps with an existing product. Externally,
            third party developers can’t even access the code, making the cost
            of parallel experimentation effectively infinite. This development
            structure pushes companies toward extractive business models in an
            attempt to beat back internal entropy—more ads, higher subscription
            fees, aggressive IP enforcement.
          </p>

          <p>
            Applications also discourage users from adopting new software.
            Switching costs are high when users can’t export data, or can only
            export partially complete data. Since code is owned and controlled
            by the corporation, users who move to a new app bear the cost of
            learning new functionality; apps preclude the possibility of
            bringing old software into new contexts. Worse yet, applications
            capture the value created when users find and interact with one
            another. Silicon Valley calls these network effects, the rest of us
            just call it being social. There is no higher cost than the loss of
            community, but apps make social exclusion a rewarding business
            policy.
          </p>

          <p>
            What is needed instead of applications is a ubiquitous virtual
            computer where all software is open, malleable, and owned by the
            user. The computer must run across all the devices that a user owns
            because software needs to be accessible wherever a user requires it.
            Applications have trained us all to expect access to cloud
            resources, including cheap storage, scalable compute, and services
            like generative models. This means the ubiquitous computer also
            needs to run on servers, preferably whenever it would be a better
            experience than running locally (but always under the control of the
            user). These requirements imply the need for a computer defined
            purely in software which can be standardized and made universally
            portable across hardware and hosts, preventing vendor lock-in, and
            incentivizing competition. We call this new device category a
            Personal Cloud Computer, or PC2.
          </p>

          <p>
            For users, a Personal Cloud Computer enables the Internet to be
            incrementally upgraded. The PC2 would sit like an overlay on top of
            current web apps, mediating the ability of Internet giants to lock
            away data and functionality. Rather than being stuck with fixed
            features, PC2 owners could learn to extend existing apps or could
            purchase modifications from independent developers. Data from one
            social app could be ported into another, or could be used to
            generate higher quality search and feed results. We already see some
            of this dynamic with browser extensions, but in a restricted way.
            Beyond upgrades, the PC2 would also create a new design space for
            distributed software: programs that are intended from the start to
            be extended, modified, or ported into new contexts. Video and photo
            filters could be added or removed from apps at will, favorite text
            editing tools could be reused wherever text is found, and data like
            social connections could be automatically integrated into any
            context the user needed.
          </p>

          <p>
            Developers would benefit from this model too. When a user owns a
            distributed computing platform, the developer can write software
            without worrying about infrastructure. New developers can rely on
            user-owned social graphs, and focus on writing great programs,
            instead of bootstrapping new networks. And since users operate the
            software, developers won’t incur the same legal liabilities that
            plague software companies today—publishing software becomes like
            publishing a book: it would enjoy the full protection of free speech
            laws. Finally, the coordination costs for code changes would be
            minimized as much as possible. When all code is open, you can
            &quot;inspect source&quot; a full stack program and reuse or extend
            any bit you want.
          </p>

          <p>
            Realizing this vision means revolution, both in the Copernican-sense
            and the social-sense. Applications put software companies at the
            center of our society, with users revolving around them. Users are
            forced to come to the software. The Personal Cloud Computer puts the
            user at the center and returns to them control over their data,
            their software, and their connections. What’s lost in pure
            industrial efficiency will be regained in system resilience and
            general market expansion. More importantly, this vision is one of an
            empowered individual. Modern technology enforces civil quiescence
            through homogeneity and control. If software is the best tool we
            have for solving societal issues, how much more could we do if our
            computers were our own?
          </p>

          <p>
            {" "}
            To find out{" "}
            <a
              className="hover:font-normal"
              href="https://docs.opfn.co"
              target="_blank"
            >
              read the PLAN
            </a>
          </p>
        </section>

        <section>
          <h2 className="my-4">Contact</h2>
          <p>
            <a href="mailto:founders@opfn.co">founders@opfn.co</a>
          </p>
          <p>
            <a href="https://docs.opfn.co">Documentation</a>
          </p>
        </section>
      </main>
    </div>
  );
}
