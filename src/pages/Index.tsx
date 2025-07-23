
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, ArrowRight, Star, ExternalLink, Mail, MapPin, Phone, Moon, Sun, Lotus, Brain, Leaf, Sparkles } from "lucide-react";

const Index = () => {
  const courses = [
    {
      title: "Deep Sleep Transformation",
      description: "Master NSDR and Yoga Nidra techniques for profound rest and recovery",
      students: 2150,
      rating: 4.9,
      price: "$89",
      link: "https://course-platform.com/deep-sleep",
    },
    {
      title: "Mindfulness Meditation Mastery",
      description: "Build a sustainable daily practice for inner peace and clarity",
      students: 1890,
      rating: 4.8,
      price: "$79",
      link: "https://course-platform.com/mindfulness",
    },
    {
      title: "Stress to Serenity Program",
      description: "Transform anxiety and overwhelm into calm confidence",
      students: 1270,
      rating: 4.9,
      price: "$99",
      link: "https://course-platform.com/stress-relief",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Busy Mother & Entrepreneur",
      content: "The sleep transformation course changed my life. I finally get deep, restorative sleep every night. My energy and mood have completely transformed.",
    },
    {
      name: "Michael Chen",
      role: "Corporate Executive",
      content: "Learning meditation with Aaryan helped me manage work stress and find inner peace. I'm more focused and present with my family now.",
    },
    {
      name: "Emma Rodriguez",
      role: "Wellness Seeker",
      content: "The breathwork techniques have been life-changing. I feel more grounded, centered, and able to handle life's challenges with grace.",
    },
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "8,000+ Lives Transformed",
      description: "Guided thousands on their journey to inner peace and wellness"
    },
    {
      icon: <Moon className="h-8 w-8 text-primary" />,
      title: "50,000+ Hours",
      description: "Of guided meditation and sleep sessions delivered"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certified Wellness Guide",
      description: "500-hour meditation teacher training and NSDR specialist"
    }
  ];

  const values = [
    {
      icon: <Lotus className="h-6 w-6 text-primary" />,
      title: "Inner Peace",
      description: "Helping you find stillness and calm in the midst of life's storms"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Authentic Living",
      description: "Supporting your journey to live aligned with your true self"
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Holistic Wellness",
      description: "Nurturing mind, body, and spirit for complete well-being"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      detail: "hello@aaryanpawar.com",
      description: "Reach out for guidance and support"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Available for consultations"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Retreat Center",
      detail: "Mindful Sanctuary, CA",
      description: "In-person workshops available"
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
                Disconnect to <span className="text-primary">Reconnect.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Find inner peace through meditation, transform your sleep with NSDR, and awaken to your highest potential
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
                  Begin Your Journey
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
                  My Story
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center hover-lift border border-primary/20">
                <div className="w-72 h-72 rounded-full bg-muted/50 flex items-center justify-center">
                  <Lotus className="h-24 w-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="courses-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Transformational Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully designed journeys to help you find peace, improve sleep, and live with greater presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover-lift calm-shadow border-0 bg-card h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    {index === 0 ? <Moon className="h-8 w-8 text-primary" /> : 
                     index === 1 ? <Brain className="h-8 w-8 text-primary" /> : 
                     <Sparkles className="h-8 w-8 text-primary" />}
                    <div className="text-2xl font-medium text-foreground">{course.price}</div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} participants
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
                    Join the Journey
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Free Resources for Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your transformation today with these complimentary guided experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift calm-shadow border-0 bg-card text-center">
              <CardContent className="pt-8 pb-6">
                <Moon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  20-Minute Sleep Story
                </h3>
                <p className="text-muted-foreground mb-4">
                  A gentle guided journey into deep, restorative sleep
                </p>
                <Button variant="outline" className="glow-button">
                  Listen Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-lift calm-shadow border-0 bg-card text-center">
              <CardContent className="pt-8 pb-6">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  5-Minute Stress Relief
                </h3>
                <p className="text-muted-foreground mb-4">
                  Quick breathing technique to calm your nervous system
                </p>
                <Button variant="outline" className="glow-button">
                  Try Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-lift calm-shadow border-0 bg-card text-center">
              <CardContent className="pt-8 pb-6">
                <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Morning Meditation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start your day with intention and peaceful presence
                </p>
                <Button variant="outline" className="glow-button">
                  Begin
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Hi, I'm <span className="text-primary">Aaryan Pawar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A meditation teacher and wellness guide dedicated to helping others find inner peace, better sleep, and authentic living.
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
              My Journey to Inner Peace
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                My journey began during a particularly stressful period in my corporate career when I was struggling with insomnia, anxiety, and a constant feeling of being disconnected from myself. That's when I discovered meditation and the transformative power of mindful living.
              </p>
              <p>
                What started as a desperate attempt to find better sleep through NSDR (Non-Sleep Deep Rest) and Yoga Nidra practices became a profound spiritual awakening. I realized that the peace I was seeking wasn't somewhere out there—it was already within me, waiting to be uncovered.
              </p>
              <p>
                Over the past 8 years, I've dedicated myself to studying ancient wisdom traditions, completing extensive meditation teacher training, and developing practices that work for our modern, busy lives. My mission is simple: to share these life-changing tools with anyone seeking greater peace, better sleep, and a deeper connection to their authentic self.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people who've found peace, better sleep, and deeper connection through these practices
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
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Let's Connect on Your <span className="text-primary">Wellness Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions about meditation, need guidance on sleep practices, or want to explore working together, I'm here to support you.
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
                Join the Mindful Community
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Follow along for daily inspiration, guided practices, and insights for mindful living.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" className="glow-button">
                  Instagram
                </Button>
                <Button variant="outline" className="glow-button">
                  YouTube
                </Button>
                <Button variant="outline" className="glow-button">
                  Podcast
                </Button>
                <Button variant="outline" className="glow-button">
                  Newsletter
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
