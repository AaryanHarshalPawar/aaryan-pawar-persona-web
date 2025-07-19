import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, ArrowRight, Star, ExternalLink } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
              Disconnect to <span className="text-primary">Connect.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join me to transform your vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-lift text-lg px-8 py-3"
                onClick={() => {
                  const coursesSection = document.getElementById('courses-section');
                  coursesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift text-lg px-8 py-3" asChild>
                <Link to="/about">Know About Me</Link>
              </Button>
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
            Join thousands of students who have already transformed their careers
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