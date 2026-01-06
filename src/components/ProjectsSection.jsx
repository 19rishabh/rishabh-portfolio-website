import React from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    id: 1,
    title: "KhetGuru",
    description: "A one-stop AI-powered platform that helps farmers with crop recommendations, real time monitoring and disease detection.",
    image: "/projects/KhetGuru.png",
    tags: ["CNN", "Tensorflow", "GenAI"],
    demoUrl: "#",
    githubUrl: "https://github.com/CodeNPray/KhetGuru",
  },
  {
    id: 2,
    title: "AlphaEngine",
    description:
      "A quantitative trading platform that leverages algorithmic models and machine learning to backtest and analyze investment strategies.",
    image: "/projects/AlphaEngine.png",
    tags: ["Scikit-learn", "Pandas", "Docker"],
    demoUrl: "https://algorithmic-trading-engine-production.up.railway.app/",
    githubUrl: "https://github.com/19rishabh/AlphaEngine",
  },
  {
    id: 3,
    title: "StreamStash",
    description:
      "MERN-based streaming platform that brings movies to life with user authentication, recommendations and a modern interface.",
    image: "/projects/StreamStash.png",
    tags: ["MERN", "TMDB Api", "JWT Auth"],
    demoUrl: "https://streamstash.onrender.com/",
    githubUrl: "https://github.com/19rishabh/StreamStash",
  },
  {
    id: 4,
    title: "AskMyDocs",
    description:
      "Secure document Q&A System using the Retrieval-Augmented Generation(RAG) framework.",
    image: "/projects/AskMyDocs.png", 
    tags: ["Langchain", "HuggingFace", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/19rishabh/AskMyDocs-RAG",
  },
  {
    id: 5,
    title: "Ishaara", 
    description:
      "End-to-end System that translates spoken English into Indian Sign Language and renders it through a 3D animated avatar.",
    image: "/projects/ishaara.png", 
    tags: ["spaCy", "Flask", "Three.js", "Blender"],  
    demoUrl: "#",
    githubUrl: "https://github.com/19rishabh/ishaara-speech-to-sign-animator",
  },
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* 3. Embla Carousel Structure */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                // Each slide needs a specific flex basis
                <div
                  className="flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-3"
                  key={project.id}
                >
                  <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex space-x-3">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Navigation Buttons */}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-[-1rem] bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-card transition-all duration-300 z-10"
            onClick={scrollPrev}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-[-1rem] bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-card transition-all duration-300 z-10"
            onClick={scrollNext}
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/19rishabh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;