import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild className="hover-lift">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const currentIndex = blogPosts.findIndex(p => p.id === id);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <div className="min-h-screen pt-16">
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="outline" className="hover-lift mb-8" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg">👨‍💻</span>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {post.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  Web Developer & Educator
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n\n/g, '</p><p class="mb-6">')
                  .replace(/\n/g, '<br>')
                  .replace(/^/, '<p class="mb-6">')
                  .replace(/$/, '</p>')
                  .replace(/## (.*?)(<br>|<\/p>)/g, '<h2 class="text-2xl font-medium text-foreground mt-12 mb-6 tracking-tight">$1</h2>')
                  .replace(/### (.*?)(<br>|<\/p>)/g, '<h3 class="text-xl font-medium text-foreground mt-8 mb-4 tracking-tight">$1</h3>')
                  .replace(/`([^`]*)`/g, '<code class="px-2 py-1 bg-muted rounded text-sm font-mono">$1</code>')
                  .replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm font-mono">$2</code></pre>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-foreground">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^\d+\.\s/gm, '<li class="mb-2">')
                  .replace(/^-\s/gm, '<li class="mb-2">')
              }}
            />
          </div>

          {/* Article Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              {prevPost ? (
                <Button variant="outline" className="hover-lift flex-1" asChild>
                  <Link to={`/blog/${prevPost.id}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Previous</div>
                      <div className="font-medium truncate">{prevPost.title}</div>
                    </div>
                  </Link>
                </Button>
              ) : (
                <div className="flex-1"></div>
              )}
              
              {nextPost ? (
                <Button variant="outline" className="hover-lift flex-1" asChild>
                  <Link to={`/blog/${nextPost.id}`}>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Next</div>
                      <div className="font-medium truncate">{nextPost.title}</div>
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div className="flex-1"></div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore my comprehensive courses and take your skills to the next level
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

export default BlogPost;