import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import { Properties } from "@/pages/Properties";
import { PropertyDetails } from "@/pages/PropertyDetails";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { ImageTest } from "@/pages/ImageTest";
import { AnimatePresence, motion } from "framer-motion";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/properties" component={Properties} />
        <Route path="/property/:id" component={PropertyDetails} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/image-test" component={ImageTest} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
