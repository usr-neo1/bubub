
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

const EnglishRoadmap = () => {
  return (
    <Layout>
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-languages/10 text-languages px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Advanced English Communication</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Advanced</Badge>
                <Badge variant="outline">12 Weeks</Badge>
                <Badge variant="outline">Updated April 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Perfect your English skills for professional contexts, including advanced grammar,
                sophisticated vocabulary, and powerful presentation techniques.
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
                    <a href="#phase1" className="text-muted-foreground hover:text-foreground">Phase 1: Advanced Grammar</a>
                    <a href="#phase2" className="text-muted-foreground hover:text-foreground">Phase 2: Business English</a>
                    <a href="#phase3" className="text-muted-foreground hover:text-foreground">Phase 3: Executive Communication</a>
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
                    <Link to="/roadmaps/languages/french" className="text-muted-foreground hover:text-foreground">French Language</Link>
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
                              <p className="font-medium">Upper-intermediate English (B1-B2 level)</p>
                              <p className="text-sm text-muted-foreground">You should already have strong foundational English skills.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Check className="h-5 w-5 text-languages flex-shrink-0" />
                            <div>
                              <p className="font-medium">Professional experience</p>
                              <p className="text-sm text-muted-foreground">Familiarity with workplace communication contexts and needs.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="phase1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 1: Advanced Grammar & Vocabulary (Weeks 1-4)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Advanced Sentence Structures</h3>
                          <p className="text-muted-foreground mb-4">
                            Master complex and compound-complex sentences, advanced conditionals,
                            inversion, and sophisticated sentence linking techniques.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Exercise Sets
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">2</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Sophisticated Vocabulary</h3>
                          <p className="text-muted-foreground mb-4">
                            Expand your vocabulary with advanced collocations, idiomatic expressions,
                            phrasal verbs, and precise terminology for professional contexts.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
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

                    <div id="phase2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 2: Business English & Professional Communication (Weeks 5-8)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Business Writing</h3>
                          <p className="text-muted-foreground mb-4">
                            Perfect emails, reports, proposals, and other business documents
                            with clear structure, persuasive language, and professional tone.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Meeting & Negotiation Skills</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn advanced techniques for leading meetings, participating effectively,
                            negotiating positions, and achieving consensus in English.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Role-Play Scenarios
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="phase3" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 3: Executive Communication Skills (Weeks 9-12)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Advanced Presentation Skills</h3>
                          <p className="text-muted-foreground mb-4">
                            Master techniques for delivering impactful presentations, using
                            rhetorical devices, and handling Q&A sessions confidently.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Case Studies
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Cross-Cultural Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Develop skills for effective communication in multinational environments,
                            understanding cultural nuances and adapting your language accordingly.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
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

                    <div id="resources" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-lg bg-card">
                          <h3 className="text-lg font-medium mb-4">Recommended Books</h3>
                          <ul className="space-y-3">
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Advanced English for Business Communication</p>
                                <p className="text-sm text-muted-foreground">by Simon Sweeney</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">English for Presentations at International Conferences</p>
                                <p className="text-sm text-muted-foreground">by Adrian Wallwork</p>
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
                                <p className="font-medium">Harvard Business Review</p>
                                <p className="text-sm text-muted-foreground">Articles on business communication</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Cambridge English for Business Communication</p>
                                <p className="text-sm text-muted-foreground">Official Cambridge resources</p>
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
                    <h2 className="text-2xl font-bold mb-6">Advanced Business English Resources</h2>
                    
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Books & Workbooks</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Book className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Advanced English for Business Communication</p>
                            <p className="text-sm text-muted-foreground">by Simon Sweeney</p>
                            <p className="text-sm mt-1">
                              Comprehensive guide for professional communication in corporate environments.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Book className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">English for Presentations at International Conferences</p>
                            <p className="text-sm text-muted-foreground">by Adrian Wallwork</p>
                            <p className="text-sm mt-1">
                              Specialized guide for delivering professional presentations to international audiences.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Online Courses & Platforms</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">LinkedIn Learning - Advanced Business English</p>
                            <p className="text-sm text-muted-foreground">Professional communication course</p>
                            <p className="text-sm mt-1">
                              Video-based courses focusing on professional writing, presenting, and negotiating.
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              View Course →
                            </a>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Cambridge Business English Certificate (BEC) Higher</p>
                            <p className="text-sm text-muted-foreground">Official Cambridge certification</p>
                            <p className="text-sm mt-1">
                              Internationally recognized certification of advanced business English skills.
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              Learn More →
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
                            <p className="font-medium">English with Lucy - Business English</p>
                            <p className="text-sm mt-1">
                              Professional English communication tips from a British English speaker.
                            </p>
                            <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                              Visit Channel →
                            </a>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Youtube className="h-5 w-5 text-languages flex-shrink-0" />
                          <div>
                            <p className="font-medium">Harvard Business Review</p>
                            <p className="text-sm mt-1">
                              Videos on business communication, leadership, and management in advanced English.
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
                <Link to="/roadmaps/communication" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>Next: Communication Roadmap</span>
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

export default EnglishRoadmap;
