import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Brain, Database, Zap, Award, Briefcase, GraduationCap, ChevronDown, Sparkles } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const skills = {
    languages: ['C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
    frameworks: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Excel'],
    ml: ['scikit-learn', 'pandas', 'NumPy', 'Feature Engineering']
  };

  const projects = [
    {
      title: 'F1 Strategy Engine',
      description: 'End-to-end Formula 1 race strategy simulator using ML models for lap time prediction, tyre wear estimation, and pit window optimization.',
      tech: ['Python', 'Machine Learning', 'pandas', 'scikit-learn'],
      github: 'https://github.com/Charita1812/F1_STRATEGY_ENGINE',
      demo: 'https://f1strategyengine-8kxwo5whd4gam8cmtyujbs.streamlit.app/',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Livestock Management System',
      description: 'Data-driven system for monitoring cattle health with ML-powered milk yield prediction and heat stress analysis.',
      tech: ['Python', 'Flask', 'scikit-learn', 'Tailwind CSS'],
      github: 'https://github.com/Charita1812/livestock-management-system',
      demo: 'https://livestock-management-system-bqf6hdzs3ajqkztc3q4mbm.streamlit.app/',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8 inline-block animate-scale-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-spin-slow relative">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-400 animate-ping" />
                <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">KC</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient animate-slide-up">
            K CHARITA
          </h1>
          
          <p className="text-2xl md:text-3xl text-purple-300 mb-4 font-light animate-slide-up-delay-1">
            AI/ML Engineer & Full-Stack Developer
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 animate-slide-up-delay-2">
            Crafting intelligent solutions with machine learning and building seamless web experiences. Specialized in data-driven applications and predictive modeling.
          </p>

          <div className="flex gap-6 justify-center mb-12 animate-slide-up-delay-3">
            <a href="https://www.linkedin.com/in/kcharita/" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-110 hover:rotate-12 animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Charita1812" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-110 hover:rotate-12 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:charita880@gmail.com" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-110 hover:rotate-12 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category} 
                className={`bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 hover:-translate-y-2 ${visibleSections.has('skills') ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category === 'languages' && <Code className="w-6 h-6 text-purple-400 animate-wiggle" />}
                  {category === 'frameworks' && <Zap className="w-6 h-6 text-pink-400 animate-wiggle" />}
                  {category === 'databases' && <Database className="w-6 h-6 text-blue-400 animate-wiggle" />}
                  {category === 'tools' && <Briefcase className="w-6 h-6 text-green-400 animate-wiggle" />}
                  {category === 'ml' && <Brain className="w-6 h-6 text-orange-400 animate-wiggle" />}
                  <h3 className="text-xl font-bold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:scale-110 hover:border-purple-400 transition-all cursor-default animate-fade-in"
                      style={{ animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all overflow-hidden hover:scale-105 hover:-rotate-1 ${visibleSections.has('projects') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-3xl animate-border-glow"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors group-hover:animate-pulse">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all animate-fade-in"
                        style={{ animationDelay: `${(idx * 0.2) + (techIdx * 0.1)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all group/btn hover:scale-110">
                      <Github className="w-4 h-4" />
                      <span className="group-hover/btn:translate-x-1 transition-transform">Code</span>
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all group/btn hover:scale-110 animate-shimmer">
                      <ExternalLink className="w-4 h-4" />
                      <span className="group-hover/btn:translate-x-1 transition-transform">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Let's Build Something Amazing
          </h2>
          <p className={`text-xl text-slate-300 mb-12 transition-all duration-1000 delay-200 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Open to exciting opportunities in AI/ML and Full-Stack Development
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a
  href="mailto:charita880@gmail.com"
  className={`flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-lg font-semibold transition-all hover:scale-105 border border-white/20 hover:border-purple-400 ${visibleSections.has('contact') ? 'animate-bounce-in' : 'opacity-0'}`}
  style={{ animationDelay: '0.5s' }}
>
  <Mail className="w-6 h-6" />
  charita880@gmail.com
</a>

<a
  href="https://www.linkedin.com/in/kcharita/"
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-lg font-semibold transition-all hover:scale-105 border border-white/20 hover:border-purple-400 ${visibleSections.has('contact') ? 'animate-bounce-in' : 'opacity-0'}`}
  style={{ animationDelay: '0.6s' }}
>
  <Linkedin className="w-6 h-6" />
  LinkedIn Profile
</a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-slate-400 animate-fade-in">
          <p>© 2025 K Charita. Designed with passion and precision.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        .animate-particle {
          animation: particle 15s linear infinite;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-up-delay-1 {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-slide-up-delay-3 {
          animation: slide-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}