
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from '@/components/ResourceCard';
import RoadmapCard from '@/components/RoadmapCard';
import { BookOpen, ArrowRight, Code } from 'lucide-react';

const BlankPage = () => {
  const featuredRoadmaps = [
    {
      title: 'Business Analytics Mastery',
      description: 'Learn data-driven decision making, business intelligence, and analytics tools.',
      category: 'finance' as const,
      difficulty: 'Intermediate' as const,
      estimatedTime: '10 weeks',
      slug: 'finance',
    },
    {
      title: 'Professional Negotiation Skills',
      description: 'Master practical negotiation techniques for business and personal success.',
      category: 'communication' as const,
      difficulty: 'Beginner' as const,
      estimatedTime: '6 weeks',
      slug: 'communication/negotiation',
    },
    {
      title: 'Email Marketing Specialist',
      description: 'Build email campaigns that convert and drive customer engagement.',
      category: 'marketing' as const,
      difficulty: 'Intermediate' as const,
      estimatedTime: '8 weeks',
      slug: 'marketing',
    },
    {
      title: 'Modern Web Development',
      description: 'Master React, TypeScript, and modern frontend development practices.',
      category: 'coding' as const,
      difficulty: 'Intermediate' as const,
      estimatedTime: '12 weeks',
      slug: 'coding',
    },
  ];

  const featuredResources = [
    {
      title: "Python for Financial Analysis",
      description: "Learn how to use Python programming for financial data analysis and modeling.",
      type: "course" as const,
      url: "https://www.udemy.com/course/python-for-finance-investment-fundamentals-data-analytics/",
      tags: ["finance", "python", "data analysis"],
    },
    {
      title: "The Psychology of Influence",
      description: "Understand the six principles of persuasion and how to apply them ethically in sales.",
      type: "book" as const,
      url: "https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X",
      tags: ["sales", "psychology", "persuasion"],
    },
    {
      title: "SEO Fundamentals: Complete Beginner's Guide",
      description: "Master search engine optimization concepts and techniques to boost web traffic.",
      type: "article" as const,
      url: "https://moz.com/beginners-guide-to-seo",
      tags: ["marketing", "SEO", "digital"],
    },
    {
      title: "Lovable AI App Builder",
      description: "Build web applications using AI-assisted coding with React and Tailwind CSS.",
      type: "tool" as const,
      url: "https://lovable.dev/",
      tags: ["coding", "AI", "web development", "no-code"],
    },
  ];

  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Featured Content</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Explore our top roadmaps and resources to accelerate your learning journey.
          </p>
          <div className="flex justify-center gap-4">
            <BookOpen className="h-16 w-16 text-primary opacity-75" />
            <Code className="h-16 w-16 text-primary opacity-75" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="roadmaps">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="roadmaps">Skill Roadmaps</TabsTrigger>
              <TabsTrigger value="resources">Learning Resources</TabsTrigger>
              <TabsTrigger value="coding">Coding Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="roadmaps">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">Featured Roadmaps</h2>
                  <Link to="/roadmaps">
                    <Button variant="outline" className="gap-2">
                      View All <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredRoadmaps.map((roadmap, index) => (
                    <RoadmapCard key={index} {...roadmap} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">Featured Resources</h2>
                  <Link to="/resources">
                    <Button variant="outline" className="gap-2">
                      View All <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredResources.filter(r => r.type !== "tool").map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="coding">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">Coding Tools & Resources</h2>
                  <Link to="/resources?category=coding">
                    <Button variant="outline" className="gap-2">
                      View All <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">AI-Powered Development Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ResourceCard 
                      title="Lovable AI App Builder"
                      description="Build complete web applications faster using AI-assisted development with React, Vite, and Tailwind CSS. Perfect for prototyping and full production apps."
                      type="tool"
                      url="https://lovable.dev/"
                      tags={["AI", "web development", "react", "tailwind", "no-code"]}
                    />
                    <ResourceCard 
                      title="Bolt AI Code Generator"
                      description="Generate code snippets, debug issues, and get programming assistance using AI. Integrates with popular IDEs and supports multiple programming languages."
                      type="tool"
                      url="https://github.com/features/copilot"
                      tags={["AI", "coding assistant", "productivity", "code generation"]}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Learning Resources for Developers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ResourceCard 
                      title="Modern JavaScript: From Fundamentals to Framework Mastery"
                      description="Comprehensive JavaScript course covering the latest ECMAScript features, algorithms, and modern frameworks."
                      type="course"
                      url="https://javascript.info/"
                      tags={["javascript", "web development", "frontend"]}
                    />
                    <ResourceCard 
                      title="UI/UX Design for Developers"
                      description="Learn design principles specifically for developers to create better user interfaces and experiences."
                      type="course"
                      url="https://www.refactoringui.com/"
                      tags={["UI/UX", "design", "frontend"]}
                    />
                    <ResourceCard 
                      title="Web Development Roadmap 2023"
                      description="Comprehensive guide to becoming a full-stack developer with recommended learning paths."
                      type="article"
                      url="https://roadmap.sh/frontend"
                      tags={["career", "learning path", "full-stack"]}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            Explore our comprehensive roadmaps and curated resources tailored to your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/roadmaps">
              <Button size="lg" variant="secondary" className="gap-2">
                Explore Roadmaps <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="secondary" className="gap-2">
                Browse Resources <BookOpen className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlankPage;
