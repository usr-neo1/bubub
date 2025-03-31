
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import RoadmapCard from '@/components/RoadmapCard';
import { Button } from '@/components/ui/button';
import { BookOpen, BarChart, Globe, MessageSquare, ArrowRight, Users } from 'lucide-react';

const Index = () => {
  const featuredRoadmaps = [
    {
      title: 'Financial Analyst Career Path',
      description: 'Learn the skills needed to excel as a financial analyst in today\'s market.',
      category: 'finance' as const,
      difficulty: 'Intermediate' as const,
      estimatedTime: '12 weeks',
      slug: 'finance',
    },
    {
      title: 'B2B Sales Professional',
      description: 'Master business-to-business sales strategies and client relationship management.',
      category: 'sales' as const,
      difficulty: 'Beginner' as const,
      estimatedTime: '8 weeks',
      slug: 'sales',
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'From SEO to social media, learn all aspects of digital marketing.',
      category: 'marketing' as const,
      difficulty: 'Intermediate' as const,
      estimatedTime: '10 weeks',
      slug: 'marketing',
    },
  ];

  return (
    <Layout>
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Path to Skill <span className="text-primary">Mastery</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive roadmaps, resources, and learning paths for 
            career growth in finance, sales, marketing, languages, and communication.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/roadmaps">
              <Button size="lg" className="gap-2">
                Explore Roadmaps <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="gap-2">
                Browse Resources <BookOpen className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skill Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link to="/roadmaps/finance" className="block">
              <div className="p-6 bg-card hover:shadow-md transition-shadow rounded-lg border border-finance/20 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-finance/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-finance" />
                </div>
                <h3 className="font-medium text-lg mb-2">Finance</h3>
                <p className="text-sm text-muted-foreground">Financial analysis, investment strategies, and accounting skills</p>
              </div>
            </Link>
            <Link to="/roadmaps/sales" className="block">
              <div className="p-6 bg-card hover:shadow-md transition-shadow rounded-lg border border-sales/20 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-sales/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-sales" />
                </div>
                <h3 className="font-medium text-lg mb-2">Sales</h3>
                <p className="text-sm text-muted-foreground">Relationship building, closing techniques, and sales psychology</p>
              </div>
            </Link>
            <Link to="/roadmaps/marketing" className="block">
              <div className="p-6 bg-card hover:shadow-md transition-shadow rounded-lg border border-marketing/20 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-marketing/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-marketing" />
                </div>
                <h3 className="font-medium text-lg mb-2">Marketing</h3>
                <p className="text-sm text-muted-foreground">Digital marketing, content creation, and brand development</p>
              </div>
            </Link>
            <Link to="/roadmaps/languages" className="block">
              <div className="p-6 bg-card hover:shadow-md transition-shadow rounded-lg border border-languages/20 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-languages/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-languages" />
                </div>
                <h3 className="font-medium text-lg mb-2">Languages</h3>
                <p className="text-sm text-muted-foreground">German, French, English and other language learning paths</p>
              </div>
            </Link>
            <Link to="/roadmaps/communication" className="block">
              <div className="p-6 bg-card hover:shadow-md transition-shadow rounded-lg border border-communication/20 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-communication/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-communication" />
                </div>
                <h3 className="font-medium text-lg mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">Public speaking, negotiation, and interpersonal communication</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured roadmaps */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Roadmaps</h2>
            <Link to="/roadmaps">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRoadmaps.map((roadmap, index) => (
              <RoadmapCard key={index} {...roadmap} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            Explore our comprehensive roadmaps, curated resources, and expert-created content to accelerate your skill development.
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

export default Index;
