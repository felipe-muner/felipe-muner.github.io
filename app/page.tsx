import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Felipe Muner</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Topic 1: Yoga */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Yoga</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Yoga & Wellness</h2>
              <p className="text-gray-600 mb-4">Discover the transformative power of yoga for mind, body, and spirit. Expert guidance for all levels.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Join Now</span>
                <Link href="/yoga" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          
          {/* Topic 2: Cryptocurrency */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Crypto</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Cryptocurrency</h2>
              <p className="text-gray-600 mb-4">Navigate the world of digital assets with expert insights, market analysis, and investment strategies.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Learn More</span>
                <Link href="/crypto" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          
          {/* Topic 3: Software Development */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Dev</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Software Development</h2>
              <p className="text-gray-600 mb-4">Modern web development techniques, best practices, and project showcases from an experienced developer.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">View Projects</span>
                <Link href="/development" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Digital Space</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I&apos;m passionate about yoga, cryptocurrency, and software development. This site shares my expertise
            and insights across these diverse but interconnected fields.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
              <p>Bringing mindfulness from yoga practice into technology and finance.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Technical Experience</h3>
              <p>Over a decade of software development expertise across multiple technologies.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Innovative Thinking</h3>
              <p>Combining traditional practices with cutting-edge technological solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}