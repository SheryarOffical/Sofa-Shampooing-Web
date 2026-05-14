import type { Metadata } from 'next';
import './globals.css';
import { Archivo, Inter, JetBrains_Mono, Fraunces } from 'next/font/google';

const fontDisplay = Archivo({
  subsets: ['latin'],
  weight: ['500', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});
const fontSans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});
const fontSerif = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sofashampooingdubai.com'),
  title: {
    default: 'Sofa Cleaning Dubai | Sofa Deep Shampoo & Steam Cleaning UAE | Al Haya',
    template: '%s | Al Haya Sofa Care UAE',
  },
  description: 'Al Haya Sofa Care UAE — Professional sofa deep shampoo & steam cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Stain removal, leather care, pet hair removal, same-day at-home service. Call +971547199189.',
  keywords: [
    // Dubai — primary
    'sofa cleaning Dubai',
    'sofa shampooing Dubai',
    'sofa deep cleaning Dubai',
    'sofa deep shampoo cleaning Dubai',
    'sofa steam cleaning Dubai',
    'upholstery cleaning Dubai',
    'couch cleaning Dubai',
    'sofa stain removal Dubai',
    'leather sofa cleaning Dubai',
    'sofa cleaning near me Dubai',
    'best sofa cleaning Dubai',
    'professional sofa cleaning Dubai',
    'at home sofa cleaning Dubai',
    'same day sofa cleaning Dubai',
    'fabric sofa cleaning Dubai',
    'velvet sofa cleaning Dubai',
    'sofa sanitization Dubai',
    'sofa odor removal Dubai',
    'pet hair removal sofa Dubai',
    'sofa washing service Dubai',
    'sofa cleaning price Dubai',
    'sofa cleaning JVC Dubai',
    'sofa cleaning Downtown Dubai',
    'sofa cleaning Business Bay',
    'sofa cleaning Deira',
    'sofa cleaning Bur Dubai',
    'sofa cleaning Al Barsha',
    'sofa cleaning Jumeirah',
    'sofa cleaning Marina Dubai',
    'sofa cleaning Palm Jumeirah',
    'sofa cleaning Dubai Hills',
    // Sharjah
    'sofa cleaning Sharjah',
    'sofa shampooing Sharjah',
    'sofa deep cleaning Sharjah',
    'upholstery cleaning Sharjah',
    'sofa steam cleaning Sharjah',
    'sofa cleaning Al Nahda Sharjah',
    'sofa cleaning Muwaileh Sharjah',
    // Ajman
    'sofa cleaning Ajman',
    'sofa deep cleaning Ajman',
    'sofa shampooing Ajman',
    'upholstery cleaning Ajman',
    // Abu Dhabi
    'sofa cleaning Abu Dhabi',
    'sofa deep cleaning Abu Dhabi',
    'sofa shampooing Abu Dhabi',
    'sofa steam cleaning Abu Dhabi',
    'sofa sanitization Abu Dhabi',
    'upholstery cleaning Abu Dhabi',
    'sofa cleaning Khalifa City',
    'sofa cleaning Al Reem Island',
    'sofa cleaning Yas Island',
    // Al Ain & RAK
    'sofa cleaning Al Ain',
    'sofa cleaning Ras Al Khaimah',
    'sofa cleaning RAK',
    // General UAE
    'sofa deep shampoo cleaning UAE',
    'sofa steam cleaning UAE',
    'professional sofa cleaning UAE',
    'best sofa cleaning UAE',
    'Al Haya Sofa Care UAE',
    'sofa cleaning service UAE',
    // Arabic keywords
    'تنظيف كنب دبي',
    'غسيل كنب دبي',
    'تنظيف كنب ابوظبي',
    'تنظيف كنب الشارقة',
    'تنظيف انتريه دبي',
  ],
  authors: [{ name: 'Al Haya Sofa Care UAE', url: 'https://sofashampooingdubai.com' }],
  creator: 'Al Haya Sofa Care UAE',
  publisher: 'Al Haya Sofa Care UAE',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Sofa Deep Shampoo & Steam Cleaning UAE | Al Haya Sofa Care',
    description: 'Professional sofa deep shampoo & steam cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Same-day at-home service, eco-friendly, starting AED 79. Call +971547199189.',
    url: 'https://sofashampooingdubai.com',
    siteName: 'Al Haya Sofa Care UAE',
    locale: 'en_AE',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Al Haya Sofa Deep Cleaning UAE — Professional At-Home Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofa Deep Shampoo & Steam Cleaning UAE | Al Haya',
    description: 'Professional sofa cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Same-day service. Call +971547199189.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sofashampooingdubai.com',
  },
  verification: {
    // TODO: Replace with your actual Google Search Console verification code
    // Get it from: https://search.google.com/search-console → Add property → HTML tag method
    google: '0A5EubbkI_w7hewd0KWmtwVyVIVpTHiIDuCm4brgHoQ',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sofashampooingdubai.com',
  name: 'Al Haya Sofa Care UAE',
  alternateName: [
    'Al Haya Sofa Cleaning Dubai',
    'Al Haya Cleaning Services UAE',
    'Alhaya Sofa Care',
  ],
  description: 'Professional sofa deep shampoo & steam cleaning services across UAE. Specializing in sofa cleaning, stain removal, leather care, pet hair removal and upholstery sanitization in Dubai, Sharjah, Ajman, Abu Dhabi, Al Ain and Ras Al Khaimah.',
  url: 'https://sofashampooingdubai.com',
  telephone: '+971547199189',
  email: 'info@sofashampooingdubai.com',
  image: 'https://sofashampooingdubai.com/og-image.jpg',
  logo: 'https://sofashampooingdubai.com/favicon.svg',
  priceRange: 'AED 39 - AED 299',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  openingHours: 'Mo-Su 07:00-22:00',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '07:00', closes: '22:00' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 25.2048, longitude: 55.2708 },
  areaServed: [
    { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
    { '@type': 'City', name: 'Sharjah', '@id': 'https://www.wikidata.org/wiki/Q182888' },
    { '@type': 'City', name: 'Ajman', '@id': 'https://www.wikidata.org/wiki/Q171677' },
    { '@type': 'City', name: 'Abu Dhabi', '@id': 'https://www.wikidata.org/wiki/Q61750' },
    { '@type': 'City', name: 'Al Ain' },
    { '@type': 'City', name: 'Ras Al Khaimah' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sofa Cleaning Services UAE',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Deep Cleaning UAE', description: 'Professional deep shampoo cleaning for all sofa types across UAE' }, price: '99', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Shampooing UAE', description: 'Professional foam shampoo treatment with quick dry technology' }, price: '79', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Steam Cleaning UAE', description: 'High-temperature steam cleaning that kills 99.9% of bacteria and germs' }, price: '89', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Stain Removal UAE', description: 'Coffee, food, ink and pet stain removal from all upholstery types' }, price: '49', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leather Sofa Cleaning UAE', description: 'Specialist pH-safe leather care and conditioning' }, price: '129', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Hair Removal UAE', description: 'Deep pet hair extraction from all fabric types' }, price: '39', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Sanitization UAE', description: 'Hospital-grade disinfection service — 99.9% bacteria removal' }, price: '49', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Velvet & Microfiber Sofa Cleaning UAE', description: 'Specialist cleaning for delicate velvet and microfiber upholstery' }, price: '99', priceCurrency: 'AED' },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Ahmed Al Mansouri' }, reviewBody: 'Best sofa cleaning service in Dubai. My sofa looks brand new after Al Haya deep cleaned it!' },
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Sarah Johnson' }, reviewBody: 'Amazing results! They removed all stains from my leather sofa in Abu Dhabi. Highly recommended.' },
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Mohammad Al Hashimi' }, reviewBody: 'Quick same-day service in Sharjah. The sofa shampoo cleaning was thorough and smells fresh.' },
  ],
  sameAs: [
    'https://wa.me/971547199189',
    'https://www.servedubai.com',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does sofa cleaning cost in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sofa cleaning in Dubai starts from AED 39 for pet hair removal, AED 79 for shampooing, AED 89 for steam cleaning, and AED 99 for deep cleaning. Leather sofa cleaning starts from AED 129. All prices include at-home doorstep service.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer sofa cleaning in Abu Dhabi?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! Al Haya Sofa Care UAE provides professional sofa deep shampoo and steam cleaning services across Abu Dhabi including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Muroor and more. WhatsApp +971547199189 to book.' },
    },
    {
      '@type': 'Question',
      name: 'How long does sofa cleaning take in UAE?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most sofa cleaning jobs take 1-3 hours depending on the size. Your sofa will be dry and ready to use within 2-4 hours after shampooing or steam cleaning.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day sofa cleaning across UAE?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! Al Haya Sofa Care UAE offers same-day sofa cleaning across Dubai, Sharjah, Ajman, Abu Dhabi, Al Ain and Ras Al Khaimah. WhatsApp us at +971547199189 to book your same-day slot.' },
    },
    {
      '@type': 'Question',
      name: 'Which areas in Dubai do you cover for sofa cleaning?',
      acceptedAnswer: { '@type': 'Answer', text: 'We cover all areas of Dubai including JVC, Downtown Dubai, Business Bay, Al Barsha, Jumeirah, Deira, Bur Dubai, Dubai Marina, JBR, Palm Jumeirah, Dubai Hills, Silicon Oasis, and Mirdif.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sofa shampoo cleaning and steam cleaning?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sofa shampoo cleaning uses professional foam shampoo to lift embedded dirt and stains from fabric fibers — ideal for general deep cleaning. Steam cleaning uses high-temperature vapor to sanitize and disinfect, killing 99.9% of bacteria and germs — ideal for hygiene-focused cleaning or homes with babies and pets. Al Haya Sofa Care UAE offers both methods and can combine them for best results.' },
    },
    {
      '@type': 'Question',
      name: 'Are your sofa cleaning products safe for children and pets?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, all our cleaning products are eco-friendly, non-toxic and completely safe for children and pets. We use premium, biodegradable shampoos specifically formulated for delicate upholstery fabrics.' },
    },
    {
      '@type': 'Question',
      name: 'Do you clean leather sofas in UAE?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer specialist leather sofa cleaning using pH-balanced solutions, deep conditioning and protective coating to restore and preserve your leather sofa. Service available across Dubai, Sharjah, Ajman and Abu Dhabi starting from AED 129.' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/hero-sofa.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta name="coverage" content="United Arab Emirates" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body><div id="page-wrapper" style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>{children}</div></body>
    </html>
  );
}
