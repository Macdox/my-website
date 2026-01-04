import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import LoaderOverlay from "@/components/LoaderOverlay";
import LenisProvider from "@/components/LenisProvider";
import LoadingScreen from "@/components/LoadingScreen";


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Maddox - UI/UX Designer & Developer</title>
        <meta name="description" content="Portfolio of Maddox - UI/UX Designer and Developer. Showcasing modern web design and development projects." />
        <link rel="icon" type="image/svg+xml" href="/Logo.svg" />
        <link rel="icon" href="/Logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`min-h-screen bg-[#F9F9F9] ${roboto.className}`} suppressHydrationWarning={true}>
        <LoadingScreen />
        <LenisProvider>
          <LoaderOverlay />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
