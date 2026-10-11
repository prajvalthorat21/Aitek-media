import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Aitekmedia",
  },
  description:
    "Connect with our growth strategists in Pune, India to discuss your business challenges across SEO, AI Search, performance marketing, creative, websites and automation.",
  alternates: {
    canonical: "https://www.aitekmedia.com/contact",
  },
  openGraph: {
    title: "Contact Us | Aitekmedia",
    description:
      "Connect with our growth strategists in Pune, India to discuss your business challenges across SEO, AI Search, performance marketing, creative, websites and automation.",
    url: "https://www.aitekmedia.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
