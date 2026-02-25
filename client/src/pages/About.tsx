import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { teamMembers } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function About() {
  const [officeImageError, setOfficeImageError] = useState(false);
  const fallbackOfficeImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary text-white pt-40 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">Redefining Luxury Real Estate</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            At UrbanNest, we don't just sell properties; we match unique individuals with exceptional homes. Our legacy is built on trust, excellence, and an unwavering commitment to quality.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <img 
              src={officeImageError ? fallbackOfficeImage : "/images/about-office.png"}
              alt="Our Office" 
              className="rounded-2xl shadow-2xl relative z-10 w-full"
              onError={() => setOfficeImageError(true)}
            />
          </div>
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2 mb-6">A Decade of Excellence</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded in 2016, UrbanNest Realty started with a simple mission: to bring transparency and professionalism to the Indian real estate market. Today, we are proud to be recognized as one of the leading luxury real estate agencies in the country.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We specialize in high-end residential properties, offering a curated portfolio of apartments, villas, and penthouses that define modern living.
            </p>
            
            <ul className="space-y-4">
              {["Premium Listings Only", "Transparent Pricing", "End-to-End Legal Support", "Post-Purchase Assistance"].map(item => (
                <li key={item} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Team</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2">Meet Our Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-3/4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-display font-bold text-xl text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
