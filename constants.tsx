
import React from 'react';
import { Destination, BlogPost, TeamMember } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/bali/800/600',
    title: 'Mystical Bali Escape',
    duration: '8 Days',
    price: 2400,
    rating: 4.8,
    itinerary: [
      { day: 1, title: 'Arrival in Ubud', description: 'Settle into your villa and enjoy a traditional Balinese dinner.' },
      { day: 2, title: 'Tegalalang Rice Terraces', description: 'Explore the iconic rice paddies and enjoy a coffee tasting.' },
      { day: 3, title: 'Sacred Monkey Forest', description: 'Visit the sanctuary and the ancient temples within.' },
      { day: 4, title: 'Mount Batur Sunrise Trek', description: 'Early morning hike to witness a breathtaking sunrise from the volcano summit.' },
      { day: 5, title: 'Spa Day & Relaxation', description: 'Indulge in a full-day traditional Balinese spa package.' },
      { day: 6, title: 'Nusa Penida Day Trip', description: 'Speedboat transfer to visit Kelingking Beach and Angel’s Billabong.' },
      { day: 7, title: 'Uluwatu Temple & Kecak Dance', description: 'Sunset views at the cliffside temple followed by a fire dance performance.' },
      { day: 8, title: 'Departure', description: 'Transfer to the airport for your flight home.' },
    ],
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/santorini/800/600',
    title: 'Santorini Sunset Romance',
    duration: '5 Days',
    price: 3200,
    rating: 4.9,
    itinerary: [
      { day: 1, title: 'Arrival in Oia', description: 'Check into your cliffside hotel and witness the famous sunset.' },
      { day: 2, title: 'Caldera Cruise', description: 'Sail to the volcano, swim in hot springs, and enjoy a meal on board.' },
      { day: 3, title: 'Wine Tasting Tour', description: 'Discover the unique volcanic wines of Santorini.' },
      { day: 4, title: 'Pyrgos & Megalochori', description: 'Explore the hidden traditional villages away from the crowds.' },
      { day: 5, title: 'Departure', description: 'Breakfast with a view before your private transfer to the airport.' },
    ],
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/kyoto/800/600',
    title: 'Cultural Kyoto Discovery',
    duration: '7 Days',
    price: 2800,
    rating: 4.7,
    itinerary: [
      { day: 1, title: 'Arrival & Gion District', description: 'Explore the historic geisha district and enjoy a traditional kaiseki dinner.' },
      { day: 2, title: 'Temples & Shrines', description: 'Visit Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.' },
      { day: 3, title: 'Arashiyama Bamboo Grove', description: 'Walk through the serene bamboo forest and visit the Tenryu-ji Temple.' },
      { day: 4, title: 'Tea Ceremony Experience', description: 'Learn the art of matcha in a traditional tea house.' },
      { day: 5, title: 'Nara Day Trip', description: 'Interact with the bowing deer and visit the giant Buddha at Todai-ji.' },
      { day: 6, title: 'Philosopher’s Path Walk', description: 'A reflective stroll along the canal lined with cherry trees.' },
      { day: 7, title: 'Departure', description: 'Shinkansen transfer back to Tokyo or Osaka for departure.' },
    ],
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/alps/800/600',
    title: 'Swiss Alps Escape',
    duration: '7 Days',
    price: 4500,
    rating: 5.0,
    itinerary: [
        { day: 1, title: 'Arrival & Fondue Delight', description: 'Arrive in Interlaken, check into your charming chalet, and indulge in a classic Swiss cheese fondue dinner with mountain views.' },
        { day: 2, title: 'Majestic Mountain Skiing', description: 'Hit the slopes of Grindelwald for a full day of world-class skiing or snowboarding, surrounded by breathtaking alpine scenery.' },
        { day: 3, title: 'Scenic Train Journey', description: 'Board the famous Jungfrau Railway to the "Top of Europe," witnessing panoramic vistas of snow-capped peaks and glaciers.' },
        { day: 4, title: 'Lake Brienz Boat Tour', description: 'Relax on a turquoise lake cruise visiting the Giessbach waterfalls.' },
        { day: 5, title: 'Chocolate Making Workshop', description: 'Create your own Swiss pralines with a master chocolatier.' },
        { day: 6, title: 'Lucerne Day Trip', description: 'Visit the Chapel Bridge and the Lion Monument in this historic city.' },
        { day: 7, title: 'Departure', description: 'Scenic train ride to Zurich airport.' },
    ],
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/patagonia/800/600',
    title: 'Patagonia Wilderness',
    duration: '10 Days',
    price: 5200,
    rating: 4.9,
    itinerary: [
      { day: 1, title: 'Arrival in Punta Arenas', description: 'Welcome dinner and briefing on the adventure ahead.' },
      { day: 2, title: 'Torres del Paine', description: 'Enter the national park and spot guanacos and rheas.' },
      { day: 3, title: 'Base of the Towers Hike', description: 'Challenging trek to the iconic granite peaks.' },
      { day: 4, title: 'Grey Glacier Boat Trip', description: 'Get up close to the massive blue ice wall.' },
      { day: 5, title: 'French Valley', description: 'Hike through the heart of the "W" circuit.' },
      { day: 6, title: 'Pampas Horseback Riding', description: 'Experience the gaucho lifestyle on a working estancia.' },
      { day: 7, title: 'Perito Moreno Glacier', description: 'Cross into Argentina to see the calving glacier.' },
      { day: 8, title: 'El Chaltén', description: 'Transfer to the trekking capital of Argentina.' },
      { day: 9, title: 'Mount Fitz Roy Viewpoint', description: 'Farewell hike with stunning mountain vistas.' },
      { day: 10, title: 'Departure', description: 'Transfer to El Calafate airport.' },
    ],
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/amalfi/800/600',
    title: 'Amalfi Coast Dream',
    duration: '6 Days',
    price: 3800,
    rating: 4.8,
    itinerary: [
      { day: 1, title: 'Arrival in Positano', description: 'Check into your cliffside hotel and enjoy an aperitivo.' },
      { day: 2, title: 'Path of the Gods', description: 'Hike the scenic trail high above the coastline.' },
      { day: 3, title: 'Capri by Private Boat', description: 'Explore the Blue Grotto and the Faraglioni rocks.' },
      { day: 4, title: 'Ravello Music Festival', description: 'Visit the gardens of Villa Cimbrone and enjoy a concert.' },
      { day: 5, title: 'Pompeii & Vesuvius', description: 'Guided tour of the ancient ruins and the volcano.' },
      { day: 6, title: 'Departure', description: 'Transfer to Naples airport.' },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/carryon/800/600',
    title: '10 Essentials for Your Carry-On',
    excerpt: 'Packing light is an art. We’ve compiled the top 10 must-have items that will make your flight more comfortable and your arrival seamless.',
    content: `Packing light is an art, but packing smart is a necessity. Here are the top 10 items you shouldn't fly without:

1. **Noise-Canceling Headphones:** Block out the engine drone and crying babies to arrive rested.
2. **Portable Charger:** Keep your devices powered up for entertainment and navigation upon landing.
3. **Reusable Water Bottle:** Stay hydrated without paying airport prices; just fill it up after security.
4. **Travel Pillow:** Essential for catching some sleep on long-haul flights without a stiff neck.
5. **Compression Socks:** Promote circulation and reduce swelling during those long hours seated.
6. **Kindle or Book:** Escape into a story when the in-flight entertainment fails or during takeoff/landing.
7. **Sanitizing Wipes:** Clean your tray table and armrests immediately upon sitting down.
8. **Lip Balm and Moisturizer:** Combat the dry cabin air to keep your skin feeling fresh.
9. **Pen and Notebook:** For customs forms or sudden bouts of inspiration (or just tic-tac-toe).
10. **Change of Clothes:** A fresh shirt and underwear are lifesavers if your checked bag goes on a separate vacation.

Pack these, and you'll be ready for anything your journey throws at you!`,
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/solo/800/600',
    title: 'Why Solo Travel is the Ultimate Confidence Booster',
    excerpt: 'Embarking on a journey alone can be transformative. Discover the profound benefits of solo travel and why it’s an experience everyone should try.',
    content: `Embarking on a journey alone can be transformative. It pushes you out of your comfort zone and forces you to rely on your own instincts.

**1. Total Freedom**
When you travel solo, you are the master of your itinerary. Want to spend three hours in a museum? Go ahead. Want to sleep in until noon? No problem. There’s no compromise, only pure freedom.

**2. Meeting New People**
Ironically, traveling alone often leads to more social interaction. Without a companion to fall back on, you're more approachable and more likely to strike up conversations with locals and fellow travelers.

**3. Self-Discovery**
You learn a lot about yourself when you're navigating a foreign city or dining alone. You discover your strengths, your resilience, and your ability to adapt.

**4. Boosting Confidence**
Every problem you solve, from missed trains to language barriers, builds a deep sense of competence. You return home knowing that you can handle whatever life throws your way.

Solo travel isn't just about seeing the world; it's about seeing yourself in a new light.`,
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/portugal/800/600',
    title: 'Hidden Gems of Portugal: Beyond Lisbon',
    excerpt: 'From the sun-drenched coast of the Algarve to the historic vineyards of the Douro Valley, explore the enchanting side of Portugal that lies beyond the capital.',
    content: `While Lisbon and Porto steal the spotlight, Portugal is brimming with lesser-known treasures waiting to be explored.

**The Douro Valley**
Known for its terraced vineyards climbing steep riverbanks, this is the oldest demarcated wine region in the world. Take a scenic train ride or a river cruise and indulge in world-class Port wine tastings.

**Sintra's Mysticism**
Just a short trip from Lisbon, Sintra feels like a fairytale. Visit the colorful Pena Palace, the moody Quinta da Regaleira with its initiation wells, and the ancient Moorish Castle.

**The Alentejo Region**
For a slower pace, head to the Alentejo. Think rolling golden plains, cork trees, and whitewashed villages. It's the perfect place for farm-to-table dining and stargazing.

**The Azores**
Often called the "Hawaii of Europe," this archipelago offers dramatic landscapes, thermal springs, and whale watching opportunities that are second to none.

Portugal is a country of diverse landscapes and deep history—don't stop at the capital!`,
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/sustainable/800/600',
    title: 'Sustainable Travel: How to Leave No Trace',
    excerpt: 'Traveling responsibly is more important than ever. Learn simple yet effective ways to minimize your environmental footprint while exploring the world.',
    content: `We all love to explore, but it's crucial to protect the places we visit. Here is how you can be a more sustainable traveler:

**1. Choose Eco-Friendly Accommodation**
Look for hotels and lodges that are certified green, use renewable energy, and support local community initiatives.

**2. Reduce Plastic Waste**
Bring a reusable water bottle, shopping bag, and bamboo utensils. Avoid single-use plastics whenever possible.

**3. Support Local**
Eat at locally-owned restaurants and buy souvenirs from local artisans. This ensures your money stays in the community.

**4. Respect Wildlife**
Never feed or touch wild animals. Choose ethical sanctuaries over exploitative animal attractions.

**5. Slow Down**
Stay longer in one place rather than hopping between multiple destinations. This reduces your carbon footprint and allows for a deeper connection with the culture.`,
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/culinary/800/600',
    title: 'A Culinary Journey Through Southeast Asia',
    excerpt: 'From the street food stalls of Bangkok to the fine dining of Singapore, discover the vibrant flavors that define this incredible region.',
    content: `Southeast Asia is a paradise for food lovers. The bold flavors, fresh ingredients, and diverse influences create a culinary landscape like no other.

**Thailand: Spicy, Sour, Sweet, Salty**
Thai cuisine is all about balance. Don't miss Pad Thai, Tom Yum Goong, and the incredible variety of curries. Street food in Bangkok is a must-try.

**Vietnam: Fresh and Herby**
Vietnamese food relies heavily on fresh herbs, rice noodles, and fish sauce. Pho is the national dish, but Banh Mi and fresh spring rolls are equally delicious.

**Malaysia: A Melting Pot**
Malay, Chinese, and Indian influences blend to create unique dishes like Nasi Lemak, Laksa, and Roti Canai.

**Singapore: The Hawker Center Capital**
Singapore's hawker centers offer high-quality, affordable food. Try Hainanese Chicken Rice and Chili Crab.`,
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/photography/800/600',
    title: 'Travel Photography Tips for Beginners',
    excerpt: 'Want to capture stunning photos of your travels? Here are some essential tips to help you take your photography to the next level.',
    content: `You don't need a professional camera to take great travel photos. Here are some tips to improve your shots:

**1. The Golden Hour**
Shoot during the hour after sunrise and the hour before sunset. The light is soft, warm, and flattering.

**2. Rule of Thirds**
Imagine a grid dividing your image into nine sections. Place your subject along the lines or at the intersections for a more balanced composition.

**3. Get Closer**
Don't be afraid to fill the frame with your subject. Details often tell a more interesting story than wide landscapes.

**4. Look for Unique Angles**
Don't just shoot from eye level. Get low, climb high, or find reflections to create a unique perspective.

**5. Tell a Story**
Capture not just the landmarks, but also the people, the food, and the atmosphere. A series of photos should narrate your journey.`,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/sarah/400/400',
    name: 'Sarah Chen',
    title: 'Adventure Specialist',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/marco/400/400',
    name: 'Marco Rossi',
    title: 'Luxury Concierge',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/emily/400/400',
    name: 'Emily Tran',
    title: 'Cultural Immersion Expert',
  },
];

export const PRIVACY_POLICY = `
**Privacy Policy**

Your privacy is important to us. It is Traveler's policy to respect your privacy regarding any information we may collect from you across our website.

**1. Information We Collect**
We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.

**2. Use of Information**
We use the information we collect to provide you with the services you request, such as booking travel packages or responding to inquiries. We may also use it to improve our services and communicate with you.

**3. Data Retention**
We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.

**4. Sharing of Data**
We do not share any personally identifying information publicly or with third-parties, except when required to by law.
`;

export const TERMS_OF_SERVICE = `
**Terms of Service**

**1. Terms**
By accessing the website at Traveler, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.

**2. Use License**
Permission is granted to temporarily download one copy of the materials (information or software) on Traveler's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.

**3. Disclaimer**
The materials on Traveler's website are provided on an 'as is' basis. Traveler makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

**4. Limitations**
In no event shall Traveler or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Traveler's website, even if Traveler or a Traveler authorized representative has been notified orally or in writing of the possibility of such damage.
`;

// Icons
export const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sunset-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l2 2a2 2 0 010 2.828l-2 2a2 2 0 01-2.828 0l-.586-.586M12 22a10 10 0 110-20 10 10 0 010 20z" />
  </svg>
);

export const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sunset-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sunset-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
