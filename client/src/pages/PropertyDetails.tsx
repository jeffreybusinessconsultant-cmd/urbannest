import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { properties } from "@/lib/data";
import { useRoute } from "wouter";
import { BedDouble, Bath, Square, MapPin, Share2, Heart, Phone, Mail, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function PropertyDetails() {
  const { toast } = useToast();
  const [, params] = useRoute("/property/:id");
  const id = params?.id ? parseInt(params.id) : 1;
  const property = properties.find(p => p.id === id) || properties[0];
  
  const [isSaved, setIsSaved] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Check out this property: ${property.title}`,
          url: url,
        });
        toast({
          title: "Shared Successfully!",
          description: "Property link has been shared.",
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: "Property link has been copied to clipboard.",
      });
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from Saved" : "Saved Successfully!",
      description: isSaved 
        ? "Property removed from your saved list." 
        : "Property added to your saved list.",
    });
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Inquiry Sent!",
        description: "Our agent will contact you within 24 hours.",
      });
      
      setInquiryForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInquiryForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      {/* Gallery Section - Full width top */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full mt-20 group">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Gallery Grid Overlay (Visual only for now) */}
        <div className="absolute bottom-8 right-8 hidden md:flex gap-2">
            <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white/50 hover:border-white transition-colors cursor-pointer">
                <img src={property.image} className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white/50 hover:border-white transition-colors cursor-pointer">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
            </div>
             <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white/50 hover:border-white transition-colors cursor-pointer bg-black/50 flex items-center justify-center text-white backdrop-blur-sm">
                <span className="text-xs font-bold">+5 Photos</span>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <div className="max-w-4xl">
            <div className="flex gap-2 mb-4">
                 <Badge className="bg-accent text-white hover:bg-accent/90 px-4 py-1.5 text-sm uppercase tracking-wider">{property.type}</Badge>
                 <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border-0 px-4 py-1.5 text-sm uppercase tracking-wider">For Sale</Badge>
            </div>
           
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight shadow-sm">{property.title}</h1>
            <div className="flex items-center text-white/90 text-lg font-light">
              <MapPin className="w-5 h-5 mr-2 text-accent" />
              {property.location}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center justify-center border-r border-gray-100 last:border-0 px-2 text-center">
                <BedDouble className="w-8 h-8 text-primary mb-3" />
                <span className="text-3xl font-display font-bold text-primary">{property.bedrooms}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-gray-100 last:border-0 px-2 text-center">
                <Bath className="w-8 h-8 text-primary mb-3" />
                <span className="text-3xl font-display font-bold text-primary">{property.bathrooms}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 text-center">
                <Square className="w-8 h-8 text-primary mb-3" />
                <span className="text-3xl font-display font-bold text-primary">{property.sqft}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Sq Ft</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-display font-bold text-2xl text-primary mb-6">About this Property</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="leading-relaxed mb-6">{property.description}</p>
                <p className="leading-relaxed">
                    Designed for modern living, this property offers a seamless blend of style and functionality. 
                    From the moment you step inside, you are greeted by an abundance of natural light and open spaces. 
                    High-quality finishes, premium fixtures, and thoughtful architectural details elevate the living experience.
                </p>
                <p className="leading-relaxed mt-4">
                    Located in a prime area, you are just minutes away from top-rated schools, shopping centers, and fine dining. 
                    Whether you are looking for a peaceful retreat or a vibrant community, this home offers the best of both worlds.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-display font-bold text-2xl text-primary mb-8">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-display font-bold text-2xl text-primary mb-6">Location</h2>
              <div className="w-full h-100 bg-gray-100 rounded-xl overflow-hidden relative group">
                {property.coordinates && (
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(property.address || property.location)}&zoom=15`}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                )}
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-primary hover:text-white transition-colors font-medium"
                    onClick={() => {
                      const address = property.address || property.location;
                      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </button>
                </div>
              </div>
              {property.address && (
                <div className="mt-4 flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm">{property.address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <Card className="p-8 border-0 shadow-xl bg-primary text-white overflow-hidden relative">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                
                <p className="text-white/70 mb-2 text-sm uppercase tracking-wide font-medium relative z-10">Asking Price</p>
                <h2 className="text-5xl font-bold mb-8 font-display relative z-10">{property.price}</h2>
                
                <div className="flex gap-4 relative z-10">
                  <Button 
                    variant="outline" 
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary h-12"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-2" /> Share
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`flex-1 border-white/20 h-12 ${
                      isSaved 
                        ? 'bg-white text-primary hover:bg-white/90' 
                        : 'bg-white/10 text-white hover:bg-white hover:text-primary'
                    }`}
                    onClick={handleSave}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isSaved ? 'fill-current' : ''}`} /> 
                    {isSaved ? 'Saved' : 'Save'}
                  </Button>
                </div>
              </Card>

              {/* Contact Agent Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-display font-bold text-xl text-primary mb-6">Interested in this property?</h3>
                
                <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                    alt="Agent" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-primary">Rajesh Kumar</h3>
                    <p className="text-sm text-accent font-medium">Senior Estate Agent</p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleInquirySubmit}>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className="h-12 bg-gray-50 border-gray-200"
                    value={inquiryForm.name}
                    onChange={handleInquiryChange}
                    required
                  />
                  <Input 
                    name="email"
                    placeholder="Email Address" 
                    type="email" 
                    className="h-12 bg-gray-50 border-gray-200"
                    value={inquiryForm.email}
                    onChange={handleInquiryChange}
                    required
                  />
                  <Input 
                    name="phone"
                    placeholder="Phone Number" 
                    type="tel" 
                    className="h-12 bg-gray-50 border-gray-200"
                    value={inquiryForm.phone}
                    onChange={handleInquiryChange}
                    required
                  />
                  <Textarea 
                    name="message"
                    placeholder="I'm interested in this property..." 
                    className="h-32 bg-gray-50 border-gray-200 resize-none"
                    value={inquiryForm.message}
                    onChange={handleInquiryChange}
                    required
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-semibold shadow-lg shadow-accent/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>

                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-primary hover:bg-gray-50 h-12">
                    <Phone className="w-5 h-5 mr-3 text-accent" /> +91 98765 43210
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
