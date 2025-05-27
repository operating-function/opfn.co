import React from "react";

export default function About() {
  return (
    <div>
      <main className="content-zone mx-auto pt-24 px-4 mb-12">
        <section>Hero</section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <section>
          <h2 className="w-full text-center">Download for Chrome</h2>
          <p className="max-w-96 text-center text-pretty mx-auto">
            Packrat is currently available as an extension for Chrome and
            Chromium-based browsers.
          </p>
        </section>
      </main>
    </div>
  );
}
