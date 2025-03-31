
import React from 'react';
import Layout from '@/components/Layout';
import VideoCard from '@/components/VideoCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface VideoData {
  title: string;
  description: string;
  channelName: string;
  duration: string;
  thumbnailUrl: string;
  videoId: string;
  category: string;
  tags: string[];
}

const Videos = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('all');

  const videosData: VideoData[] = [
    {
      title: "Financial Statement Analysis - Beginners Guide",
      description: "Learn how to analyze and interpret financial statements for investment decisions.",
      channelName: "Finance Academy",
      duration: "32:15",
      thumbnailUrl: "https://images.unsplash.com/photo-1599658880635-c39d9a8c0701?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId1",
      category: "Finance",
      tags: ["financial analysis", "investing", "accounting"],
    },
    {
      title: "Advanced Excel for Financial Modeling",
      description: "Master Excel techniques specifically designed for financial analysis and modeling.",
      channelName: "Excel for Finance",
      duration: "45:23",
      thumbnailUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId2",
      category: "Finance",
      tags: ["excel", "financial modeling", "data analysis"],
    },
    {
      title: "B2B Sales Prospecting: Finding Quality Leads",
      description: "Learn effective strategies for identifying and qualifying B2B sales prospects.",
      channelName: "Sales Accelerator",
      duration: "28:42",
      thumbnailUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId3",
      category: "Sales",
      tags: ["B2B sales", "prospecting", "lead generation"],
    },
    {
      title: "Sales Psychology: Understanding Customer Behavior",
      description: "Understand the psychological principles behind customer decision-making.",
      channelName: "Sales Mastery",
      duration: "36:19",
      thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId4",
      category: "Sales",
      tags: ["sales psychology", "customer behavior", "selling"],
    },
    {
      title: "Digital Marketing Strategy for 2023",
      description: "Updated strategies for effective digital marketing in the current landscape.",
      channelName: "Marketing Pros",
      duration: "41:37",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      videoId: "dummyId5",
      category: "Marketing",
      tags: ["digital marketing", "strategy", "SEO"],
    },
    {
      title: "Content Marketing: Creating Engaging Content",
      description: "Learn how to create content that engages your audience and drives conversions.",
      channelName: "Content Creation",
      duration: "25:14",
      thumbnailUrl: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
      videoId: "dummyId6",
      category: "Marketing",
      tags: ["content marketing", "copywriting", "engagement"],
    },
    {
      title: "German Pronunciation Guide for Beginners",
      description: "Master German pronunciation with this comprehensive guide for beginners.",
      channelName: "German Learning",
      duration: "38:52",
      thumbnailUrl: "https://images.unsplash.com/photo-1527866959252-deafbcdefc7c?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId7",
      category: "Languages",
      tags: ["german", "pronunciation", "language learning"],
    },
    {
      title: "French Conversation Practice - Intermediate Level",
      description: "Practice your French listening and speaking skills with these conversations.",
      channelName: "French Academy",
      duration: "42:08",
      thumbnailUrl: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2034&auto=format&fit=crop",
      videoId: "dummyId8",
      category: "Languages",
      tags: ["french", "conversation", "intermediate"],
    },
    {
      title: "Advanced English Grammar: Complex Sentences",
      description: "Master complex sentence structures in English for more sophisticated writing and speaking.",
      channelName: "English Excellence",
      duration: "35:26",
      thumbnailUrl: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?q=80&w=2065&auto=format&fit=crop",
      videoId: "dummyId9",
      category: "Languages",
      tags: ["english", "grammar", "advanced"],
    },
    {
      title: "Public Speaking: Overcoming Stage Fright",
      description: "Practical techniques to overcome anxiety and deliver confident presentations.",
      channelName: "Communication Skills",
      duration: "29:45",
      thumbnailUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId10",
      category: "Communication",
      tags: ["public speaking", "confidence", "anxiety"],
    },
    {
      title: "Negotiation Tactics for Business Professionals",
      description: "Learn effective negotiation strategies to achieve better outcomes in business.",
      channelName: "Business Communication",
      duration: "47:12",
      thumbnailUrl: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
      videoId: "dummyId11",
      category: "Communication",
      tags: ["negotiation", "business", "communication skills"],
    },
    {
      title: "Effective Email Communication in the Workplace",
      description: "Write clear, professional, and effective emails for business communication.",
      channelName: "Professional Communication",
      duration: "23:19",
      thumbnailUrl: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=2067&auto=format&fit=crop",
      videoId: "dummyId12",
      category: "Communication",
      tags: ["email", "business writing", "workplace communication"],
    },
  ];

  const filteredVideos = videosData.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || video.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const popularTags = [
    "financial analysis", "excel", "sales", "marketing", "german", "french", 
    "english", "public speaking", "negotiation"
  ];

  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Video Library</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Watch educational videos on finance, sales, marketing, languages, and communication skills.
          </p>
          <div className="flex justify-center">
            <Youtube className="h-16 w-16 text-primary opacity-75" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1 space-y-6">
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
                    placeholder="Search videos by title, description, or tags..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video, index) => (
                    <VideoCard key={index} {...video} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-lg text-muted-foreground">No videos found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
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

export default Videos;
