
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
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181947_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    description: "Compact and efficiently designed studio apartment, ideal for professionals, close to metro station.",
    amenities: ["Fully Furnished", "Metro Access", "High Speed Internet", "Laundromat"],
    featured: false,
    address: "Press Enclave Road, Saket, New Delhi, Delhi 110017, India",
    coordinates: { lat: 28.5244, lng: 77.2066 }
  },
  {
    id: 9,
    title: "Contemporary Hillside Villa",
    price: "₹5.8 Cr",
    location: "Lonavala, Maharashtra",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 6,
    sqft: 5200,
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
    description: "Architectural masterpiece nestled in the hills with panoramic valley views, infinity pool, and modern minimalist design.",
    amenities: ["Infinity Pool", "Valley View", "Home Automation", "Wine Cellar", "Outdoor Kitchen"],
    featured: true,
    address: "Tungarli Lake Road, Lonavala, Maharashtra 410401, India",
    coordinates: { lat: 18.7537, lng: 73.4086 }
  },
  {
    id: 10,
    title: "Tropical Paradise Villa",
    price: "₹6.5 Cr",
    location: "Candolim, Goa",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 4800,
    image: "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
    description: "Stunning beachfront villa with tropical landscaping, private beach access, and luxurious outdoor living spaces.",
    amenities: ["Beach Access", "Private Pool", "Outdoor Lounge", "BBQ Area", "Staff Quarters"],
    featured: true,
    address: "Fort Aguada Road, Candolim, North Goa, Goa 403515, India",
    coordinates: { lat: 15.5186, lng: 73.7624 }
  },
  {
    id: 11,
    title: "Modern Farmhouse Villa",
    price: "₹3.2 Cr",
    location: "Chattarpur, Delhi",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3800,
    image: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
    description: "Spacious farmhouse villa with organic gardens, horse stables, and rustic-modern interiors perfect for weekend retreats.",
    amenities: ["Organic Garden", "Horse Stables", "Outdoor Pool", "Gazebo", "Solar Panels"],
    featured: false,
    address: "Chattarpur Main Road, New Delhi, Delhi 110074, India",
    coordinates: { lat: 28.5065, lng: 77.1749 }
  },
  {
    id: 12,
    title: "Luxury Lake View Villa",
    price: "₹4.9 Cr",
    location: "Powai, Mumbai",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4200,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_1280.jpg",
    description: "Exclusive villa overlooking Powai Lake with contemporary design, private jetty, and world-class amenities.",
    amenities: ["Lake View", "Private Jetty", "Home Theater", "Gym", "Landscaped Garden"],
    featured: true,
    address: "Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076, India",
    coordinates: { lat: 19.1197, lng: 72.9059 }
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
