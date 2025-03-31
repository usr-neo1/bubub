
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Check, 
  FileText, 
  Video, 
  Book, 
  Link as LinkIcon,
  Download,
  ChevronLeft,
  ChevronRight,
  Globe,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const MarketingRoadmap = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-marketing/10 text-marketing px-3 py-1 rounded-full text-sm font-medium mb-4">
                <BarChart className="h-4 w-4" />
                <span>Marketing</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Digital Marketing Specialist</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Intermediate</Badge>
                <Badge variant="outline">10 Weeks</Badge>
                <Badge variant="outline">Updated April 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                From SEO to social media, learn all aspects of digital marketing to become a versatile 
                specialist capable of driving online growth and engagement.
              </p>
            </div>
            <div className="hidden md:block">
              <BarChart className="h-32 w-32 text-marketing/20" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-marketing/5 -z-0 rounded-l-3xl"></div>
      </section>

      {/* Main content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-20 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Roadmap Overview</h3>
                  <nav className="flex flex-col space-y-1 text-sm">
                    <a href="#prerequisites" className="text-muted-foreground hover:text-foreground">Prerequisites</a>
                    <a href="#phase1" className="text-muted-foreground hover:text-foreground">Phase 1: Digital Foundations</a>
                    <a href="#phase2" className="text-muted-foreground hover:text-foreground">Phase 2: Channel Mastery</a>
                    <a href="#phase3" className="text-muted-foreground hover:text-foreground">Phase 3: Strategy & Analytics</a>
                    <a href="#resources" className="text-muted-foreground hover:text-foreground">Key Resources</a>
                  </nav>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="font-medium">Actions</h3>
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" className="justify-start gap-2">
                      <Download className="h-4 w-4" /> Download PDF
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <LinkIcon className="h-4 w-4" /> Share Roadmap
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="font-medium">Related Roadmaps</h3>
                  <div className="flex flex-col space-y-2 text-sm">
                    <Link to="/roadmaps/marketing/content" className="text-muted-foreground hover:text-foreground">Content Marketing</Link>
                    <Link to="/roadmaps/marketing/social-media" className="text-muted-foreground hover:text-foreground">Social Media Marketing</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right main content */}
            <div className="lg:w-3/4">
              <Tabs defaultValue="roadmap">
                <TabsList className="mb-8">
                  <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>

                <TabsContent value="roadmap">
                  <div className="space-y-16">
                    {/* Prerequisites */}
                    <div id="prerequisites" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
                      <div className="space-y-6">
                        <div className="p-6 border rounded-lg bg-card">
                          <h3 className="text-lg font-medium mb-4">Before You Begin</h3>
                          <ul className="space-y-3">
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Basic marketing concepts</p>
                                <p className="text-sm text-muted-foreground">Understanding of marketing fundamentals, target audiences, and brand positioning.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Digital literacy</p>
                                <p className="text-sm text-muted-foreground">Comfort with using digital tools, social media platforms, and basic web concepts.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Content creation basics</p>
                                <p className="text-sm text-muted-foreground">Basic ability to write clear copy and understand visual content principles.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 1 */}
                    <div id="phase1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 1: Digital Foundations (Weeks 1-3)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Digital Marketing Principles</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand the fundamentals of digital marketing, including key channels, 
                            metrics, goals, and how it differs from traditional marketing.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">2</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Content Marketing Essentials</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn content strategy, creation, distribution, and how to develop content 
                            that resonates with target audiences.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Search Engine Optimization (SEO)</h3>
                          <p className="text-muted-foreground mb-4">
                            Master the fundamentals of SEO, including keyword research, on-page optimization, 
                            technical SEO, and link building.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Practical Guides
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div id="phase2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 2: Channel Mastery (Weeks 4-7)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Social Media Marketing</h3>
                          <p className="text-muted-foreground mb-4">
                            Develop strategies for major social platforms, content planning, 
                            community management, and paid social advertising.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Platform Guides
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Email Marketing</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn list building, segmentation, campaign design, automation, 
                            and measuring email marketing effectiveness.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Pay-Per-Click Advertising</h3>
                          <p className="text-muted-foreground mb-4">
                            Master Google Ads, campaign structure, keyword research, ad copy, 
                            bidding strategies, and conversion tracking.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 1 Case Study
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">7</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Content Distribution</h3>
                          <p className="text-muted-foreground mb-4">
                            Explore content promotion channels, influencer marketing, content 
                            syndication, and maximizing content reach.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div id="phase3" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 3: Strategy & Analytics (Weeks 8-10)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">8</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Digital Marketing Analytics</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to use Google Analytics, track KPIs, create dashboards, 
                            and extract meaningful insights from marketing data.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Tool Guides
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">9</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Conversion Rate Optimization</h3>
                          <p className="text-muted-foreground mb-4">
                            Master A/B testing, landing page optimization, UX principles, 
                            and methods to improve conversion rates.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Case Studies
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">10</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Integrated Digital Marketing Strategy</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to create comprehensive digital marketing strategies that integrate 
                            multiple channels to achieve business objectives.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Strategy Templates
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Resources */}
                    <div id="resources" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Key Resources</h2>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Essential Books</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-marketing flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Digital Marketing For Dummies</p>
                                  <p className="text-sm text-muted-foreground">by Ryan Deiss & Russ Henneberry</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-marketing flex-shrink-0" />
                                <div>
                                  <p className="font-medium">SEO 2023: Learn search engine optimization</p>
                                  <p className="text-sm text-muted-foreground">by Adam Clarke</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-marketing flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Epic Content Marketing</p>
                                  <p className="text-sm text-muted-foreground">by Joe Pulizzi</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Online Courses & Certifications</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-marketing flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Google Digital Marketing Certification</p>
                                  <p className="text-sm text-muted-foreground">Google</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-marketing flex-shrink-0" />
                                <div>
                                  <p className="font-medium">HubSpot Inbound Marketing Certification</p>
                                  <p className="text-sm text-muted-foreground">HubSpot Academy</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-marketing flex-shrink-0" />
                                <div>
                                  <p className="font-medium">SEMrush Academy Courses</p>
                                  <p className="text-sm text-muted-foreground">SEMrush</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Recommended Resources</h2>
                      <div className="space-y-6">
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Books</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Digital Marketing For Dummies</p>
                                <p className="text-sm text-muted-foreground">by Ryan Deiss & Russ Henneberry</p>
                                <p className="text-sm mt-1">
                                  Comprehensive guide covering all aspects of digital marketing for beginners.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">SEO 2023: Learn search engine optimization</p>
                                <p className="text-sm text-muted-foreground">by Adam Clarke</p>
                                <p className="text-sm mt-1">
                                  Up-to-date guide on SEO techniques that work in the current search landscape.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Online Courses</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Google Digital Marketing Certification</p>
                                <p className="text-sm text-muted-foreground">Google</p>
                                <p className="text-sm mt-1">
                                  Free comprehensive course covering key aspects of digital marketing.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  View Course →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">HubSpot Inbound Marketing Certification</p>
                                <p className="text-sm text-muted-foreground">HubSpot Academy</p>
                                <p className="text-sm mt-1">
                                  Learn inbound marketing methodology and best practices.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  View Course →
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">YouTube Channels</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Youtube className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Neil Patel</p>
                                <p className="text-sm mt-1">
                                  Digital marketing tips, SEO strategies, and marketing insights.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Youtube className="h-5 w-5 text-marketing flex-shrink-0" />
                              <div>
                                <p className="font-medium">Ahrefs</p>
                                <p className="text-sm mt-1">
                                  In-depth SEO tutorials and digital marketing strategy videos.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-between items-center mt-16 pt-8 border-t">
                <Link to="/roadmaps" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <ChevronLeft className="h-4 w-4" />
                  <span>All Roadmaps</span>
                </Link>
                <Link to="/roadmaps/languages" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>Next: Languages Roadmap</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingRoadmap;
