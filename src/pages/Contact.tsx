import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-6">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have questions about my courses, need personalized guidance, or want to discuss collaboration opportunities, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your learning journey? I'm here to help you succeed.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    How can I access the courses?
                  </h3>
                  <p className="text-muted-foreground">
                    All courses are hosted on our learning platform. Once you enroll, you'll receive immediate access to all course materials and resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Do you offer one-on-one mentoring?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! I offer personalized mentoring sessions for students who need additional guidance. Contact me for more details about availability and pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Can you create custom courses for organizations?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. I work with companies and organizations to create tailored training programs. Let's discuss your specific needs and requirements.
                  </p>
                </div>
              </div>
            </div>

            <Card className="hover-lift calm-shadow border-0 bg-card">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium text-foreground mb-4">
                  Connect on Social Media
                </h3>
                <p className="text-muted-foreground mb-4">
                  Follow me on social platforms for regular updates, tips, and behind-the-scenes content.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="hover-lift">
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    Twitter
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    YouTube
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;