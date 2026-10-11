import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aitekmedia.com"),
  title: {
    default: "AI-Powered Digital Marketing Agency in Pune | Aitekmedia",
    template: "%s | Aitekmedia",
  },
  description:
    "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}