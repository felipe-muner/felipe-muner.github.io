import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://felipe-muner.github.io'),
  title: 'Felipe Muner | Yoga, Crypto & Software Development',
  description: 'Explore insights on yoga practice, cryptocurrency investments, and software development from Felipe Muner, an expert across these diverse fields.',
  keywords: 'yoga, cryptocurrency, software development, web development, mindfulness, tech, blockchain, wellness, programming, next.js',
  openGraph: {
    title: 'Felipe Muner | Yoga, Crypto & Software Development',
    description: 'Explore insights on yoga practice, cryptocurrency investments, and software development from Felipe Muner.',
    url: 'https://felipe-muner.github.io/',
    siteName: 'Felipe Muner',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Yoga Products',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Muner | Yoga, Crypto & Software Development',
    description: 'Insights on yoga, cryptocurrency, and software development from an industry expert.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link href="/"><h1 className="text-3xl font-bold text-gray-900">Felipe Muner</h1></Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/yoga" className="text-gray-700 hover:text-indigo-600">Yoga</Link></li>
                <li><Link href="/crypto" className="text-gray-700 hover:text-indigo-600">Cryptocurrency</Link></li>
                <li><Link href="/development" className="text-gray-700 hover:text-indigo-600">Development</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Felipe Muner</h2>
                <p>Insights on yoga, crypto, and software development.</p>
                <p className="mt-4">© {new Date().getFullYear()} Felipe Muner. All rights reserved.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Topics</h3>
                <ul className="space-y-2">
                  <li><a href="/yoga" className="hover:text-indigo-400">Yoga & Wellness</a></li>
                  <li><a href="/crypto" className="hover:text-indigo-400">Cryptocurrency</a></li>
                  <li><a href="/development" className="hover:text-indigo-400">Software Development</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>Email: felipe.muner@gmail.com</li>
                  <li>GitHub: @felipe-muner</li>
                  <li>LinkedIn: /in/felipe-muner</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}