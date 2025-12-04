
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TrendingDestinations from './components/TrendingDestinations';
import About from './components/About';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { Destination, BlogPost } from './types';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './constants';

const App: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [legalContent, setLegalContent] = useState<{title: string, content: string} | null>(null);

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <TrendingDestinations onSelectDestination={setSelectedDestination} />
        <About />
        <BlogSection onSelectPost={setSelectedBlogPost} />
        <Contact />
      </main>
      <Footer 
        onOpenPrivacy={() => setLegalContent({title: 'Privacy Policy', content: PRIVACY_POLICY})}
        onOpenTerms={() => setLegalContent({title: 'Terms of Service', content: TERMS_OF_SERVICE})}
      />

      {/* Destination Modal */}
      <Modal 
        isOpen={!!selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
        title={selectedDestination?.title || ''}
      >
        {selectedDestination && (
          <div>
            <img src={selectedDestination.image} alt={selectedDestination.title} className="w-full h-64 object-cover rounded-lg mb-6"/>
            <div className="flex justify-between items-center mb-6">
              <span className="bg-ocean-blue text-white px-3 py-1 rounded-full text-sm font-bold">{selectedDestination.duration}</span>
              <span className="text-2xl font-bold text-sunset-gold">${selectedDestination.price.toLocaleString()}</span>
            </div>
            <h4 className="text-xl font-bold text-ocean-blue mb-4">Itinerary</h4>
            <div className="space-y-4">
              {selectedDestination.itinerary.map((day) => (
                <div key={day.day} className="flex border-l-4 border-sunset-gold pl-4">
                  <div>
                    <p className="font-bold text-gray-800">Day {day.day}: {day.title}</p>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#contact" onClick={() => setSelectedDestination(null)} className="inline-block bg-sunset-gold text-white font-bold py-3 px-8 rounded-full hover:bg-ocean-blue-dark transition-all duration-300">
                Inquire About This Trip
              </a>
            </div>
          </div>
        )}
      </Modal>

      {/* Blog Post Modal */}
      <Modal 
        isOpen={!!selectedBlogPost} 
        onClose={() => setSelectedBlogPost(null)} 
        title={selectedBlogPost?.title || ''}
      >
        {selectedBlogPost && (
          <div className="prose max-w-none">
            <img src={selectedBlogPost.image} alt={selectedBlogPost.title} className="w-full h-64 object-cover rounded-lg mb-6"/>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {selectedBlogPost.content}
            </div>
          </div>
        )}
      </Modal>

      {/* Legal Modal */}
      <Modal 
        isOpen={!!legalContent} 
        onClose={() => setLegalContent(null)} 
        title={legalContent?.title || ''}
      >
        {legalContent && (
          <div className="prose max-w-none">
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {legalContent.content}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
