import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoga & Wellness | Felipe Muner',
  description: 'Discover the transformative power of yoga for mind, body, and spirit. Expert guidance for all levels.',
  openGraph: {
    title: 'Yoga & Wellness | Felipe Muner',
    description: 'Discover the transformative power of yoga for mind, body, and spirit. Expert guidance for all levels.',
    images: ['/og-image.jpg'],
  },
};

export default function YogaPage() {
  // Topic data
  const topic = {
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
  };
  
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
            <a 
              href="/crypto"
              className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-32 bg-gradient-to-r from-blue-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Cryptocurrency</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Navigate the world of digital assets with expert insights, market analysis, and investment strategies.</p>
                <div className="flex justify-end">
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700">
                    Explore
                  </span>
                </div>
              </div>
            </a>
            <a 
              href="/development"
              className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-32 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Software Development</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Modern web development techniques, best practices, and project showcases from an experienced developer.</p>
                <div className="flex justify-end">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700">
                    Explore
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}