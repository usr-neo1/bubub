
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
import { FileText, Search, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ResourceData {
  title: string;
  description: string;
  type: 'book' | 'video' | 'article' | 'course' | 'podcast' | 'tool';
  url: string;
  tags: string[];
  category: string;
}

const Resources = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState('all');
  const [categoryFilter, setCategoryFilter] = React.useState('all');

  const resourcesData: ResourceData[] = [
    // Finance Resources
    {
      title: "Financial Statement Analysis and Security Valuation",
      description: "A comprehensive guide to analyzing financial statements and valuing companies.",
      type: "book",
      url: "https://www.amazon.com/Financial-Statement-Analysis-Security-Valuation/dp/0078025311",
      tags: ["finance", "valuation", "financial analysis"],
      category: "Finance",
    },
    {
      title: "Corporate Finance Institute - Financial Modeling Courses",
      description: "Professional certification courses in financial modeling and analysis.",
      type: "course",
      url: "https://corporatefinanceinstitute.com/",
      tags: ["finance", "modeling", "certification"],
      category: "Finance",
    },
    {
      title: "Investment Banking Interview Guide",
      description: "Prepare for investment banking interviews with this comprehensive guide.",
      type: "article",
      url: "https://www.wallstreetprep.com/knowledge/investment-banking-interview-questions/",
      tags: ["finance", "career", "interview"],
      category: "Finance",
    },
    {
      title: "Excel for Financial Modeling",
      description: "Master Excel techniques specifically designed for financial analysis and modeling.",
      type: "course",
      url: "https://www.udemy.com/course/excel-for-financial-modeling/",
      tags: ["finance", "excel", "modeling"],
      category: "Finance",
    },
    {
      title: "The Intelligent Investor",
      description: "Benjamin Graham's timeless advice on value investing and market strategy.",
      type: "book",
      url: "https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661",
      tags: ["finance", "investing", "stocks"],
      category: "Finance",
    },
    
    // Sales Resources
    {
      title: "The Ultimate Sales Machine",
      description: "Turbocharge your business with relentless focus on 12 key strategies.",
      type: "book",
      url: "https://www.amazon.com/Ultimate-Sales-Machine-Turbocharge-Relentless/dp/1591842158",
      tags: ["sales", "business development", "strategy"],
      category: "Sales",
    },
    {
      title: "7 Proven Sales Closing Techniques",
      description: "Learn effective methods to close more deals and improve conversion rates.",
      type: "article",
      url: "https://blog.hubspot.com/sales/sales-closing-techniques-and-why-they-work",
      tags: ["sales", "techniques", "conversion"],
      category: "Sales",
    },
    {
      title: "B2B Sales Prospecting Strategies",
      description: "Effective methods for finding and qualifying B2B sales prospects.",
      type: "article",
      url: "https://www.saleshacker.com/b2b-sales-prospecting/",
      tags: ["sales", "B2B", "prospecting"],
      category: "Sales",
    },
    {
      title: "SPIN Selling Fieldbook",
      description: "Practical application of the popular SPIN selling methodology with real examples.",
      type: "book",
      url: "https://www.amazon.com/SPIN-Selling-Fieldbook-Practical-Relationship/dp/0070522359",
      tags: ["sales", "methodology", "practical"],
      category: "Sales",
    },
    {
      title: "HubSpot Sales Training Certification",
      description: "Free certification course covering fundamental sales techniques and CRM usage.",
      type: "course",
      url: "https://academy.hubspot.com/courses/sales-training",
      tags: ["sales", "certification", "free"],
      category: "Sales",
    },
    
    // Marketing Resources
    {
      title: "Digital Marketing for Beginners 2023",
      description: "Complete guide to starting and growing your digital marketing career.",
      type: "course",
      url: "https://www.udemy.com/course/digital-marketing-for-beginners-2023/",
      tags: ["marketing", "digital", "SEO", "social media"],
      category: "Marketing",
    },
    {
      title: "Content Marketing Strategy Framework",
      description: "Step-by-step framework for developing effective content marketing strategies.",
      type: "article",
      url: "https://contentmarketinginstitute.com/articles/content-strategy-framework/",
      tags: ["marketing", "content", "strategy"],
      category: "Marketing",
    },
    {
      title: "This Is Marketing",
      description: "Seth Godin's practical guide to making better marketing decisions and connecting with customers.",
      type: "book",
      url: "https://www.amazon.com/This-Marketing-Cant-Until-Learn/dp/0525540830",
      tags: ["marketing", "strategy", "psychology"],
      category: "Marketing",
    },
    {
      title: "Google Digital Marketing Certification",
      description: "Free certification course from Google covering all aspects of digital marketing.",
      type: "course",
      url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
      tags: ["marketing", "certification", "free", "google"],
      category: "Marketing",
    },
    {
      title: "Marketing Attribution Models Explained",
      description: "Understanding different methods of tracking marketing effectiveness across channels.",
      type: "article",
      url: "https://www.gartner.com/en/marketing/insights/articles/marketing-attribution-models",
      tags: ["marketing", "analytics", "attribution"],
      category: "Marketing",
    },
    
    // Languages Resources
    {
      title: "German A1-A2 Complete Course",
      description: "Comprehensive beginner's German language course with exercises and pronunciation practice.",
      type: "course",
      url: "https://www.lingoda.com/en/german/",
      tags: ["german", "language learning", "beginner"],
      category: "Languages",
    },
    {
      title: "French Pronunciation Masterclass",
      description: "Perfect your French accent with expert guidance and practice exercises.",
      type: "video",
      url: "https://www.youtube.com/watch?v=3HLlUt8nU3w",
      tags: ["french", "pronunciation", "language learning"],
      category: "Languages",
    },
    {
      title: "Fluent Forever",
      description: "Scientific approach to language learning focusing on memory techniques and personalization.",
      type: "book",
      url: "https://www.amazon.com/Fluent-Forever-Learn-Language-Forget/dp/0385348118",
      tags: ["language learning", "methodology", "memory"],
      category: "Languages",
    },
    {
      title: "Spanish Grammar Cheat Sheet",
      description: "Concise reference guide to Spanish verb conjugations and common grammatical patterns.",
      type: "article",
      url: "https://www.spanishdict.com/guide",
      tags: ["spanish", "grammar", "reference"],
      category: "Languages",
    },
    {
      title: "Business English Communication Skills",
      description: "Professional English communication course focused on workplace scenarios.",
      type: "course",
      url: "https://www.coursera.org/specializations/business-english",
      tags: ["english", "business", "professional"],
      category: "Languages",
    },
    
    // Communication Resources
    {
      title: "Mastering Public Speaking",
      description: "Overcome fears and become a confident, compelling speaker in any situation.",
      type: "course",
      url: "https://www.udemy.com/course/public-speaking-complete-course/",
      tags: ["communication", "public speaking", "confidence"],
      category: "Communication",
    },
    {
      title: "Negotiation Skills: How to Negotiate Effectively",
      description: "Learn proven negotiation tactics from experienced business leaders.",
      type: "podcast",
      url: "https://hbr.org/podcast/negotiation",
      tags: ["communication", "negotiation", "business"],
      category: "Communication",
    },
    {
      title: "Crucial Conversations",
      description: "Tools for talking when stakes are high and emotions are strong.",
      type: "book",
      url: "https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/1469266822",
      tags: ["communication", "conflict resolution", "management"],
      category: "Communication",
    },
    {
      title: "The Science of Effective Communication",
      description: "Research-backed techniques for improving interpersonal and professional communication.",
      type: "book",
      url: "https://www.amazon.com/Science-Effective-Communication-techniques-conversation-ebook/dp/B073D744CN",
      tags: ["communication", "psychology", "interpersonal"],
      category: "Communication",
    },
    {
      title: "Storytelling in Business: How to Create Compelling Narratives",
      description: "Learn to use storytelling techniques to engage audiences and convey complex ideas.",
      type: "article",
      url: "https://www.forbes.com/sites/forbescoachescouncil/2022/01/10/the-power-of-storytelling-in-business/",
      tags: ["communication", "storytelling", "presentation"],
      category: "Communication",
    },
    
    // Coding Resources - New Category
    {
      title: "Lovable AI App Builder",
      description: "Build web applications using AI-assisted coding with React, Vite, and Tailwind CSS.",
      type: "tool",
      url: "https://lovable.dev/",
      tags: ["coding", "AI", "web development", "no-code", "low-code"],
      category: "Coding",
    },
    {
      title: "Bolt AI Code Generator",
      description: "Generate and explain code snippets using AI for various programming tasks.",
      type: "tool",
      url: "https://github.com/features/copilot",
      tags: ["coding", "AI", "code generator", "productivity"],
      category: "Coding",
    },
    {
      title: "Modern Web Development Fundamentals",
      description: "Learn the core concepts of modern front-end development with React, Tailwind, and TypeScript.",
      type: "course",
      url: "https://frontendmasters.com/courses/web-development-v3/",
      tags: ["coding", "web development", "react", "tailwind"],
      category: "Coding",
    },
    {
      title: "Eloquent JavaScript",
      description: "A modern introduction to JavaScript programming with practical exercises.",
      type: "book",
      url: "https://eloquentjavascript.net/",
      tags: ["coding", "javascript", "free", "beginner"],
      category: "Coding",
    },
    {
      title: "Design Patterns in JavaScript",
      description: "Implementation of common design patterns using modern JavaScript features.",
      type: "video",
      url: "https://www.youtube.com/watch?v=BWprw8UHIzA",
      tags: ["coding", "javascript", "design patterns", "architecture"],
      category: "Coding",
    },
    {
      title: "TypeScript Handbook",
      description: "Official documentation and guide for learning TypeScript from the basics to advanced concepts.",
      type: "article",
      url: "https://www.typescriptlang.org/docs/handbook/",
      tags: ["coding", "typescript", "documentation", "reference"],
      category: "Coding",
    },
    {
      title: "Web Development Roadmap 2023",
      description: "Comprehensive guide to becoming a full-stack web developer with recommended learning paths.",
      type: "article",
      url: "https://roadmap.sh/frontend",
      tags: ["coding", "career", "roadmap", "learning path"],
      category: "Coding",
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
    "communication", "business", "coding", "AI", "web development"
  ];

  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Curated books, courses, articles, videos, tools, and podcasts to support your learning journey.
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
                    <SelectItem value="tool">Tools</SelectItem>
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
                    <SelectItem value="coding">Coding</SelectItem>
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
