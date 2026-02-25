import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-primary text-white pt-40 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have a question? Interested in a property? Our team is here to help you finding your dream home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Contact Us</span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2 mb-8">We'd love to hear from you</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Visit Our Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    123, Prestige Tower, MG Road,<br />
                    Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Mon-Fri from 9am to 6pm</p>
                  <p className="text-primary font-bold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                  <p className="text-primary font-bold">info@urbannest.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
               <iframe
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 loading="lazy"
                 allowFullScreen
                 referrerPolicy="no-referrer-when-downgrade"
                 src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=MG+Road+Bangalore+Karnataka+India&zoom=15"
               />
               <div className="absolute bottom-4 right-4">
                 <Button 
                   variant="secondary" 
                   className="shadow-lg"
                   onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=MG+Road+Bangalore+Karnataka+560001+India', '_blank')}
                 >
                   View on Google Maps
                 </Button>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="font-display font-bold text-2xl text-primary mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <Input 
                    name="firstName"
                    placeholder="John" 
                    className="h-12 bg-gray-50 border-gray-200"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input 
                    name="lastName"
                    placeholder="Doe" 
                    className="h-12 bg-gray-50 border-gray-200"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  name="email"
                  placeholder="john@example.com" 
                  type="email" 
                  className="h-12 bg-gray-50 border-gray-200"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <Input 
                  name="subject"
                  placeholder="Inquiry about..." 
                  className="h-12 bg-gray-50 border-gray-200"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  name="message"
                  placeholder="How can we help you?" 
                  className="min-h-37.5 bg-gray-50 border-gray-200 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
