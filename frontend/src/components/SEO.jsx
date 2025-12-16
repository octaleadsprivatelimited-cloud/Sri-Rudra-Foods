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
}) => {
  const siteUrl = 'https://srirudrafoods.com'
  const fullOgUrl = ogUrl || canonicalUrl || siteUrl
  const fullCanonicalUrl = canonicalUrl || fullOgUrl
  const defaultTitle = 'Sri Rudra Foods - Premium Indian Spices & Masalas'
  const defaultDescription = 'Premium quality, 100% organic, FSSAI certified Indian spices and masalas. Authentic Arogya spices delivered fresh to your doorstep across India.'
  const defaultKeywords = 'Indian spices, masalas, organic spices, FSSAI certified spices, Arogya spices, turmeric powder, red chili powder, coriander powder, cumin powder, Indian spices online, buy spices online, traditional spices, premium spices, Nellore spices, Andhra Pradesh spices, spice delivery, authentic Indian flavors'

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
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sri Rudra Foods" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullOgUrl} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title || defaultTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Additional Meta Tags */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Nellore, Andhra Pradesh" />
      <meta name="geo.position" content="14.4426;79.9864" />
      <meta name="ICBM" content="14.4426, 79.9864" />
    </Helmet>
  )
}

export default SEO

