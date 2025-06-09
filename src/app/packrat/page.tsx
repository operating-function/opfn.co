import React from "react";

export default function About() {
  return (
    <div>
      <main className="mx-auto mb-12">
        <section className="md:max-h-[70vh] flex justify-center pt-24 px-4 pb-8">
          <div className="flex gap-8 md:flex-row content-stretch flex-col max-w-4xl">
            <div className="w-full">
              <div className="sticky top-24 md:pt-40 flex flex-col items-center md:items-start">
                <img
                  alt="Packrat by OPFN"
                  src="/images/packrat/packrat-lockup-color.svg"
                  className="max-w-72 mb-2"
                />
                <h2 className="mb-6 font-bold text-pretty">
                  Next-generation browser history
                </h2>
                <a href="#" className="buttonstyle">
                  Install Chrome Extension
                </a>
              </div>
            </div>
            <div className="w-full md:px-8 flex justify-center">
              <img
                alt="Screenshot of the packrat extension showing a handful of pages archived. A large button reads: share current page"
                src="/images/packrat/hero-screenshot.png"
                className="rounded-2xl border-gray-300 border max-h-[512px] md:max-h-full relative"
              />
            </div>
          </div>
        </section>
        <div className="content-zone mb-12 flex flex-row space-between items-center">
          <hr className="horizontal-bars" />
        </div>
        <section className="mb-24 content-zone px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            <div>
              <h2 className="mb-4 font-bold">Save your own copy of the web</h2>
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
              <h2 className="mb-4 font-bold">Share pages with one click</h2>
              <p>Send specific archived pages directly to friends.</p>
              <p>
                All data is sent directly with a peer-to-peer transfer, OPFN
                never sees the content of your web archives.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24 content-zone px-4">
          <h2 className="w-full text-center mb-4 font-bold">Get Packrat!</h2>
          <p className="max-w-96 text-center text-pretty mx-auto">
            Packrat is currently available as an extension for Chrome and
            Chromium-based browsers.
          </p>
          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <a href="#" className="buttonstyle">
                Install Chrome Extension
              </a>
              <a href="https://github.com/operating-function/packrat">
                Download Source Code on Github
              </a>
            </div>
          </div>
        </section>
        <section className="mb-24 content-zone px-4">
          <h2 className="mb-4 font-bold">FAQ</h2>
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
          <details>
            <summary>What analytics information do you collect?</summary>
            <div className="prose max-w-none">
              <p>
                If analytics are enabled we collect the following anonymized
                data:
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tracking Identifier</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">ViewPage</th>
                    <td>
                      Triggers when a user clicks to view an archived page.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">TorrentCreated</th>
                    <td>
                      Triggers when a torrent is created for sharing archived
                      content. Tracks how many pages are included.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">PageArchived</th>
                    <td>Triggers when a page is successfully archived.</td>
                  </tr>
                  <tr>
                    <th scope="row">PageSize</th>
                    <td>
                      Logs the size of the archived page if available, rounded
                      to the nearest kilobyte.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">CookiesEnabled</th>
                    <td>Tracks if cookie archiving is enabled.</td>
                  </tr>
                  <tr>
                    <th scope="row">LocalstorageEnabled</th>
                    <td>Tracks if local storage archiving is enabled.</td>
                  </tr>
                  <tr>
                    <th scope="row">ScreenshotsEnabled</th>
                    <td>
                      Tracks if thumbnail screenshot archiving is enabled.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">AnalyticsEnabled</th>
                    <td>Tracks if analytics tracking is enabled.</td>
                  </tr>
                  <tr>
                    <th scope="row">SkippedDomains</th>
                    <td>
                      Logs the number of domains added to the skip list when
                      changed.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">TotalSize</th>
                    <td>
                      Tracks the total size of all archived content, rounded to
                      megabytes.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Started</th>
                    <td>
                      Triggered when the archiving process begins for a page.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Stopped</th>
                    <td>
                      Triggered when the archiving process is stopped, either
                      manually or for another reason.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                This information helps us understand if you're finding the
                features we've developed valuable! We self-host our analytics
                and we will not sell or reveal this data to third parties.
              </p>
            </div>
          </details>
        </section>
        <div className="content-zone my-opfn flex flex-row space-between items-center">
          <hr className="horizontal-bars" />
        </div>
        <section className="content-zone">
          <div className="flex justify-center w-full">
            <article className="max-w-[90ch] prose">
              <h2 className="mb-6">Why we built Packrat</h2>
              <p>
                We believe that browser history and bookmarks are some of the
                most un-iterated-upon features shipped in browsers today. In
                recent years other companies have stepped in to help fill this
                innovation void:
              </p>
              <ul>
                <li>
                  <p>
                    Obsidian has released{" "}
                    <a href="https://obsidian.md/clipper" target="_blank">
                      Web Clipper
                    </a>{" "}
                    which enables users to extract key text and information from
                    pages they visit as Markdown to save in their own notes.
                  </p>
                </li>
                <li>
                  <p>
                    Webrecorder maintains{" "}
                    <a href="https://webrecorder.net/archivewebpage">
                      ArchiveWeb.page
                    </a>{" "}
                    which allows users to create focused, curated web archives
                    of content they care about. ArchiveWeb.page is great, but
                    like Web Clipper it's ui is focused on the user making
                    active curatorial decisions about what content they deem
                    valuable.
                  </p>
                </li>
                <li>
                  <p>
                    Other tools like{" "}
                    <a href="https://archivebox.io/">ArchiveBox</a> require
                    users to host a dedicated server to handle extraction and
                    preservation of content — a much more cohesive record of
                    what was browsed, but at the added cost that comes with
                    running infrastructure.
                  </p>
                </li>
              </ul>

              <p>
                We think that there is opportunity for a middle ground between
                these tools. Building upon Webrecorder's work enabling fully
                browser-based capture and replay of web archives, Packrat seeks
                to offer the same ease of use afforded by ArchiveWeb.page but
                with a new user interface focused less on curation.{" "}
                <a
                  href="https://developer.chrome.com/blog/extension-side-panel-launch"
                  target="_blank"
                >
                  Chrome's Side Panel API
                </a>{" "}
                (launched in 2022) allows us to showcase the user's archived
                pages directly beside the current page with the same Material 3
                design language adopted by Chrome, enabling a seamless
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
                doesn't pose a direct problem for Packrat — our peers are always
                other Packrat instances using Webtorrent — having this enabled
                in libtorrent by default <em>would</em> enable other interesting
                decentralized web archive hosting projects.
              </p>
              <hr />
              <p>
                We hope that you find Packrat useful, either as a case study or
                as a tool!
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
