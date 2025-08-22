import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users, Brain } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "AI/Machine Learning",
      description: "Building intelligent systems and predictive models using cutting-edge machine learning algorithms",
      technologies: ["TensorFlow", "PyTorch", "Scikit-Learn", "BERT", "SBERT", "Transformers", "NLTK", "Facebook Prophet", "Generative Models"]
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks",
      technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      icon: Zap,
      title: "Backend Development", 
      description: "Creating robust APIs and server-side applications with scalable architecture",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "SQL"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with attention to detail and accessibility",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"]
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Leading development teams and managing projects from concept to deployment",
      technologies: ["Agile", "Scrum", "Git", "CI/CD", "Team Leadership", "Jira", "Confluence"]
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Hussein Tantawy, a Computer Science and AI student at the University of Birmingham with a passion for building intelligent solutions that solve real-world problems. 
                With hands-on experience as a Software Automation Engineer at BT, I've developed expertise in automating complex network processes, reducing manual intervention by 80%, 
                and contributing to systems that serve over 10 million customers.
              </p>
              <p>
              My technical toolkit spans across AI/ML technologies including TensorFlow, PyTorch, and transformer models, combined with full-stack development skills in Python, React, and cloud technologies. 
              I enjoy creating projects that bridge the gap between cutting-edge AI and practical applications—from developing intelligent student-supervisor matching systems to building AI-powered tools that enhance productivity.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring 
                that every project I work on is both functional and beautiful.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in delay-300">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-primary/10 backdrop-blur-sm">
                <img
                  src="/student.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <Code className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills and Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="border-0 bg-gradient-card backdrop-blur-sm hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                      <p className="text-muted-foreground mb-4">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-primary/5 text-primary border-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};