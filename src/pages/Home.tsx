
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, ArrowRight, Star, ExternalLink, Play, CheckCircle } from "lucide-react";
import AuthDialog from "@/components/AuthDialog";

const Home = () => {
  const [authDialog, setAuthDialog] = useState<{ isOpen: boolean; defaultTab: "login" | "signup" }>({
    isOpen: false,
    defaultTab: "signup"
  });

  const courses = [
    {
      title: "Web Development Mastery",
      description: "Learn modern web development from basics to advanced concepts",
      students: 1250,
      rating: 4.9,
      price: "$99",
      link: "https://teachable.com/course-link-1",
    },
    {
      title: "UI/UX Design Fundamentals", 
      description: "Master the principles of beautiful and functional design",
      students: 890,
      rating: 4.8,
      price: "$79",
      link: "https://teachable.com/course-link-2",
    },
    {
      title: "Digital Marketing Strategy",
      description: "Build and grow your online presence effectively",
      students: 670,
      rating: 4.7,
      price: "$89",
      link: "https://teachable.com/course-link-3",
    },
  ];

  const achievements = [
    "Helped 1000+ students transform their careers",
    "Created 15+ comprehensive courses",
    "4.8/5 average student rating",
    "Featured in top design publications"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "Aaryan's courses completely transformed my career. The content is practical and easy to follow.",
    },
    {
      name: "Michael Chen", 
      role: "Designer",
      content: "The UI/UX course gave me the confidence to start my own design agency. Highly recommended!",
    },
    {
      name: "Emma Davis",
      role: "Marketing Manager", 
      content: "Clear explanations and real-world examples. Best investment I've made in my professional development.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 gradient-bg">
      {/* Hero Section with Personal Introduction */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left max-w-2xl">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                  <Play className="w-4 h-4 mr-2" />
                  Course Creator & Designer
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Hi, I'm <span className="text-primary">Aaryan Pawar</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
                I help people <span className="text-foreground font-medium">disconnect from distractions</span> and 
                <span className="text-foreground font-medium"> connect with their potential</span> through carefully crafted courses and design expertise.
              </p>
              
              {/* Key Achievements */}
              <div className="mb-8 space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="hover-lift text-lg px-8 py-3"
                  onClick={() => {
                    const coursesSection = document.getElementById('courses-section');
                    coursesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore My Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover-lift text-lg px-8 py-3" asChild>
                  <Link to="/about">Know About Me</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
                
                {/* Main image container */}
                <div className="relative bg-card rounded-3xl p-2 calm-shadow-lg hover-lift">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center text-muted-foreground">
                    {/* Placeholder for your image */}
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-4xl font-medium text-primary">AP</span>
                      </div>
                      <p className="text-sm">Your photo will go here</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 calm-shadow hover-lift">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium text-foreground">4.8</span>
                    <span className="text-sm text-muted-foreground">Rating</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 calm-shadow hover-lift">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">1000+</span>
                    <span className="text-sm text-muted-foreground">Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted courses designed to help you achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div className="text-2xl font-medium text-foreground">{course.price}</div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>
                  <Button 
                    className="w-full hover-lift group"
                    onClick={() => window.open(course.link, '_blank')}
                  >
                    Enroll Now
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real students who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join me to transform your vision
          </p>
          <Button 
            size="lg" 
            className="hover-lift text-lg px-8 py-3"
            onClick={() => setAuthDialog({ isOpen: true, defaultTab: "signup" })}
          >
            Get Started Today
          </Button>
        </div>
      </section>
      
      <AuthDialog 
        isOpen={authDialog.isOpen}
        onClose={() => setAuthDialog({ ...authDialog, isOpen: false })}
        defaultTab={authDialog.defaultTab}
      />
    </div>
  );
};

export default Home;
