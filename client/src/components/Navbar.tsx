import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled || !isHome ? 'bg-primary text-primary-foreground' : 'bg-white text-primary'}`}>
              <span className="font-display font-bold text-xl">U</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight ${isScrolled || !isHome ? 'text-primary' : 'text-white'}`}>
              UrbanNest
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={`text-sm font-medium cursor-pointer transition-colors hover:text-accent ${
                  isScrolled || !isHome ? "text-primary/80" : "text-white/90"
                } ${location === link.href ? "font-bold text-accent" : ""}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Button 
            className={`${isScrolled || !isHome ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}`}
          >
            <Phone className="w-4 h-4 mr-2" />
            +91 98765 43210
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled || !isHome ? "text-primary" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <span className="text-lg font-medium cursor-pointer hover:text-accent transition-colors block py-2 border-b border-gray-100">
                      {link.name}
                    </span>
                  </Link>
                ))}
                <Button className="w-full mt-4 bg-primary text-white">
                  Contact Agent
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
