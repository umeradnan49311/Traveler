
export interface Destination {
  id: number;
  image: string;
  title: string;
  duration: string;
  price: number;
  rating: number;
  itinerary: { day: number; title: string; description: string }[];
}

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  title: string;
}
