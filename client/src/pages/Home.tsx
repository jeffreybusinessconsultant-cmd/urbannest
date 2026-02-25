import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { properties, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock, Users } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Home() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <Hero />

      {/* Featured Properties Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Exclusive Listings</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2">Featured Properties</h2>
          </div>
          <Link href="/properties">
            <Button variant="outline" className="hidden md:flex">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
        
        <div className="mt-10 md:hidden text-center">
          <Link href="/properties">
            <Button variant="outline" className="w-full">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.4,8.9,81.8,22.1,70.8,33.4C59.8,44.7,49.3,54.1,37.6,61.9C25.9,69.7,13,75.9,-0.7,77.1C-14.4,78.3,-28.8,74.5,-41.4,67.3C-54,60.1,-64.8,49.5,-73.4,37.1C-82,24.7,-88.4,10.5,-87.3,-3.3C-86.2,-17.1,-77.6,-30.5,-67.2,-41.7C-56.8,-52.9,-44.6,-61.9,-31.6,-69.7C-18.6,-77.5,-4.8,-84.1,8.9,-83.8L22.6,-83.5Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-6">Experience the Art of Living</h2>
            <p className="text-white/80 text-lg">We go beyond property listings. We curate lifestyles and ensure your journey to finding a home is as exceptional as the home itself.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Trusted Excellence</h3>
              <p className="text-white/70">Over 20 years of experience in the luxury real estate market with a reputation for integrity.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Efficient Process</h3>
              <p className="text-white/70">We value your time. Our streamlined process ensures a hassle-free buying or selling experience.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Expert Agents</h3>
              <p className="text-white/70">Our team of dedicated professionals provides personalized guidance at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4 md:px-6 bg-white">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-display">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center md:text-left relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
             {/* Decorative circle */}
             <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
             
             <div className="relative z-10 max-w-2xl">
               <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Ready to Find Your Dream Home?</h2>
               <p className="text-white/80 text-lg mb-8">Let's start the journey together. Contact us today for a consultation with our expert agents.</p>
             </div>
             <div className="relative z-10 shrink-0">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-14 text-lg">Contact Us Now</Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
