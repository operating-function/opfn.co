import type { Metadata } from "next";
import Script from "next/script";
import React from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NoJsContent from "@/components/NoJsContent";

import "./globals.css";

const description =
  "An Operating function isn’t a device - it’s a computer defined as software. And it runs everywhere simultaneously.";

const metadataBase = new URL(process.env.BASE_URL as string);

const criticalFonts = [
  {
    path: "/website-assets/fonts/lmmonoproplt10-regular.otf",
    type: "font/otf",
  },
  {
    path: "/website-assets/fonts/BerkeleyMonoVariable-Regular.woff2",
    type: "font/woff2",
  },
  {
    path: "/website-assets/fonts/lmromancaps10-regular.otf",
    type: "font/otf",
  },
];

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  //maximumScale: 1.0,
  //userScalable: "no",
};

const timestamp = Date.now();

export const metadata: Metadata = {
  metadataBase,
  title: "The Operating Function Company",
  description,
  category: "technology",

  twitter: {
    card: "summary_large_image",
    site: "@opfnco",
    creator: "@opfnco",
    title: "The Operating Function Company",
    description,
    images: `https://opfn.co/twitter-image.jpeg`,

    // images: ["https://vaporware.network/images/vaporware-devices-30s-preview.jpeg"],
    // "card": "player",
    // "players": {
    //   playerUrl: "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/twitter-player-container",
    //   streamUrl: "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/twitter-player-container",
    //   height: 480,
    //   width: 480,
    // },
  },

  openGraph: {
    title: "The Operating Function Company",
    description,
    url: "https://opfn.co",
    siteName: "opfn.co",
    images: `https://opfn.co/opengraph-image.jpeg`,
    // images: ["https://vaporware.network/images/vaporware-devices-30s-preview.jpeg"],
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {false && (
          <style
            dangerouslySetInnerHTML={{
              __html: `
          body { display: none; }
          `,
            }}
          />
        )}

        {criticalFonts.map((font) => (
          <link
            key={font.path}
            rel="preload"
            href={`https://general-static-assets.nyc3.digitaloceanspaces.com${font.path}`}
            as="font"
            type={font.type}
            crossOrigin="anonymous"
          />
        ))}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .js-content { display: none; }
        .js-loaded .js-content { display: block; }
        .js-loaded .nojs-content { display: none; }
      `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        document.documentElement.classList.add('js-loaded');
      `,
          }}
        />
      </head>

      <body>
        {false && (
          <Script strategy="beforeInteractive">
            {`document.body.style.display = 'block';`}
          </Script>
        )}
        <NoJsContent />

        <div className="js-content">
          <header className="z-30 mx-auto sticky top-0 flex w-full justify-between">
            <Nav></Nav>
          </header>
          {children}
          <Footer></Footer>
        </div>
      </body>

      <Script id="matomo-analytics">
        {`
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["setDoNotTrack", true]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.vaporware.network/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '3']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
    </html>
  );
}
