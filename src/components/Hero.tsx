
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Database, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-tech-teal/10 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm font-medium">Available for freelance work</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Backend Engineer & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-teal">DevOps Specialist</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I build robust backends, optimize data workflows, and architect scalable infrastructure.
            Helping companies deliver reliable software solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" asChild>
              <a href="#contact">Let's work together</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-2">
                <Code size={24} />
              </div>
              <span className="text-sm">Backend</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-tech-teal/10 text-tech-teal mb-2">
                <Database size={24} />
              </div>
              <span className="text-sm">Data Science</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-tech-indigo/10 text-tech-indigo mb-2">
                <Settings size={24} />
              </div>
              <span className="text-sm">DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
