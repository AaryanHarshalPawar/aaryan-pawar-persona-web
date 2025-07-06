import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
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

  return (
    <div className="min-h-screen pt-16 gradient-bg">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-6">
                Hi, I'm <span className="text-primary">Aaryan Pawar</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A passionate educator and industry expert dedicated to helping others achieve their dreams through quality education.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience in web development, design, and digital marketing, I've had the privilege of working with startups and Fortune 500 companies. Now, I channel that experience into creating courses that truly make a difference.
              </p>
              <Button size="lg" className="hover-lift" asChild>
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover-lift">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-foreground mb-4">
              Achievements & Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect the trust students have placed in me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight text-foreground mb-8 text-center">
            My Story
          </h2>
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
            <p>
              Today, I'm focused entirely on creating educational content that doesn't just teach skills, but transforms careers and lives. Every course I create is designed with one goal in mind: to give you the knowledge and confidence you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-foreground mb-4">
              My Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything I do
            </p>
          </div>

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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground mb-6">
            Ready to Learn Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'd love to help you on your journey to success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-lift" asChild>
              <Link to="/">View Courses</Link>
            </Button>
            <Button variant="outline" size="lg" className="hover-lift" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;