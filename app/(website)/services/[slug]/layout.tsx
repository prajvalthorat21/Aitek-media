import type { Metadata } from "next";
import { SERVICES_DATA } from "@/lib/servicesData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: "Service | Aitekmedia",
    };
  }

  const title = `${service.title} | Aitekmedia`;
  const description =
    service.hero?.subheadline ||
    service.hero?.headline ||
    "AI-powered digital marketing and growth services by Aitekmedia in Pune, India.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `https://www.aitekmedia.com/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.aitekmedia.com/services/${slug}`,
      type: "website",
      images: [
        {
          url: "/assets/logo.png",
          width: 1200,
          height: 630,
          alt: `${service.title} — Aitekmedia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/logo.png"],
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
