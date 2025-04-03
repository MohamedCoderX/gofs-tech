import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "GOFS Technology - Software Development Services",
  description:
    "GOFS Technology provides web development, mobile app development, and digital marketing services.",
  keywords:
    "software development, web development, mobile apps, digital marketing, GOFS Technology, IT solutions",
  url: "https://gofstech.com",
  image: "https://gofstech.com/og-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Preconnect & Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareCompany",
              "name": "GOFS Technology",
              "url": metadata.url,
              "description": metadata.description,
              "logo": "https://gofstech.com/logo.png",
            }),
          }}
        />
      </Head>
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
