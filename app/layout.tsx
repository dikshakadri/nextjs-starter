import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: './fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Thin.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    }
  ],
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Next JS starter",
  description: "Initial Setup of Nextjs 15, OAuth setup by Github Added Navbar with Signin/out, Added Fonts, Tailwind classes and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
