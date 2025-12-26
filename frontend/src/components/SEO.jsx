import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/images/logo.png',
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = '/images/logo.png',
  canonicalUrl,
  author = 'Sri Rudra Foods',
  robots = 'index, follow',
  type = 'website',
  structuredData,
}) => {
  const siteUrl = 'https://srirudrafoods.com'
  const fullOgUrl = ogUrl || canonicalUrl || siteUrl
  const fullCanonicalUrl = canonicalUrl || fullOgUrl
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
  const fullTwitterImage = twitterImage.startsWith('http') ? twitterImage : `${siteUrl}${twitterImage}`
  
  const defaultTitle = 'Sri Rudra Foods - Premium Indian Spices & Masalas | Organic & FSSAI Certified'
  const defaultDescription = 'Buy premium quality, 100% organic, FSSAI certified Indian spices and masalas online. Authentic Arogya spices including turmeric, red chili, coriander, cumin powder. Fast delivery across India. Shop now!'
  const defaultKeywords = 'Indian spices online, organic spices, FSSAI certified spices, buy spices online, turmeric powder, red chili powder, coriander powder, cumin powder, masalas online, Arogya spices, Nellore spices, Andhra Pradesh spices, premium spices, traditional Indian spices, spice delivery India, Krishnapatnam spices, Muthukur spices, SPSR Nellore spices, buy Indian masalas, organic spice powders, authentic Indian flavors, spice company India, online spice store, wholesale spices, retail spices, Indian cooking spices, South Indian masalas, North Indian spices, garam masala, sambar powder, rasam powder, biryani masala, chicken masala, mutton masala, chaat masala, pepper powder, Indian spice manufacturer, spice exporter India'

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sri Rudra Foods",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "description": "Premium quality, 100% organic, FSSAI certified Indian spices and masalas",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Krishnapatnam",
      "addressLocality": "Muthukur Mandal",
      "addressRegion": "SPSR Nellore District",
      "addressCountry": "IN",
      "postalCode": ""
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9100696669",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "te", "hi"]
    },
    "sameAs": []
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="topic" content="Indian Spices, Masalas, Organic Food Products" />
      <meta name="subject" content="Premium Indian Spices and Masalas" />
      <meta name="classification" content="Food & Beverage, Spices, Organic Products" />
      <meta name="category" content="Food Products, Spices, Organic Food" />
      <meta name="copyright" content="Sri Rudra Foods" />
      <meta name="designer" content="Sri Rudra Foods" />
      <meta name="reply-to" content="info@srirudrafoods.com" />
      <meta name="owner" content="Sri Rudra Foods" />
      <meta name="url" content={fullCanonicalUrl} />
      <meta name="identifier-URL" content={fullCanonicalUrl} />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={title || defaultTitle} />
      <meta name="category" content="Food & Beverage" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogTitle || title || defaultTitle} />
      <meta property="og:site_name" content="Sri Rudra Foods" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="te_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullOgUrl} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title || defaultTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={fullTwitterImage} />
      <meta name="twitter:image:alt" content={twitterTitle || ogTitle || title || defaultTitle} />
      <meta name="twitter:site" content="@srirudrafoods" />
      <meta name="twitter:creator" content="@srirudrafoods" />
      
      {/* Additional Meta Tags */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Krishnapatnam, Muthukur Mandal, SPSR Nellore District, Andhra Pradesh" />
      <meta name="geo.position" content="14.4426;79.9864" />
      <meta name="ICBM" content="14.4426, 79.9864" />
      <meta name="DC.title" content={title || defaultTitle} />
      <meta name="DC.creator" content="Sri Rudra Foods" />
      <meta name="DC.subject" content="Indian Spices, Masalas, Organic Food" />
      <meta name="DC.description" content={description || defaultDescription} />
      <meta name="DC.publisher" content="Sri Rudra Foods" />
      <meta name="DC.contributor" content="Sri Rudra Foods" />
      <meta name="DC.date" content={new Date().toISOString()} />
      <meta name="DC.type" content="Text" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={fullCanonicalUrl} />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="India" />
      <meta name="DC.rights" content="Copyright Sri Rudra Foods" />
      
      {/* Apple Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Sri Rudra Foods" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#DC2626" />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  )
}

export default SEO

