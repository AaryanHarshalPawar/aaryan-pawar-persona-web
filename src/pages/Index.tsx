import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, ArrowRight, Star, ExternalLink, Mail, MapPin, Phone, Target, Heart, Lightbulb } from "lucide-react";

const Index = () => {
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

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "5,000+ Students",
      description: "Helped thousands of students achieve their career goals"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "15+ Courses",
      description: "Created comprehensive courses across multiple disciplines"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Industry Expert",
      description: "10+ years of experience in web development and design"
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality educational content"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Passion",
      description: "Genuinely care about each student's success and growth"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "Always exploring new ways to make learning more effective"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      detail: "hello@aaryanpawar.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      detail: "San Francisco, CA",
      description: "Available for remote work"
    }
  ];

  return (
    <div className="min-h-screen pt-16 gradient-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Disconnect to <span className="text-primary">Connect.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Join me to transform your vision
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="glow-button text-lg px-8 py-3"
                  onClick={() => {
                    const coursesSection = document.getElementById('courses-section');
                    coursesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-lift text-lg px-8 py-3"
                  onClick={() => {
                    const aboutSection = document.getElementById('about-section');
                    aboutSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Know About Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center hover-lift border border-primary/20">
                <div className="w-72 h-72 rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground font-medium">Your Photo Here</span>
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
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div className="text-2xl font-medium text-foreground">{course.price}</div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
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
                    className="w-full glow-button group"
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

      {/* About Me Section */}
      <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Hi, I'm <span className="text-primary">Aaryan Pawar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate educator and industry expert dedicated to helping others achieve their dreams through quality education.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* My Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-3xl font-medium tracking-tight text-foreground mb-8 text-center">
              My Story
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                My journey began over 10 years ago when I wrote my first line of code. What started as curiosity quickly became a passion, and that passion eventually grew into a career spanning web development, UI/UX design, and digital marketing.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on projects for companies ranging from innovative startups to established Fortune 500 corporations. Each project taught me something new and reinforced my belief that technology should serve people, not the other way around.
              </p>
              <p>
                Teaching wasn't originally part of my plan, but after mentoring junior developers and seeing their transformation, I realized I had found my true calling. There's nothing quite like the moment when a concept clicks for a student, or when they land their dream job using skills they learned in one of my courses.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h3 className="text-lg font-medium text-foreground ml-3">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Let's Start a <span className="text-primary">Conversation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions about my courses, need personalized guidance, or want to discuss collaboration opportunities, I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-1">
                    {info.detail}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="hover-lift calm-shadow border-0 bg-card max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-foreground mb-4 text-center">
                Connect on Social Media
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Follow me on social platforms for regular updates, tips, and behind-the-scenes content.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" className="glow-button">
                  LinkedIn
                </Button>
                <Button variant="outline" className="glow-button">
                  Twitter
                </Button>
                <Button variant="outline" className="glow-button">
                  YouTube
                </Button>
                <Button variant="outline" className="glow-button">
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
