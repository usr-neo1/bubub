
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Check, 
  FileText, 
  Video, 
  Book, 
  Link as LinkIcon,
  Download,
  ChevronLeft,
  ChevronRight,
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

const FrenchRoadmap = () => {
  return (
    <Layout>
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-languages/10 text-languages px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Globe className="h-4 w-4" />
                <span>French</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">French for Professionals</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Intermediate</Badge>
                <Badge variant="outline">16 Weeks</Badge>
                <Badge variant="outline">Updated March 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Business French language skills for international careers, focusing on professional
                communication, presentations, and business culture.
              </p>
            </div>
            <div className="hidden md:block">
              <Globe className="h-32 w-32 text-languages/20" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-languages/5 -z-0 rounded-l-3xl"></div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-20 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Roadmap Overview</h3>
                  <nav className="flex flex-col space-y-1 text-sm">
                    <a href="#prerequisites" className="text-muted-foreground hover:text-foreground">Prerequisites</a>
                    <a href="#phase1" className="text-muted-foreground hover:text-foreground">Phase 1: Business Foundations</a>
                    <a href="#phase2" className="text-muted-foreground hover:text-foreground">Phase 2: Professional Skills</a>
                    <a href="#phase3" className="text-muted-foreground hover:text-foreground">Phase 3: Advanced Business French</a>
                    <a href="#resources" className="text-muted-foreground hover:text-foreground">Learning Resources</a>
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
                    <Link to="/roadmaps/languages/german" className="text-muted-foreground hover:text-foreground">German Language</Link>
                    <Link to="/roadmaps/languages/english" className="text-muted-foreground hover:text-foreground">English Language</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <Tabs defaultValue="roadmap">
                <TabsList className="mb-8">
                  <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>

                <TabsContent value="roadmap">
                  <div className="space-y-16">
                    <div id="prerequisites" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
                      <div className="p-6 border rounded-lg bg-card">
                        <h3 className="text-lg font-medium mb-4">Before You Begin</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <Check className="h-5 w-5 text-languages flex-shrink-0" />
                            <div>
                              <p className="font-medium">Basic French proficiency (A2 level)</p>
                              <p className="text-sm text-muted-foreground">You should already understand basic French grammar and vocabulary.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Check className="h-5 w-5 text-languages flex-shrink-0" />
                            <div>
                              <p className="font-medium">Business knowledge</p>
                              <p className="text-sm text-muted-foreground">Familiarity with general business concepts and terminology in your native language.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="phase1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 1: Business Foundations (Weeks 1-5)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Professional Introductions</h3>
                          <p className="text-muted-foreground mb-4">
                            Master formal introductions, professional small talk, discussing your 
                            career, and networking in French business contexts.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">2</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Business Vocabulary</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn essential business terminology for departments, roles, industries,
                            products, services, and corporate structures.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Vocabulary Lists
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="phase2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 2: Professional Skills (Weeks 6-10)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Business Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Master professional email writing, formal letters, phone calls,
                            and scheduling meetings in French.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Meetings & Presentations</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to participate in and lead meetings, give presentations,
                            and handle Q&A sessions in French.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="phase3" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 3: Advanced Business French (Weeks 11-16)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Negotiation & Sales</h3>
                          <p className="text-muted-foreground mb-4">
                            Master vocabulary and techniques for negotiations, sales pitches,
                            and closing deals in French business settings.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">French Business Culture</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand French business etiquette, workplace culture, 
                            formality levels, and cultural nuances for successful business relationships.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="resources" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-lg bg-card">
                          <h3 className="text-lg font-medium mb-4">Recommended Books</h3>
                          <ul className="space-y-3">
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Le français des affaires</p>
                                <p className="text-sm text-muted-foreground">by Jean-Luc Penfornis</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Objectif Express: Le monde professionnel en français</p>
                                <p className="text-sm text-muted-foreground">by Anne-Lyse Dubois</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-6 border rounded-lg bg-card">
                          <h3 className="text-lg font-medium mb-4">Online Resources</h3>
                          <ul className="space-y-3">
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">TV5Monde - Langue Française</p>
                                <p className="text-sm text-muted-foreground">Business French section</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Alliance Française Business Courses</p>
                                <p className="text-sm text-muted-foreground">Professional French certification</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold mb-6">Business French Resources</h2>
                    
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Books & Workbooks</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Book className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Le français des affaires</p>
                            <p className="text-sm text-muted-foreground">by Jean-Luc Penfornis</p>
                            <p className="text-sm mt-1">
                              Comprehensive textbook for business French with exercises and audio.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Book className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Objectif Express: Le monde professionnel en français</p>
                            <p className="text-sm text-muted-foreground">by Anne-Lyse Dubois</p>
                            <p className="text-sm mt-1">
                              Fast-track course for business professionals needing practical French skills.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Online Courses & Apps</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">TV5Monde - Langue Française</p>
                            <p className="text-sm text-muted-foreground">Free business French exercises</p>
                            <p className="text-sm mt-1">
                              Interactive exercises based on authentic French business videos.
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              Access Resources →
                            </a>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Alliance Française Business French</p>
                            <p className="text-sm text-muted-foreground">Professional certification courses</p>
                            <p className="text-sm mt-1">
                              Courses preparing for the DFP (Diplôme de Français Professionnel).
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              View Courses →
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">YouTube Channels</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Youtube className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Français avec Pierre</p>
                            <p className="text-sm mt-1">
                              French lessons including a business French playlist.
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              Visit Channel →
                            </a>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Youtube className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">InnerFrench</p>
                            <p className="text-sm mt-1">
                              Intermediate and advanced French content including business topics.
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              Visit Channel →
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-between items-center mt-16 pt-8 border-t">
                <Link to="/roadmaps/languages" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <ChevronLeft className="h-4 w-4" />
                  <span>All Language Roadmaps</span>
                </Link>
                <Link to="/roadmaps/languages/english" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>Next: English Roadmap</span>
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

export default FrenchRoadmap;
