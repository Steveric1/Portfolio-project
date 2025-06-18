
import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Code, Database, Settings } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 120); // Slightly increased delay for more pronounced staggering
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Backend Engineering",
      description: "I design and develop robust, scalable backend systems that power modern applications. My focus is on creating secure, efficient, and maintainable codebases.",
      icon: Code,
      technologies: ["Python", "JavaScript", "Node.js", "Express.js", "NestJs", "PostgreSQL", "MySql", "MongoDB", "Redis", "RESTful APIs", "FastApi", "Django", "Flask", "RabbitMQ", "Celery", "TypeScript"],
      colorClass: "tech-teal",
      iconColorClass: "tech-teal"
    },
    {
      title: "Data Science",
      description: "I transform raw data into actionable insights through machine learning models, data pipelines, and analytics solutions that help businesses make informed decisions.",
      icon: Database,
      technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "Matplotlib"],
      colorClass: "tech-blue",
      iconColorClass: "tech-blue"
    },
    {
      title: "DevOps Engineering",
      description: "I implement CI/CD pipelines and manage cloud infrastructure to automate deployment processes and ensure applications run smoothly and securely.",
      icon: Settings,
      technologies: ["Docker", "Docker Swarm", "Kubernetes", "AWS", "Azure", "GCP", "Jenkins", "Ansible", "Terraform", "GitHub Actions"],
      colorClass: "tech-indigo",
      iconColorClass: "tech-indigo"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tech-indigo/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title relative inline-block">
            My Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-tech-teal rounded"></span>
          </h2>
          <p className="section-subtitle mx-auto">
            Leveraging technical expertise to solve complex problems and deliver high-quality solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              technologies={service.technologies}
              colorClass={service.colorClass}
              iconColorClass={service.iconColorClass}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
