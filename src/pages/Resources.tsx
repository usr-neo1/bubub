
import React from 'react';
import Layout from '@/components/Layout';
import ResourceCard from '@/components/ResourceCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FileText, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ResourceData {
  title: string;
  description: string;
  type: 'book' | 'video' | 'article' | 'course' | 'podcast';
  url: string;
  tags: string[];
  category: string;
}

const Resources = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState('all');
  const [categoryFilter, setCategoryFilter] = React.useState('all');

  const resourcesData: ResourceData[] = [
    {
      title: "Financial Statement Analysis and Security Valuation",
      description: "A comprehensive guide to analyzing financial statements and valuing companies.",
      type: "book",
      url: "#",
      tags: ["finance", "valuation", "financial analysis"],
      category: "Finance",
    },
    {
      title: "The Ultimate Sales Machine",
      description: "Turbocharge your business with relentless focus on 12 key strategies.",
      type: "book",
      url: "#",
      tags: ["sales", "business development", "strategy"],
      category: "Sales",
    },
    {
      title: "Digital Marketing for Beginners 2023",
      description: "Complete guide to starting and growing your digital marketing career.",
      type: "course",
      url: "#",
      tags: ["marketing", "digital", "SEO", "social media"],
      category: "Marketing",
    },
    {
      title: "German A1-A2 Complete Course",
      description: "Comprehensive beginner's German language course with exercises and pronunciation practice.",
      type: "course",
      url: "#",
      tags: ["german", "language learning", "beginner"],
      category: "Languages",
    },
    {
      title: "Mastering Public Speaking",
      description: "Overcome fears and become a confident, compelling speaker in any situation.",
      type: "course",
      url: "#",
      tags: ["communication", "public speaking", "confidence"],
      category: "Communication",
    },
    {
      title: "Investment Banking Interview Guide",
      description: "Prepare for investment banking interviews with this comprehensive guide.",
      type: "article",
      url: "#",
      tags: ["finance", "career", "interview"],
      category: "Finance",
    },
    {
      title: "7 Proven Sales Closing Techniques",
      description: "Learn effective methods to close more deals and improve conversion rates.",
      type: "article",
      url: "#",
      tags: ["sales", "techniques", "conversion"],
      category: "Sales",
    },
    {
      title: "Content Marketing Strategy Framework",
      description: "Step-by-step framework for developing effective content marketing strategies.",
      type: "article",
      url: "#",
      tags: ["marketing", "content", "strategy"],
      category: "Marketing",
    },
    {
      title: "French Pronunciation Masterclass",
      description: "Perfect your French accent with expert guidance and practice exercises.",
      type: "video",
      url: "#",
      tags: ["french", "pronunciation", "language learning"],
      category: "Languages",
    },
    {
      title: "Negotiation Skills: How to Negotiate Effectively",
      description: "Learn proven negotiation tactics from experienced business leaders.",
      type: "podcast",
      url: "#",
      tags: ["communication", "negotiation", "business"],
      category: "Communication",
    },
    {
      title: "Excel for Financial Modeling",
      description: "Master Excel techniques specifically designed for financial analysis and modeling.",
      type: "course",
      url: "#",
      tags: ["finance", "excel", "modeling"],
      category: "Finance",
    },
    {
      title: "B2B Sales Prospecting Strategies",
      description: "Effective methods for finding and qualifying B2B sales prospects.",
      type: "article",
      url: "#",
      tags: ["sales", "B2B", "prospecting"],
      category: "Sales",
    },
  ];

  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;
    const matchesCategory = categoryFilter === 'all' || resource.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const popularTags = [
    "finance", "sales", "marketing", "german", "french", "english", 
    "communication", "business", "excel", "strategy"
  ];

  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Curated books, courses, articles, videos, and podcasts to support your learning journey.
          </p>
          <div className="flex justify-center">
            <FileText className="h-16 w-16 text-primary opacity-75" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Resource Type</h3>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="book">Books</SelectItem>
                    <SelectItem value="course">Courses</SelectItem>
                    <SelectItem value="article">Articles</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                    <SelectItem value="podcast">Podcasts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Category</h3>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
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
              
              <div>
                <h3 className="text-lg font-medium mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary"
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery('');
                    setTypeFilter('all');
                    setCategoryFilter('all');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search resources by title, description, or tags..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-lg text-muted-foreground">No resources found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setTypeFilter('all');
                      setCategoryFilter('all');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
