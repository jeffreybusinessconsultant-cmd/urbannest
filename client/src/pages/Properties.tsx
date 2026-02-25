import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { useState, useEffect } from "react";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "wouter";

export function Properties() {
  const [location] = useLocation();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [bedrooms, setBedrooms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Parse URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const typeParam = params.get('type');
    const budgetParam = params.get('budget');
    const locationParam = params.get('location');

    if (typeParam) setSelectedTypes([typeParam]);
    if (locationParam) setSearchQuery(locationParam);
    if (budgetParam) {
      const budgetMap: Record<string, number[]> = {
        'low': [0, 50],
        'mid': [50, 100],
        'high': [100, 300],
        'luxury': [300, 500]
      };
      setPriceRange(budgetMap[budgetParam] || [0, 500]);
    }
  }, [location]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleBedrooms = (num: string) => {
    setBedrooms(prev => 
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const parsePriceToNumber = (priceStr: string): number => {
    const numStr = priceStr.replace(/[₹,\s]/g, '');
    if (numStr.includes('Cr')) {
      return parseFloat(numStr.replace('Cr', '')) * 100;
    } else if (numStr.includes('Lakh') || numStr.includes('L')) {
      return parseFloat(numStr.replace(/Lakh|L/g, ''));
    }
    return 0;
  };

  const filteredProperties = properties.filter(p => {
    // Type filter
    if (selectedTypes.length > 0 && !selectedTypes.includes(p.type)) return false;
    
    // Bedrooms filter
    if (bedrooms.length > 0) {
      const propertyBeds = p.bedrooms.toString();
      const has5Plus = bedrooms.includes("5+") && p.bedrooms >= 5;
      if (!bedrooms.includes(propertyBeds) && !has5Plus) return false;
    }
    
    // Price filter
    const propertyPrice = parsePriceToNumber(p.price);
    if (propertyPrice < priceRange[0] || propertyPrice > priceRange[1]) return false;
    
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-display font-bold text-lg mb-4">Price Range</h3>
        <Slider 
          value={priceRange}
          max={500} 
          step={10} 
          className="mb-4"
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹{priceRange[0]}L</span>
          <span>₹{priceRange[1] >= 500 ? '5Cr+' : priceRange[1] + 'L'}</span>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-lg mb-4">Property Type</h3>
        <div className="space-y-3">
          {["Apartment", "Villa", "House", "Penthouse", "Studio", "Duplex"].map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox 
                id={`type-${type}`} 
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <Label htmlFor={`type-${type}`} className="text-gray-600 font-normal cursor-pointer">{type}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-lg mb-4">Bedrooms</h3>
        <div className="space-y-3">
          {["1", "2", "3", "4", "5+"].map(num => (
            <div key={num} className="flex items-center space-x-2">
              <Checkbox 
                id={`bed-${num}`} 
                checked={bedrooms.includes(num)}
                onCheckedChange={() => toggleBedrooms(num)}
              />
              <Label htmlFor={`bed-${num}`} className="text-gray-600 font-normal cursor-pointer">{num} BHK</Label>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-white"
        onClick={() => {
          // Filters are applied in real-time, this button just closes mobile sheet
        }}
      >
        Apply Filters ({filteredProperties.length} properties)
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Our Properties</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Browse through our exclusive collection of luxury homes across premium locations.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grow">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Filter className="w-5 h-5" />
                <span className="font-bold text-lg">Filters</span>
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="grow">
            {/* Mobile Filter & Search */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search location, property name..." 
                  className="pl-10 h-12 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden h-12 bg-white">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-bold text-primary">{filteredProperties.length}</span> of {properties.length} properties
              </p>
            </div>

            {/* Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-2">No properties found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
                <Button 
                  onClick={() => {
                    setSelectedTypes([]);
                    setBedrooms([]);
                    setPriceRange([0, 500]);
                    setSearchQuery("");
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
