
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Users, 
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

const SalesRoadmap = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-sales/10 text-sales px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Users className="h-4 w-4" />
                <span>Sales</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">B2B Sales Professional Path</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Beginner</Badge>
                <Badge variant="outline">8 Weeks</Badge>
                <Badge variant="outline">Updated May 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Master business-to-business sales strategies and client relationship management techniques 
                that drive consistent results and long-term business growth.
              </p>
            </div>
            <div className="hidden md:block">
              <Users className="h-32 w-32 text-sales/20" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-sales/5 -z-0 rounded-l-3xl"></div>
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
                    <a href="#phase1" className="text-muted-foreground hover:text-foreground">Phase 1: Foundations</a>
                    <a href="#phase2" className="text-muted-foreground hover:text-foreground">Phase 2: Prospecting</a>
                    <a href="#phase3" className="text-muted-foreground hover:text-foreground">Phase 3: Closing</a>
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
                    <Link to="/roadmaps/sales/enterprise" className="text-muted-foreground hover:text-foreground">Enterprise Sales</Link>
                    <Link to="/roadmaps/sales/consultative" className="text-muted-foreground hover:text-foreground">Consultative Selling</Link>
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
                              <Check className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Basic business understanding</p>
                                <p className="text-sm text-muted-foreground">Understanding of business models, customer needs, and basic market concepts.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Communication skills</p>
                                <p className="text-sm text-muted-foreground">Basic ability to communicate clearly and build rapport with others.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">CRM familiarity</p>
                                <p className="text-sm text-muted-foreground">Basic understanding of CRM software like Salesforce, HubSpot, or similar tools.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 1 */}
                    <div id="phase1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 1: Sales Foundations (Weeks 1-3)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">B2B Sales Fundamentals</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand the B2B sales process, decision making units, and the key differences 
                            between B2B and B2C sales approaches.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
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
                          <h3 className="text-lg font-medium mb-2">Buyer Psychology</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn how B2B buyers make decisions, their motivations, pain points, 
                            and the psychology behind corporate purchasing.
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
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Sales Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Master effective communication techniques for sales calls, emails, 
                            presentations, and in-person meetings.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div id="phase2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 2: Prospecting and Lead Generation (Weeks 4-6)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Target Account Selection</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to identify and prioritize high-value prospect accounts based on 
                            ideal customer profiles and market research.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 2 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 1 Template
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Outbound Prospecting</h3>
                          <p className="text-muted-foreground mb-4">
                            Master cold calling, cold emailing, and social selling techniques to 
                            engage new business prospects.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Lead Qualification</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn effective lead qualification frameworks like BANT, MEDDIC, and CHAMP 
                            to focus on high-potential opportunities.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Practice Guides
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div id="phase3" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 3: Presentations and Closing (Weeks 7-8)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">7</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Sales Presentations</h3>
                          <p className="text-muted-foreground mb-4">
                            Create and deliver compelling sales presentations that address buyer 
                            needs and showcase your solution's value.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">8</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Objection Handling</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn techniques to address and overcome common B2B sales objections 
                            related to price, timing, competition, and more.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 1 Script Guide
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">9</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Closing Techniques</h3>
                          <p className="text-muted-foreground mb-4">
                            Master effective closing strategies, proposal creation, and negotiation 
                            tactics for B2B sales cycles.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
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
                                <Book className="h-5 w-5 text-sales flex-shrink-0" />
                                <div>
                                  <p className="font-medium">SPIN Selling</p>
                                  <p className="text-sm text-muted-foreground">by Neil Rackham</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-sales flex-shrink-0" />
                                <div>
                                  <p className="font-medium">The Challenger Sale</p>
                                  <p className="text-sm text-muted-foreground">by Matthew Dixon & Brent Adamson</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-sales flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Fanatical Prospecting</p>
                                  <p className="text-sm text-muted-foreground">by Jeb Blount</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Online Courses & Certifications</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-sales flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Strategic B2B Sales Management</p>
                                  <p className="text-sm text-muted-foreground">HubSpot Academy</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-sales flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Challenger Development Program</p>
                                  <p className="text-sm text-muted-foreground">Challenger Inc.</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-sales flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Certified Sales Professional</p>
                                  <p className="text-sm text-muted-foreground">Sales Management Association</p>
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
                              <Book className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">SPIN Selling</p>
                                <p className="text-sm text-muted-foreground">by Neil Rackham</p>
                                <p className="text-sm mt-1">
                                  The original research-based sales methodology focused on high-value B2B sales.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">The Challenger Sale</p>
                                <p className="text-sm text-muted-foreground">by Matthew Dixon & Brent Adamson</p>
                                <p className="text-sm mt-1">
                                  Research-based approach showing how challenging customer thinking leads to successful sales.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Fanatical Prospecting</p>
                                <p className="text-sm text-muted-foreground">by Jeb Blount</p>
                                <p className="text-sm mt-1">
                                  Comprehensive guide to filling your pipeline with high-quality opportunities.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Online Courses</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Strategic B2B Sales Management</p>
                                <p className="text-sm text-muted-foreground">HubSpot Academy</p>
                                <p className="text-sm mt-1">
                                  Free comprehensive course covering B2B sales strategy and execution.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  View Course →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Challenger Development Program</p>
                                <p className="text-sm text-muted-foreground">Challenger Inc.</p>
                                <p className="text-sm mt-1">
                                  Official training program based on the Challenger Sale methodology.
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
                              <Youtube className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Sales Insights Lab</p>
                                <p className="text-sm mt-1">
                                  Practical B2B sales strategies and techniques from industry experts.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Youtube className="h-5 w-5 text-sales flex-shrink-0" />
                              <div>
                                <p className="font-medium">Victor Antonio</p>
                                <p className="text-sm mt-1">
                                  Sales training videos covering B2B strategies, objection handling, and closing techniques.
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
                <Link to="/roadmaps/marketing" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>Next: Marketing Roadmap</span>
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

export default SalesRoadmap;
