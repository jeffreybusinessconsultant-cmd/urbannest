
export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  description: string;
  amenities: string[];
  featured?: boolean;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    price: "₹1.2 Cr",
    location: "Indiranagar, Bangalore",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1850,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    description: "A stunning 3BHK apartment in the heart of Bangalore with modern amenities and a breathtaking view of the city skyline.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Club House"],
    featured: true,
    address: "100 Feet Road, Indiranagar, Bangalore, Karnataka 560038, India",
    coordinates: { lat: 12.9716, lng: 77.6412 }
  },
  {
    id: 2,
    title: "Premium Sea View Villa",
    price: "₹3.5 Cr",
    location: "ECR, Chennai",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    description: "Exclusive luxury villa with direct beach access, private pool, and expansive landscaped gardens.",
    amenities: ["Private Pool", "Beach Access", "Home Theater", "Servant Quarters", "Solar Power"],
    featured: true,
    address: "East Coast Road, Neelankarai, Chennai, Tamil Nadu 600041, India",
    coordinates: { lat: 12.9516, lng: 80.2595 }
  },
  {
    id: 3,
    title: "Spacious 2BHK Flat",
    price: "₹75 Lakh",
    location: "Gachibowli, Hyderabad",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1250,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
    description: "Perfect for young families, this 2BHK flat offers proximity to IT parks and excellent community facilities.",
    amenities: ["Gym", "Children's Play Area", "Power Backup", "CCTV"],
    featured: false,
    address: "Gachibowli Main Road, Hyderabad, Telangana 500032, India",
    coordinates: { lat: 17.4399, lng: 78.3487 }
  },
  {
    id: 4,
    title: "Sea View Penthouse",
    price: "₹2.8 Cr",
    location: "Bandra West, Mumbai",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1600,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    description: "Experience the high life in this sea-facing penthouse with premium interiors and a large terrace.",
    amenities: ["Sea View", "Terrace", "Concierge", "Valet Parking", "Spa"],
    featured: true,
    address: "Bandstand Promenade, Bandra West, Mumbai, Maharashtra 400050, India",
    coordinates: { lat: 19.0596, lng: 72.8295 }
  },
  {
    id: 5,
    title: "Modern Independent House",
    price: "₹1.1 Cr",
    location: "R.S. Puram, Coimbatore",
    type: "House",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    image: "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?auto=format&fit=crop&q=80&w=1000",
    description: "Contemporary designed independent house with smart home features and sustainable architecture.",
    amenities: ["Smart Home", "Garden", "Rainwater Harvesting", "Modular Kitchen"],
    featured: false,
    address: "R.S. Puram Main Road, Coimbatore, Tamil Nadu 641002, India",
    coordinates: { lat: 11.0168, lng: 76.9558 }
  },
  {
    id: 6,
    title: "Portuguese Style Villa",
    price: "₹4.2 Cr",
    location: "Assagao, Goa",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    description: "Heritage-inspired luxury villa in Goa with antique furnishings, sprawling lawns, and a private lap pool.",
    amenities: ["Private Pool", "Heritage Architecture", "Large Garden", "Guest House", "Bar"],
    featured: true,
    address: "Assagao Village, Bardez, North Goa, Goa 403507, India",
    coordinates: { lat: 15.5937, lng: 73.7516 }
  },
  {
    id: 7,
    title: "Modern Duplex Home",
    price: "₹1.6 Cr",
    location: "Koregaon Park, Pune",
    type: "Duplex",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1000",
    description: "Stylish duplex in a posh neighborhood, featuring double-height ceilings and Italian marble flooring.",
    amenities: ["Double Height Living", "Italian Marble", "Rooftop Deck", "Security"],
    featured: true,
    address: "North Main Road, Koregaon Park, Pune, Maharashtra 411001, India",
    coordinates: { lat: 18.5362, lng: 73.8958 }
  },
  {
    id: 8,
    title: "Chic Studio Apartment",
    price: "₹55 Lakh",
    location: "Saket, Delhi",
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
    description: "Compact and efficiently designed studio apartment, ideal for professionals, close to metro station.",
    amenities: ["Fully Furnished", "Metro Access", "High Speed Internet", "Laundromat"],
    featured: false,
    address: "Press Enclave Road, Saket, New Delhi, Delhi 110017, India",
    coordinates: { lat: 28.5244, lng: 77.2066 }
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Arun Verma",
    role: "Luxury Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Vikram Malhotra",
    text: "UrbanNest Realty made finding our dream villa in Goa seamless. Their attention to detail and premium service is unmatched.",
    location: "Goa"
  },
  {
    id: 2,
    name: "Anjali Desai",
    text: "Professional, transparent, and efficient. I sold my apartment in Mumbai through them and got the best price in record time.",
    location: "Mumbai"
  },
  {
    id: 3,
    name: "Suresh Reddy",
    text: "The team at UrbanNest understood exactly what I was looking for in Hyderabad. Highly recommended for luxury properties.",
    location: "Hyderabad"
  }
];
