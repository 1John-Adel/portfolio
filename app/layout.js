import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import Nav from "@/components/NavBar";
import { useTheme } from "@/components/themeBtn";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "John Adel — Software Engineer",
  description:
    "Computer Science & Artificial Intelligence student specializing in high-precision interactive experiences, performant software systems, and modern web architectures.",
  openGraph: {
    title: "John Adel — Software Engineer",
    description:
      "I am a Computer Science & Artificial Intelligence student at Helwan University with an obsession for software engineering, performant software systems, and tactile digital interfaces.",
    url: "https://john-pfolio.vercel.app",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "John Adel Portfolio Preview",
      },
    ],
    siteName: "John Adel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light' || savedTheme === null) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <BootstrapClient />
        <Nav />
        {children}
      </body>
    </html>
  );
}
