import React from "react";

export default function About() {
  return (
    <div>
      <main className="content-zone mx-auto pt-24 px-4 mb-12">
        <section className="mb-24 min-h-[70vh] flex gap-8 md:flex-row content-stretch flex-col">
          <div className="w-full">
            <div className="sticky top-24">
              <h1>
                <img
                  alt="Packrat by OPFN"
                  src="/images/packrat/packrat-lockup-color.svg"
                />
              </h1>
              <h2>Next-generation browser history from OPFN</h2>
              <a href="#">Download for Chrome</a>
            </div>
          </div>
          <div className="w-full md:px-8">
            <div className="relative z-20 w-full h-full">
              {/* Div for gradient overlay */}
            </div>
            <img
              alt="Screenshot of the packrat extension showing a handful of pages archived. A large button reads: share current page"
              src="/images/packrat/hero-screenshot.png"
              className="rounded-2xl border-gray-300 border relative top-[-100%]"
            />
          </div>
        </section>
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            <div>
              <h2>Save your own copy of the web</h2>
              <p>
                Packrat archives every webpage you visit locally to your
                computer.
              </p>
            </div>
            <div className="bg-black w-full h-52"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black w-full h-52"></div>
            <div>
              <h2>Share pages with one click</h2>
              <p>Send specific archived pages directly to friends.</p>
              <p>
                All data is sent directly with a peer-to-peer transfer, OPFN
                never sees the content of your web archives.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="w-full text-center">Download for Chrome</h2>
          <p className="max-w-96 text-center text-pretty mx-auto">
            Packrat is currently available as an extension for Chrome and
            Chromium-based browsers.
          </p>
        </section>
        <section className="mb-24">
          <h2>FAQ</h2>
          <details>
            <summary>What else can I do with my archives?</summary>
            <p>
              Lots! Packrat lets you export your archived pages as WACZ files
              which are supported by various web archiving tools such as{" "}
              <a href="https://webrecorder.net/browsertrix" target="_blank">
                Browsertrix
              </a>{" "}
              and can be viewed or embedded in your own content using{" "}
              <a href="https://webrecorder.net/replaywebpage" target="_blank">
                ReplayWeb.page
              </a>
              .
            </p>
            <p>
              WACZs are also just ZIP files. If you unzip them they'll reveal
              their component WARCs (another web archiving format) that is
              compatible with other tools.
            </p>
          </details>
        </section>
        <div className="content-zone my-opfn flex flex-row space-between items-center">
          <hr className="horizontal-bars" />
        </div>
        <section>
          <h2 className="text-center mb-6">Why we built Packrat</h2>
          <div className="flex justify-center w-full">
            <article className="max-w-[90ch] prose">
              <p>
                We believe that browser history is one of the most
                un-iterated-upon features shipped in browsers today. In recent
                years other companies have stepped in to help fill this
                innovation void. Obsidian has released{" "}
                <a href="https://obsidian.md/clipper" target="_blank">
                  Web Clipper
                </a>{" "}
                which enables users to extract key text and information from
                pages they visit as Markdown to save in their own notes.
                Webrecorder maintains{" "}
                <a href="https://webrecorder.net/archivewebpage">
                  ArchiveWeb.page
                </a>{" "}
                which allows users to create focused, curated web archives of
                content they care about. We think that both of these examples
                are great tools, but they rely on the user making curatorial
                decisions about what content they deem valuable. Other tools
                like <a href="https://archivebox.io/">ArchiveBox</a> require
                users to host a dedicated server to handle extraction and
                preservation of content — a much more cohesive record of what
                was browsed, but at the added cost that comes with running
                infrastructure.
              </p>
              <p>
                We think that there is opportunity for a middle ground between
                these tools. Building upon Webrecorder's work enabling fully
                browser-based capture and replay of web archives, Packrat seeks
                to offer the same ease of use afforded by ArchiveWeb.page but
                with a material-design compliant user interface focused less on
                curation.{" "}
                <a
                  href="https://developer.chrome.com/blog/extension-side-panel-launch"
                  target="_blank"
                >
                  Chrome's Side Panel API
                </a>{" "}
                (launched in 2022) allows us to showcase the user's archived
                pages directly beside the current page enabling a seamless
                transition between live web content and navigating archived
                pages.
              </p>
              <h3>Challenges</h3>
              <p>
                Extensions aren't without their limitations, the biggest one we
                face is our use of the Chrome Developer Tools API which, for
                well-intentioned security reasons, displays a persistent banner
                above the current page telling the user that an extension is
                "debugging the page". While users can hide this by launching
                their browser with the{" "}
                <code>--silent-debugger-extension-api</code> command line flag
                if they are sufficiently motivated to do so, ultimately we are
                restricted by the browser environment.
              </p>
              <p>
                Webtorrent is close to a perfect solution for hosting
                decentralized web archives, but it still isn't supported in most
                major torrent clients as of publishing. Unlike most other
                standard torrent clients, Webtorrent uses WebRTC to communicate
                between peers.{" "}
                <a href="https://github.com/arvidn/libtorrent/pull/4123">
                  While WebRTC support was added to libtorrent
                </a>{" "}
                (a common C++ library used by many torrent clients) in 2020, as
                of publishing it is hidden behind a compiler flag and no release
                of libtorrent has shipped with it enabled by default. In
                practice, most clients follow the defaults of libtorrent and
                therefore don't support seeding to Webtorrent peers. While this
                doesn't pose a direct problem for Packrat — our users' peers are
                other Webtorrent instances — having this enabled in libtorrent
                by default <em>would</em> enable other interesting decentralized
                web archive hosting projects.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
