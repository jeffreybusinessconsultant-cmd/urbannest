import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

export function Hero() {
  const [, setLocation] = useLocation();
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [imageError, setImageError] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.set("location", searchLocation);
    if (propertyType) params.set("type", propertyType);
    if (budget) params.set("budget", budget);
    
    setLocation(`/properties?${params.toString()}`);
  };

  const fallbackImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="relative h-screen min-h-150 w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageError ? fallbackImage : "/images/hero-luxury-home.png"}
          alt="Luxury Home"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold tracking-wider uppercase mb-6 border border-white/30">
            Welcome to UrbanNest
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-4xl mx-auto">
            Find Your <span className="text-accent">Dream Home</span> Today
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Discover a curated collection of the most exclusive properties in prime locations. Luxury living starts here.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white p-4 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Location</label>
              <Input 
                placeholder="City, Neighborhood..." 
                className="border-0 bg-gray-50 focus-visible:ring-0 focus-visible:bg-gray-100 h-12"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Property Type</label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="border-0 bg-gray-50 focus:ring-0 focus:bg-gray-100 h-12">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Penthouse">Penthouse</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                  <SelectItem value="Duplex">Duplex</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Budget</label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="border-0 bg-gray-50 focus:ring-0 focus:bg-gray-100 h-12">
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Under ₹50L</SelectItem>
                  <SelectItem value="mid">₹50L - ₹1 Cr</SelectItem>
                  <SelectItem value="high">₹1 Cr - ₹3 Cr</SelectItem>
                  <SelectItem value="luxury">Above ₹3 Cr</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-lg"
                onClick={handleSearch}
              >
                <Search className="w-5 h-5 mr-2" /> Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
