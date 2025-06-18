
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

type Category = 'all' | 'backend' | 'data' | 'devops';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
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
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: "B2B E-commerce Platform",
      description: "A scalable B2B e-commerce platform with real-time inventory management and order processing.",
      tags: ["Django", "PostgreSQL", "Docker", "Kubernetes", "Redis", "RabbitMQ", "Celery"],
      image: "b2b3.png",
      // githubUrl: "https://github.com",
      liveUrl: "https://ubuntuportal.vercel.app/",
      category: "backend"
    },
    {
      title: "Healthcare API Platform",
      description: "Secure RESTful API platform for healthcare providers to access and share patient data with strict compliance.",
      tags: ["JavaScript", "Node.Js", "OAuth 2.0", "MongoDB", "Celery"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      // githubUrl: "https://github.com",
      liveUrl: "https://lilyhospitals.com/",
      category: "backend"
    },
    {
      title: "UbuntuPortal Logistics",
      description: "A secure RESTful API for seamless shipment management, real-time tracking, and optimized supply chain operations.",
      tags: ["Python", "Django", "OAuth 2.0", "postgreSQL", "Celery", "RabbitMQ"],
      image: "ubuntuport1.png",
      // githubUrl: "https://github.com",
      liveUrl: "https://ubuntu-logistics.vercel.app/",
      category: "backend"
    },
    {
      title: "Airbnb Clone",
      description: "A full-stack web application that mimics the functionality of Airbnb, allowing users to book and list properties.",
      tags: ["Python", "Flask", "OAuth 2.0", "MySQL", "Celery", "RabbitMQ"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      // githubUrl: "https://github.com",
      // liveUrl: "https://ubuntu-logistics.vercel.app/",
      githubUrl: "https://github.com/Steveric1/AirBnB_clone_v4",
      category: "backend"
    },
    // {
    //   title: "Financial Data Pipeline",
    //   description: "Automated data pipeline for processing and analyzing financial transactions with real-time insights.",
    //   tags: ["Python", "Apache Kafka", "PostgreSQL", "AWS", "Pandas"],
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    //   githubUrl: "https://github.com/steveric1",
    //   category: "data"
    // },
    {
      title: "CI/CD Infrastructure",
      description: "Complete CI/CD infrastructure for a SaaS product, including automated testing, deployment, and monitoring.",
      tags: ["Terraform", "AWS", "GitHub Actions", "Docker", "Prometheus"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/steveric1",
      // liveUrl: "https://example.com",
      category: "devops"
    },
    {
      title: "Laravel App Deployment with Docker",
      description: "Automated deployment of a Laravel application using Docker, ensuring consistent environments across development and production.",
      tags: ["PHP", "Laravel", "Docker", "MySQL", "Nginx", "Docker Compose"],
      image: "laravel.png",
      githubUrl: "https://github.com",
      category: "devops"
    },
    // {
    //   title: "Predictive Maintenance ML",
    //   description: "Machine learning system for predictive maintenance in manufacturing, reducing downtime by 35%.",
    //   tags: ["Python", "TensorFlow", "Scikit-learn", "Time Series", "IoT"],
    //   image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    //   githubUrl: "https://github.com",
    //   // liveUrl: "https://example.com",
    //   category: "data"
    // },
    {
      title: "Socks App – Scalable Web & Mobile Deployment",
      description: "Custom Kubernetes autoscaling solution for optimized resource utilization in cloud environments.",
      tags: ["Kubernetes","Terraform", "AWS", "Ansible", "Jenkins", "Prometheus"],
      image: "socks.png",
      githubUrl: "https://github.com/Steveric1/Altschool-Third-Semester-Exam.git",
      category: "devops"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work across backend engineering, data science, and DevOps
          </p>
        </div>

        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex p-1 rounded-lg bg-muted">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'ghost'}
              className="rounded-md"
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </Button>
            <Button
              variant={activeCategory === 'backend' ? 'default' : 'ghost'}
              className="rounded-md"
              onClick={() => setActiveCategory('backend')}
            >
              Backend
            </Button>
            {/* <Button
              variant={activeCategory === 'data' ? 'default' : 'ghost'}
              className="rounded-md"
              onClick={() => setActiveCategory('data')}
            >
              Data Science
            </Button> */}
            <Button
              variant={activeCategory === 'devops' ? 'default' : 'ghost'}
              className="rounded-md"
              onClick={() => setActiveCategory('devops')}
            >
              DevOps
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
