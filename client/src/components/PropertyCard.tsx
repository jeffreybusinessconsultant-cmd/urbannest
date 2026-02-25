import { Property } from "@/lib/data";
import { Link } from "wouter";
import { BedDouble, Bath, Square, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={imageError ? fallbackImage : property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-white hover:bg-primary uppercase tracking-wider text-xs font-semibold px-3 py-1">
            {property.type}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4">
          <p className="text-white font-bold text-xl">{property.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg text-primary line-clamp-1 group-hover:text-accent transition-colors">
            {property.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-accent" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between text-gray-600 text-sm py-4 border-t border-b border-gray-100 mb-4">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-primary" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-primary" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-primary" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link href={`/property/${property.id}`}>
            <Button variant="outline" className="w-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
