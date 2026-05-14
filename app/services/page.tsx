import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Sofa Deep Shampoo & Steam Cleaning Services UAE | Al Haya Sofa Care',
  description: 'Professional sofa deep shampoo & steam cleaning services across UAE. Deep cleaning (AED 99), shampooing (AED 79), steam cleaning, stain removal, leather care, pet hair removal. Same-day at-home service in Dubai, Sharjah, Ajman & Abu Dhabi.',
  keywords: [
    // Service keywords
    'sofa deep shampoo cleaning UAE',
    'sofa steam cleaning UAE',
    'professional sofa cleaning UAE',
    'sofa cleaning services Dubai',
    'sofa deep cleaning Dubai',
    'sofa shampooing service UAE',
    'sofa steam cleaning Dubai',
    'leather sofa cleaning UAE',
    'sofa stain removal UAE',
    'upholstery cleaning UAE',
    'sofa sanitization UAE',
    'pet hair removal sofa UAE',
    'velvet sofa cleaning UAE',
    'microfiber sofa cleaning UAE',
    'sofa odor removal UAE',
    'sofa fabric protection UAE',
    // Location + service combos
    'sofa cleaning services Abu Dhabi',
    'sofa cleaning services Sharjah',
    'sofa cleaning services Ajman',
    'sofa cleaning price UAE',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/services' },
  openGraph: {
    title: 'Sofa Deep Shampoo & Steam Cleaning Services UAE | Al Haya',
    description: 'Complete sofa cleaning services across UAE: deep shampoo, steam cleaning, stain removal, leather care & more. At-home same-day service. Starting AED 79.',
    url: 'https://sofashampooingdubai.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
