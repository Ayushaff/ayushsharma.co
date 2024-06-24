import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo(){
  const title = 'Ayush Sharma | FullStack Developer';
  const description =
    "Hello, I'm Ayush Sharma, a FullStack Developer and pre-Final year student, crafting high-quality web, app, and SAAS solutions with a focus on shipping values and excellence.";

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ayush Sharma" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content="@ashutosh7i" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://ashutosh7i.dev/Profile.jpg" /> */}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://ashutosh7i.dev" /> */}
      <meta property="og:image" content="https://ashutosh7i.dev/Profile.jpg" />
      <meta property="og:image:alt" content="Ayush Sharma" />
      <meta property="og:locale" content="en_US" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ashutosh7i.dev" />

      {/* Additional */}
      <meta
        name="keywords"
        content="Ayush Sharma, ashutosh7i, FullStack Developer, MERN Stack, Web Development, Ayush Sharma Indore, Ayush Sharma UEC"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ayush Sharma",
          "url": "https://ashutosh7i.dev",
          "image": "https://ashutosh7i.dev/Profile.jpg",
          "sameAs": [
            "https://www.linkedin.com/in/ashutosh7i/",
            "https://github.com/ashutosh7i",
            // Add other social profiles
          ],
          "jobTitle": "FullStack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          },
          "alumniOf": "Acropolis Institute of Technology and Research",
          "location": "Indore"
        })}
      </script>
    </Helmet>
  );
};