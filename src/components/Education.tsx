import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      year: "2025",
      degree: "BSc Computer Science and Artificial Intelligence with a Year in Industry",
      institution: "University of Birmingham",
      period: "2021 - 2025",
      location: "Birmingham, UK",
      description: "Comprehensive program combining computer science fundamentals with specialized Artificial Intelligence training:",
      achievements: [
        "2:1 Honours degree with focus on ethical use of AI",
        "Specialized coursework in Intelligent Robotics, HCI, and ethical AI",
        "Completed projects in recommender systems and HCI ",
        "Active participation in cybersecurity  Hackathons",
        "Research in AI-driven threat detection and automated vulnerability assessment"
      ],
      skills: ["Cybersecurity", "Software Engineering", "Front-End Development", "Machine Learning "]
    },
    {
      year: "2021",
      degree: "Foundation Certificate for Science and Engineering",
      institution: "Kaplan College",
      period: "2020 - 2021",
      location: "UK",
      description: "Foundation program preparing for university-level study in science and engineering disciplines:",
      achievements: [
        "Achieved 74% overall grade demonstrating strong academic performance",
        "Completed comprehensive coursework in mathematics and core sciences",
        "Developed essential study skills and academic writing techniques",
        "Built foundational knowledge in engineering principles and scientific methodology",
        "Successfully prepared for progression to undergraduate computer science studies"
      ],
      skills: ["Mathematics", "Scientific Method", "Engineering Principles", "Academic Writing"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and cybersecurity knowledge
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2"></div>

          {/* Education items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.year} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Year indicator */}
                <div className="flex items-center mb-6">
                  <div className="hidden md:flex md:w-1/2 justify-end pr-8">
                    <div className="text-5xl font-bold text-primary/80">{edu.year}</div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1 md:-translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-glow animate-glow-pulse flex items-center justify-center">
                      <GraduationCap className="h-3 w-3 text-background" />
                    </div>
                  </div>
                  <div className="md:hidden text-5xl font-bold text-primary/80 pl-10">{edu.year}</div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                    {index % 2 === 0 && (
                      <Card className="border-0 bg-gradient-card backdrop-blur-sm hover:shadow-elegant transition-all duration-300 mb-8">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                          <h4 className="text-xl text-primary mb-3">{edu.institution}</h4>
                          <div className="flex items-center justify-end mb-3 text-muted-foreground">
                            <Calendar className="h-4 w-4 ml-2 mr-1" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center justify-end mb-5 text-muted-foreground">
                            <MapPin className="h-4 w-4 ml-2 mr-1" />
                            <span>{edu.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{edu.description}</p>
                          <ul className="space-y-2 list-disc pl-5 text-muted-foreground mb-5">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {edu.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="secondary" 
                                className="bg-primary/10 text-primary border-primary/20"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="pl-10 md:pl-0 md:w-1/2 md:pl-12">
                    {(index % 2 !== 0 || !Array.isArray(education) || window.innerWidth < 768) && (
                      <Card className="border-0 bg-gradient-card backdrop-blur-sm hover:shadow-elegant transition-all duration-300 mb-8">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                          <h4 className="text-xl text-primary mb-3">{edu.institution}</h4>
                          <div className="flex items-center mb-3 text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center mb-5 text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{edu.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{edu.description}</p>
                          <ul className="space-y-2 list-disc pl-5 text-muted-foreground mb-5">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="secondary" 
                                className="bg-primary/10 text-primary border-primary/20"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};