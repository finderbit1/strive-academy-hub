import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
}

export const SEO = ({
  title = "Strivo Academy - Plataforma de Cursos de Programação Online | Transforme sua Carreira Tech",
  description = "Transforme sua carreira tech com a Strivo Academy. Acesso vitalício a +520 cursos de programação em Frontend, Backend, Mobile, Data Science e mais. Economize R$ 7.843/ano. Apenas R$ 497!",
  keywords = "cursos programação, desenvolvimento web, frontend, backend, mobile, data science, python, javascript, react, node.js, carreira tech, desenvolvedor, programador, cursos online, bootcamp programação",
  canonical = "https://strivo.com.br",
  ogImage = "https://strivo.com.br/lovable-uploads/05d06d17-f1c1-49a8-a7d8-42335226df2e.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false
}: SEOProps) => {
  const fullTitle = title.includes('Strivo Academy') ? title : `${title} | Strivo Academy`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Strivo Academy" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.country" content="Brazil" />
      <meta name="geo.placename" content="São Paulo" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Strivo Academy - Cursos de Programação" />
      <meta property="og:site_name" content="Strivo Academy" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Strivo Academy - Cursos de Programação" />
      <meta name="twitter:creator" content="@strivoacademy" />
      <meta name="twitter:site" content="@strivoacademy" />
      <meta name="twitter:domain" content="strivo.com.br" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Strivo Academy" />
      <meta name="application-name" content="Strivo Academy" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/src/main.tsx" as="script" />
      <link rel="preload" href="/logo strivo.png" as="image" />
      <link rel="preload" href="/lovable-uploads/05d06d17-f1c1-49a8-a7d8-42335226df2e.png" as="image" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
