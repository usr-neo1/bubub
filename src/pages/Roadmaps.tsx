
import React from 'react';
import Layout from '@/components/Layout';
import RoadmapCard from '@/components/RoadmapCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BookOpen, Search } from 'lucide-react';

interface RoadmapData {
  title: string;
  description: string;
  category: 'finance' | 'sales' | 'marketing' | 'languages' | 'communication';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  slug: string;
}

const Roadmaps = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('all');
  const [difficultyFilter, setDifficultyFilter] = React.useState('all');

  const roadmapsData: RoadmapData[] = [
    {
      title: 'Financial Analyst Career Path',
      description: 'Learn the skills needed to excel as a financial analyst in today\'s market.',
      category: 'finance',
      difficulty: 'Intermediate',
      estimatedTime: '12 weeks',
      slug: 'finance',
    },
    {
      title: 'Investment Banking Fundamentals',
      description: 'Master the core concepts and skills of investment banking.',
      category: 'finance',
      difficulty: 'Advanced',
      estimatedTime: '16 weeks',
      slug: 'finance/investment-banking',
    },
    {
      title: 'Personal Finance Mastery',
      description: 'Take control of your personal finances with this comprehensive guide.',
      category: 'finance',
      difficulty: 'Beginner',
      estimatedTime: '6 weeks',
      slug: 'finance/personal-finance',
    },
    {
      title: 'B2B Sales Professional',
      description: 'Master business-to-business sales strategies and client relationship management.',
      category: 'sales',
      difficulty: 'Beginner',
      estimatedTime: '8 weeks',
      slug: 'sales',
    },
    {
      title: 'Enterprise Sales Techniques',
      description: 'Advanced strategies for high-value enterprise sales cycles.',
      category: 'sales',
      difficulty: 'Advanced',
      estimatedTime: '14 weeks',
      slug: 'sales/enterprise',
    },
    {
      title: 'Consultative Selling',
      description: 'Learn to position yourself as a trusted advisor in the sales process.',
      category: 'sales',
      difficulty: 'Intermediate',
      estimatedTime: '10 weeks',
      slug: 'sales/consultative',
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'From SEO to social media, learn all aspects of digital marketing.',
      category: 'marketing',
      difficulty: 'Intermediate',
      estimatedTime: '10 weeks',
      slug: 'marketing',
    },
    {
      title: 'Content Marketing Strategy',
      description: 'Create effective content marketing campaigns that drive engagement and conversions.',
      category: 'marketing',
      difficulty: 'Intermediate',
      estimatedTime: '8 weeks',
      slug: 'marketing/content',
    },
    {
      title: 'Social Media Marketing',
      description: 'Build and manage effective social media marketing campaigns.',
      category: 'marketing',
      difficulty: 'Beginner',
      estimatedTime: '6 weeks',
      slug: 'marketing/social-media',
    },
    {
      title: 'German Language (A1 to B2)',
      description: 'Comprehensive German language learning path from beginner to upper intermediate.',
      category: 'languages',
      difficulty: 'Beginner',
      estimatedTime: '24 weeks',
      slug: 'languages/german',
    },
    {
      title: 'French for Professionals',
      description: 'Business French language skills for international careers.',
      category: 'languages',
      difficulty: 'Intermediate',
      estimatedTime: '16 weeks',
      slug: 'languages/french',
    },
    {
      title: 'Advanced English Communication',
      description: 'Perfect your English skills for professional contexts.',
      category: 'languages',
      difficulty: 'Advanced',
      estimatedTime: '12 weeks',
      slug: 'languages/english',
    },
    {
      title: 'Public Speaking Mastery',
      description: 'Overcome fear and become a confident, compelling public speaker.',
      category: 'communication',
      difficulty: 'Intermediate',
      estimatedTime: '8 weeks',
      slug: 'communication/public-speaking',
    },
    {
      title: 'Business Negotiation Skills',
      description: 'Learn effective negotiation tactics for business contexts.',
      category: 'communication',
      difficulty: 'Advanced',
      estimatedTime: '10 weeks',
      slug: 'communication/negotiation',
    },
    {
      title: 'Interpersonal Communication',
      description: 'Develop stronger relationships through effective interpersonal communication.',
      category: 'communication',
      difficulty: 'Beginner',
      estimatedTime: '6 weeks',
      slug: 'communication',
    },
  ];

  const filteredRoadmaps = roadmapsData.filter((roadmap) => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        roadmap.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || roadmap.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === 'all' || roadmap.difficulty === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Learning Roadmaps</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover structured learning paths to develop your skills in finance, 
            sales, marketing, languages, and communication.
          </p>
          <div className="flex justify-center">
            <BookOpen className="h-16 w-16 text-primary opacity-75" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
            <div className="md:col-span-6 lg:col-span-7">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search roadmaps..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="languages">Languages</SelectItem>
                  <SelectItem value="communication">Communication</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-3 lg:col-span-3">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredRoadmaps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoadmaps.map((roadmap, index) => (
                <RoadmapCard key={index} {...roadmap} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No roadmaps found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                  setDifficultyFilter('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Roadmaps;
