import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Intelligent Student-Supervisor Matching System",
      description: "A modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.",
      image: "/final2.png",
      tags: ["Python", "Streamlit", "postgreSQL", "NLTK", "AI"],
      liveUrl: "https://supervisor-matcher.streamlit.app",
      githubUrl: "https://github.com/HTantawy/FYP-DEMO"
    },
    {
      title: "Ping-Pong Game",
      description: "Interactive Ping-Pong Game built with Python and Pygame.",
      image: "photo-1488590528505-98d2b5aba04b",
      tags: ["PyGame", "Python"],
      liveUrl: "https://ai-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/HTantawy/Ping-Pong-Game"
    },
    {
      title: "AI-Powered Movie Recommender ",
      description: "An interactive movie recommendation platform that leverages AI-driven suggestions based on users' favorite films and preferred genres",
      image: "/movie.png",
      tags: ["React Native", "Supabase", "OpenAI", "Typescript", "TMDB API","TailwindCSS"],
      liveUrl: "https://cine-cue-zw7t.vercel.app/",
      githubUrl: "https://github.com/HTantawy/cine-cue"
    },
    {
      title: "AI-Powered Cover Letter Generator",
      description: "A Cover letter generator which helps generate personalized cover letters.",
      image: "/git.png",
      tags: ["Next.js", "React", "Tailwind", "OpenAI API"],
      liveUrl: "https://cover-letter-generator-byhussein.vercel.app/",
      githubUrl: "https://github.com/HTantawy/Cover-letter-generator"
    },
    {
      title: "AI-Powered Image and Video Generation",
      description: " An interactive app that generates AI images & videos using the Runware API, with a Supabase Edge Function proxy for secure server-side .",
      image: "/runware.png",
      tags: ["Next.js", "React", "Tailwind", "Supabase", "Runware API", "Vercel", "TypeScript", "Vite"],
      liveUrl: "https://husseins-runware-project.vercel.app/",
      githubUrl: "https://github.com/HTantawy/AI-Powered-Media-Generation-Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from web applications to mobile solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-elegant hover:shadow-glow hover:border-primary/50 transition-all duration-300 overflow-hidden border-0 bg-gradient-card backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image.startsWith('/') ? project.image : `https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop&auto=format`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};