import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      year: "2024",
      role: "Software Automation Engineer - BT",
      period: "September 2023 - August 2024",
      location: "Bristol, UK",
      description: "Specialized in network automation and Site Reliability Engineering, developing Python-based solutions that enhanced 5G network operations and served over 10 million customers:",
      responsibilities: [
        "Reduced manual intervention by 80% in readiness checks by developing and deploying automation scripts",
        "Accelerated 5G application failure reporting by 35%, enabling faster detection and resolution of system issues",
        "Integrated Python-based APIs with Kubernetes, Contrail, and OpenStack libraries, automating complex network processes, increasing operational precision by 20%.",
        "Participated in incident response simulations and security preparedness initiatives",
        "Developed Python automation scripts, reducing manual workload by 30%",
        "Collaborated with the Technical Surveillance Team, optimizing real-time network health monitoring and enhancing system reliability for 10+ million EE customers."
      ],
      skills: ["Python Scripting", "Python Automation", "API Testing", "VOiP", "Network Virtualization","Kubernetes", "Network Automation"]
    },
    {
      year: "2023",
      role: "Software Developer Intern - Info Traff",
      period: "July 2023 - September 2023",
      location: "Remote",
      description: "Specialized in computer vision and analytics for retail optimization:",
      responsibilities: [
        "Developed computer vision algorithms for analyzing in-store foot traffic using OpenCV",
        "Integrated real-time object detection and customer tracking, improving accuracy by ~20%",
        "Built analytics dashboards visualizing dwell time and conversion funnels",
        "Optimized data pipelines for CCTV footage processing using multithreading",
        "Collaborated with cross-functional teams to translate business needs into technical features"
      ],
      skills: ["Computer Vision", "Data Analytics", "React", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through technical roles and projects that have shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.year} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Year indicator */}
                <div className="flex items-center mb-6">
                  <div className="hidden md:flex md:w-1/2 justify-end pr-8">
                    <div className="text-5xl font-bold text-primary/80">{exp.year}</div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1 md:-translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-glow animate-glow-pulse"></div>
                  </div>
                  <div className="md:hidden text-5xl font-bold text-primary/80 pl-10">{exp.year}</div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                    {index % 2 === 0 && (
                      <Card className="border-0 bg-gradient-card backdrop-blur-sm hover:shadow-elegant transition-all duration-300 mb-8">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                          <div className="flex items-center justify-end mb-3 text-muted-foreground">
                            <Calendar className="h-4 w-4 ml-2 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center justify-end mb-5 text-muted-foreground">
                            <MapPin className="h-4 w-4 ml-2 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <ul className="space-y-2 list-disc pl-5 text-muted-foreground mb-5">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {exp.skills.map((skill) => (
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
                    {(index % 2 !== 0 || !Array.isArray(experiences) || window.innerWidth < 768) && (
                      <Card className="border-0 bg-gradient-card backdrop-blur-sm hover:shadow-elegant transition-all duration-300 mb-8">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                          <div className="flex items-center mb-3 text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center mb-5 text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <ul className="space-y-2 list-disc pl-5 text-muted-foreground mb-5">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
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