import { Metadata } from 'next';
import Link from 'next/link';

// Define the topics data
const topics = {
  'yoga': {
    name: 'Yoga & Wellness',
    description: 'Discover the transformative power of yoga for mind, body, and spirit. Expert guidance for all levels.',
    longDescription: `
      Yoga is more than just physical exercise—it's a holistic practice that promotes balance between body, mind, and spirit. 
      As a dedicated practitioner and teacher, I share insights on various yoga styles, mindfulness techniques, 
      and wellness practices that can transform your daily life.
      
      Whether you're a beginner looking to start your yoga journey or an experienced practitioner seeking to deepen your practice, 
      you'll find valuable resources here to support your wellness goals.
    `,
    keyPoints: [
      'Yoga poses (asanas) for strength, flexibility, and balance',
      'Breathing techniques (pranayama) for stress reduction',
      'Meditation practices for mental clarity',
      'Mindfulness approaches for everyday life',
      'Holistic wellness strategies beyond the mat',
    ],
    colorGradient: 'from-purple-400 to-indigo-500',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
    relatedArticles: [
      {title: 'The Science Behind Yoga Benefits', slug: '/articles/yoga-science'},
      {title: 'Morning Yoga Routine for Beginners', slug: '/articles/morning-yoga'},
      {title: 'Integrating Mindfulness into Your Workday', slug: '/articles/mindful-work'},
    ]
  },
  'crypto': {
    name: 'Cryptocurrency',
    description: 'Navigate the world of digital assets with expert insights, market analysis, and investment strategies.',
    longDescription: `
      Cryptocurrency represents one of the most significant financial innovations of our time. Having been involved 
      in this space since its early days, I provide analysis, insights, and educational content about blockchain 
      technology, different cryptocurrencies, and investment strategies.
      
      My approach emphasizes understanding the fundamental technology and use cases behind crypto assets, 
      rather than short-term speculation. I focus on long-term trends, risk management, and the evolving 
      regulatory landscape.
    `,
    keyPoints: [
      'Blockchain technology fundamentals',
      'Analysis of major cryptocurrencies and protocols',
      'DeFi (Decentralized Finance) applications and opportunities',
      'Risk management strategies for crypto investing',
      'Regulatory developments and their impacts',
    ],
    colorGradient: 'from-blue-400 to-teal-500',
    buttonColor: 'bg-teal-600 hover:bg-teal-700',
    relatedArticles: [
      {title: 'Understanding Blockchain Consensus Mechanisms', slug: '/articles/consensus-mechanisms'},
      {title: 'DeFi vs. Traditional Finance: Key Differences', slug: '/articles/defi-vs-tradfi'},
      {title: 'Crypto Portfolio Diversification Strategies', slug: '/articles/crypto-diversification'},
    ]
  },
  'development': {
    name: 'Software Development',
    description: 'Modern web development techniques, best practices, and project showcases from an experienced developer.',
    longDescription: `
      With over a decade of experience in software development, I share insights, tutorials, and best practices 
      for modern web development. My expertise spans frontend frameworks, backend systems, cloud architectures, 
      and DevOps practices.
      
      I believe in clean code, maintainable architecture, and leveraging the right tools for each project. 
      Through articles, case studies, and code examples, I aim to help developers of all levels improve their 
      skills and build better software.
    `,
    keyPoints: [
      'Frontend development with React, Next.js, and modern JavaScript',
      'Backend systems with Node.js, Python, and various databases',
      'Cloud architecture and deployment strategies',
      'Performance optimization techniques',
      'Software design patterns and best practices',
    ],
    colorGradient: 'from-amber-400 to-orange-500',
    buttonColor: 'bg-orange-600 hover:bg-orange-700',
    relatedArticles: [
      {title: 'Building High-Performance React Applications', slug: '/articles/react-performance'},
      {title: 'Serverless Architecture: When to Use It', slug: '/articles/serverless-guide'},
      {title: 'Test-Driven Development in Practice', slug: '/articles/tdd-guide'},
    ]
  },
};

type Props = {
  params: { slug: string }
};

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return [
    { slug: 'yoga' },
    { slug: 'crypto' },
    { slug: 'development' }
  ];
}

// Generate metadata for each topic page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = topics[params.slug as keyof typeof topics];
  
  if (!topic) {
    return {
      title: 'Topic Not Found',
    };
  }
  
  return {
    title: `${topic.name} | Felipe Muner`,
    description: topic.description,
    openGraph: {
      title: `${topic.name} | Felipe Muner`,
      description: topic.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default function TopicPage({ params }: Props) {
  const topic = topics[params.slug as keyof typeof topics];
  
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
          <p className="mb-6">The topic you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Topic Banner */}
          <div className={`h-64 rounded-lg bg-gradient-to-r ${topic.colorGradient} flex items-center justify-center`}>
            <span className="text-white text-4xl font-bold">{topic.name}</span>
          </div>
          
          {/* Topic Information */}
          <div>
            <h1 className="text-4xl font-bold mb-3">{topic.name}</h1>
            <p className="text-lg mb-6">{topic.description}</p>
            
            <div className="prose max-w-none mb-8">
              <p>{topic.longDescription}</p>
            </div>
            
            <a href="#articles" className={`${topic.buttonColor} text-white px-6 py-3 rounded-md text-lg font-semibold inline-block`}>
              Explore Articles
            </a>
          </div>
        </div>
        
        {/* Key Topics Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Key Topics Covered</h2>
          <div className="space-y-4">
            {topic.keyPoints.map((point, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
                <div className="flex items-start">
                  <span className={`mr-3 text-xl ${topic.buttonColor.replace('bg-', 'text-').replace('hover:', '')}`}>•</span>
                  <span className="text-lg">{point}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Articles Section */}
        <div className="mt-16" id="articles">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topic.relatedArticles.map((article, index) => (
              <a 
                key={index} 
                href={article.slug}
                className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className={`h-32 bg-gradient-to-r ${topic.colorGradient} flex items-center justify-center p-4`}>
                  <span className="text-white text-xl font-bold text-center">{article.title}</span>
                </div>
                <div className="p-4 flex justify-center">
                  <span className={`${topic.buttonColor} text-white px-4 py-2 rounded-md text-sm`}>Read Article</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 p-8 rounded-lg bg-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6">Subscribe to receive the latest insights and articles about {topic.name}</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border rounded-md flex-grow"
              />
              <button className={`${topic.buttonColor} text-white px-6 py-2 rounded-md`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Other Topics Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Other Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(topics)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, topicData]) => (
                <a 
                  key={slug} 
                  href={`/topics/${slug}`}
                  className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <div className={`h-32 bg-gradient-to-r ${topicData.colorGradient} flex items-center justify-center`}>
                    <span className="text-white text-2xl font-bold">{topicData.name}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{topicData.description}</p>
                    <div className="flex justify-end">
                      <span className={`${topicData.buttonColor} text-white px-4 py-2 rounded-md text-sm`}>
                        Explore
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}