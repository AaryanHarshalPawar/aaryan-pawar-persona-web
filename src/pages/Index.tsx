
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, ArrowRight, Star, ExternalLink, Mail, MapPin, Phone, Moon, Sun, Brain, Leaf, Sparkles, Flower2, ChevronRight, Home } from "lucide-react";
import FAQ from "@/components/FAQ";

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
      icon: <Flower2 className="h-6 w-6 text-primary" />,
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
    <main className="min-h-screen pt-16 gradient-bg" role="main">
      {/* Skip to Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li className="flex items-center">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">Aaryan Pawar - Wellness Guide</span>
          </li>
        </ol>
      </nav>
      {/* Hero Section */}
      <section id="main-content" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
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
                  aria-label="Navigate to courses section to begin your wellness journey"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-lift text-lg px-8 py-3"
                  onClick={() => {
                    const aboutSection = document.getElementById('about-section');
                    aboutSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Navigate to about section to learn Aaryan's story"
                >
                  My Story
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div 
                className="w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center hover-lift border border-primary/20"
                role="img"
                aria-label="Decorative meditation symbol representing inner peace and mindfulness"
              >
                <div className="w-72 h-72 rounded-full bg-muted/50 flex items-center justify-center">
                  <Flower2 className="h-24 w-24 text-primary/60" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="courses-section" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="programs-heading" className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Transformational Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully designed journeys to help you find peace, improve sleep, and live with greater presence
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Available meditation and wellness programs">
            {courses.map((course, index) => (
              <article key={index} className="hover-lift calm-shadow border-0 bg-card h-full flex flex-col" role="listitem">
              <Card className="h-full flex flex-col border-0 bg-transparent shadow-none">
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
                    aria-label={`Join ${course.title} - Opens in new tab`}
                  >
                    Join the Journey
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="resources-heading">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="resources-heading" className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Free Resources for Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your transformation today with these complimentary guided experiences
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Free meditation and wellness resources">
            <article className="hover-lift calm-shadow border-0 bg-card text-center" role="listitem">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-8 pb-6">
                <Moon className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  20-Minute Sleep Story
                </h3>
                <p className="text-muted-foreground mb-4">
                  A gentle guided journey into deep, restorative sleep
                </p>
                <Button variant="outline" className="glow-button" aria-label="Listen to 20-minute sleep story">
                  Listen Now
                </Button>
              </CardContent>
            </Card>
            </article>
            
            <article className="hover-lift calm-shadow border-0 bg-card text-center" role="listitem">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-8 pb-6">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  5-Minute Stress Relief
                </h3>
                <p className="text-muted-foreground mb-4">
                  Quick breathing technique to calm your nervous system
                </p>
                <Button variant="outline" className="glow-button" aria-label="Try 5-minute stress relief technique">
                  Try Now
                </Button>
              </CardContent>
            </Card>
            </article>
            
            <article className="hover-lift calm-shadow border-0 bg-card text-center" role="listitem">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-8 pb-6">
                <Sun className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Morning Meditation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start your day with intention and peaceful presence
                </p>
                <Button variant="outline" className="glow-button" aria-label="Begin morning meditation practice">
                  Begin
                </Button>
              </CardContent>
            </Card>
            </article>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Hi, I'm <span className="text-primary">Aaryan Pawar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A meditation teacher and wellness guide dedicated to helping others find inner peace, better sleep, and authentic living.
            </p>
          </header>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" role="list" aria-label="Professional achievements and credentials">
            {achievements.map((achievement, index) => (
              <article key={index} className="hover-lift calm-shadow border-0 bg-card text-center" role="listitem">
              <Card className="border-0 bg-transparent shadow-none">
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
              </article>
            ))}
          </div>

          {/* My Story */}
          <article className="max-w-4xl mx-auto mb-20">
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
          </article>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Core values and principles">
            {values.map((value, index) => (
              <article key={index} className="hover-lift calm-shadow border-0 bg-card" role="listitem">
              <Card className="border-0 bg-transparent shadow-none">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people who've found peace, better sleep, and deeper connection through these practices
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Client testimonials and success stories">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="hover-lift calm-shadow border-0 bg-card" role="listitem">
              <Card className="border-0 bg-transparent shadow-none">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Let's Connect on Your <span className="text-primary">Wellness Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions about meditation, need guidance on sleep practices, or want to explore working together, I'm here to support you.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Contact information and ways to connect">
            {contactInfo.map((info, index) => (
              <article key={index} className="hover-lift calm-shadow border-0 bg-card text-center" role="listitem">
              <Card className="border-0 bg-transparent shadow-none">
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
              </article>
            ))}
          </div>

          <article className="hover-lift calm-shadow border-0 bg-card max-w-4xl mx-auto">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-foreground mb-4 text-center">
                Join the Mindful Community
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Follow along for daily inspiration, guided practices, and insights for mindful living.
              </p>
              <nav aria-label="Social media and content links">
                <ul className="flex flex-wrap gap-3 justify-center list-none">
                  <li>
                    <Button variant="outline" className="glow-button" aria-label="Follow on Instagram">
                      Instagram
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" className="glow-button" aria-label="Subscribe to YouTube channel">
                      YouTube
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" className="glow-button" aria-label="Listen to wellness podcast">
                      Podcast
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" className="glow-button" aria-label="Subscribe to newsletter">
                      Newsletter
                    </Button>
                  </li>
                </ul>
              </nav>
            </CardContent>
          </Card>
          </article>
        </div>
      </section>
      
      {/* Courses/Services JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Meditation and Wellness Programs",
            "description": "Transformational programs for meditation, sleep improvement, and inner peace",
            "itemListElement": courses.map((course, index) => ({
              "@type": "Course",
              "position": index + 1,
              "name": course.title,
              "description": course.description,
              "provider": {
                "@type": "Person",
                "name": "Aaryan Pawar"
              },
              "offers": {
                "@type": "Offer",
                "price": course.price.replace('$', ''),
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": course.rating,
                "ratingCount": course.students
              }
            }))
          })
        }}
      />
    </main>
  );
};

export default Index;
