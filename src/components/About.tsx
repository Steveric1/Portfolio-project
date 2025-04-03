
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Star } from 'lucide-react';

const About = () => {
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

  const experiences = [
    {
      title: "Mid-Level Backend Engineer",
      company: "UbuntuPortal B2B Platform",
      period: "2024 - Present",
      achievements: [
        "Redesigned API architecture, increasing throughput by 40%",
        "Led a team of 20 engineers in developing microservices platform",
        "Built a secure authentication system using JWT, reducing unauthorized access by 80%"
      ]
    },
    {
      title: "Data Science Engineer",
      company: "Turing Developer",
      period: "2024 - 2025",
      achievements: [
        " Applied Reinforcement Learning from Human Feedback (RLHF) techniques to train and fine-tune machine learning models, optimizing performance based on human-labeled data and user preferences.",
        "Collaborated with cross-functional teams to design, implement, and validate RLHF-driven models, enhancing system accuracy and user engagement.",
      ]
    },
    {
      title: "DevOps Engineer",
      company: "AltSchool Africa",
      period: "2022 - 2024",
      achievements: [
        "Automated deployment process, reducing release time from days to hours",
        "Designed and implemented CI/CD pipelines using Jenkins and Docker",
        "Reduced cloud infrastructure costs by 25% through optimization"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            My journey, expertise, and approach to software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">My Background</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software engineer with 3+ years of experience specializing in backend development, data science, and DevOps. 
                My journey began with a Computer Science degree, followed by working with startups and enterprise companies.
              </p>
              <p>
                I thrive on solving complex technical challenges and building scalable, efficient systems. My approach combines robust 
                architectural principles with practical solutions that align with business objectives.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, attending tech meetups, 
                or exploring the latest advancements in cloud computing and machine learning.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="gap-2">
                <a href="https://drive.google.com/file/d/1FtMssglGaUxHhqfB0P9eqVzc_3n2obZg/view?usp=sharing">
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="mailto:stephen.erich243@gmail.com">
                  Get in Touch
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-primary/20 pl-5 relative"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-lg font-medium">{exp.title}</h4>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-1 mt-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Star size={14} className="mt-1 text-tech-teal flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
