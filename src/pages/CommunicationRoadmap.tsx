import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Check, 
  FileText, 
  Video, 
  Book, 
  Link as LinkIcon,
  Download,
  ChevronLeft,
  ChevronRight,
  Globe,
  Youtube,
  Smile,
  Award,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CommunicationRoadmap = () => {
  const { toast } = useToast();
  
  const handleComingSoon = () => {
    toast({
      title: "Coming Soon! 🚧",
      description: "We're currently building this roadmap. Check back soon!",
      duration: 3000,
    });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-communication/10 text-communication px-3 py-1 rounded-full text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                <span>Communication</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Interpersonal Communication Skills 🗣️</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Beginner</Badge>
                <Badge variant="outline">6 Weeks</Badge>
                <Badge variant="outline">Updated February 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Develop stronger relationships through effective interpersonal communication strategies, 
                active listening, and emotional intelligence. 💬
              </p>
            </div>
            <div className="hidden md:block">
              <MessageSquare className="h-32 w-32 text-communication/20" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-communication/5 -z-0 rounded-l-3xl"></div>
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
                    <a href="#phase2" className="text-muted-foreground hover:text-foreground">Phase 2: Advanced Skills</a>
                    <a href="#phase3" className="text-muted-foreground hover:text-foreground">Phase 3: Application</a>
                    <a href="#resources" className="text-muted-foreground hover:text-foreground">Key Resources</a>
                    <a href="#related" className="text-muted-foreground hover:text-foreground">Related Roadmaps</a>
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
                    <Link to="/roadmaps/communication/public-speaking">
                      <Button 
                        variant="ghost" 
                        className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground"
                      >
                        Public Speaking 🎤
                      </Button>
                    </Link>
                    <Link to="/roadmaps/communication/negotiation">
                      <Button 
                        variant="ghost" 
                        className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground"
                      >
                        Business Negotiation 🤝
                      </Button>
                    </Link>
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
                      <h2 className="text-2xl font-bold mb-6">Prerequisites 📋</h2>
                      <div className="space-y-6">
                        <div className="p-6 border rounded-lg bg-card">
                          <h3 className="text-lg font-medium mb-4">Before You Begin</h3>
                          <ul className="space-y-3">
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Self-awareness 🧠</p>
                                <p className="text-sm text-muted-foreground">Basic understanding of your own communication style and preferences.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Motivation to improve ⭐</p>
                                <p className="text-sm text-muted-foreground">Willingness to practice and apply new communication techniques.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Basic social skills 👋</p>
                                <p className="text-sm text-muted-foreground">Fundamental understanding of social interactions and conversational norms.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 1 */}
                    <div id="phase1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 1: Communication Foundations (Weeks 1-2) 🌱</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Communication Models & Principles</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand the basic models of communication, barriers to effective 
                            communication, and core principles of meaningful exchanges.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 2 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">2</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Active Listening</h3>
                          <p className="text-muted-foreground mb-4">
                            Master the art of truly hearing others through active listening techniques, 
                            reflective responses, and engaged attention.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Practice Exercises
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Verbal Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Develop clear, concise and effective verbal communication through 
                            vocabulary building, tone management, and structured messaging.
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

                    {/* Phase 2 */}
                    <div id="phase2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 2: Advanced Communication Skills (Weeks 3-4) 🚀</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Nonverbal Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand body language, facial expressions, gestures, and other nonverbal 
                            cues that impact communication effectiveness.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 1 Practice Guide
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Emotional Intelligence</h3>
                          <p className="text-muted-foreground mb-4">
                            Develop self-awareness, empathy, and emotional management skills to 
                            enhance relationship building and communication effectiveness.
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
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Conflict Resolution</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn techniques for managing disagreements, navigating difficult 
                            conversations, and finding mutually beneficial resolutions.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Case Studies
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div id="phase3" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 3: Real-World Application (Weeks 5-6) 🌍</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">7</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Relationship Building</h3>
                          <p className="text-muted-foreground mb-4">
                            Apply communication skills to build stronger personal and professional 
                            relationships through trust, rapport, and mutual understanding.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Practical Exercises
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">8</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Assertive Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to express your thoughts, feelings, and needs clearly and 
                            respectfully without being passive or aggressive.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Practice Scenarios
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">9</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Communication in Different Contexts</h3>
                          <p className="text-muted-foreground mb-4">
                            Apply communication skills to various settings: workplace, social, 
                            family, cross-cultural, and digital environments.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
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

                    {/* Key Resources */}
                    <div id="resources" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Key Resources 📚</h2>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Essential Books</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-communication flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Crucial Conversations</p>
                                  <p className="text-sm text-muted-foreground">by Kerry Patterson et al.</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-communication flex-shrink-0" />
                                <div>
                                  <p className="font-medium">How to Win Friends and Influence People</p>
                                  <p className="text-sm text-muted-foreground">by Dale Carnegie</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-communication flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Emotional Intelligence 2.0</p>
                                  <p className="text-sm text-muted-foreground">by Travis Bradberry & Jean Greaves</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Online Courses & Certifications</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-communication flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Effective Communication Skills</p>
                                  <p className="text-sm text-muted-foreground">LinkedIn Learning</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-communication flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Interpersonal Communication</p>
                                  <p className="text-sm text-muted-foreground">Coursera - University of Pennsylvania</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-communication flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Difficult Conversations: Master the Art</p>
                                  <p className="text-sm text-muted-foreground">edX - Rochester Institute of Technology</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Related Roadmaps */}
                    <div id="related" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Related Roadmaps 🔄</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link to="/roadmaps/communication/public-speaking" className="no-underline">
                          <Card className="h-full hover:shadow-md transition-all border-communication/20">
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div className="p-2 rounded-full bg-muted">
                                  <MessageSquare className="h-5 w-5 text-communication" />
                                </div>
                              </div>
                              <CardTitle className="mt-4">Public Speaking 🎤</CardTitle>
                              <CardDescription>
                                Master the art of public speaking with techniques for engaging presentations,
                                overcoming stage fright, and captivating your audience.
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Estimated Time: 8 Weeks</span>
                                <Button size="sm" variant="ghost" className="gap-1">
                                  View Roadmap <ExternalLink className="h-3 w-3" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>

                        <Link to="/roadmaps/communication/negotiation" className="no-underline">
                          <Card className="h-full hover:shadow-md transition-all border-communication/20">
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div className="p-2 rounded-full bg-muted">
                                  <MessageSquare className="h-5 w-5 text-communication" />
                                </div>
                              </div>
                              <CardTitle className="mt-4">Business Negotiation 🤝</CardTitle>
                              <CardDescription>
                                Develop professional negotiation skills for business contexts, including deal-making,
                                conflict resolution, and win-win strategies.
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Estimated Time: 10 Weeks</span>
                                <Button size="sm" variant="ghost" className="gap-1">
                                  View Roadmap <ExternalLink className="h-3 w-3" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
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
                              <Book className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Crucial Conversations</p>
                                <p className="text-sm text-muted-foreground">by Kerry Patterson et al.</p>
                                <p className="text-sm mt-1">
                                  Tools for talking when stakes are high and emotions are strong.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">How to Win Friends and Influence People</p>
                                <p className="text-sm text-muted-foreground">by Dale Carnegie</p>
                                <p className="text-sm mt-1">
                                  Classic guide to building relationships and communicating effectively.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Online Courses</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Effective Communication Skills</p>
                                <p className="text-sm text-muted-foreground">LinkedIn Learning</p>
                                <p className="text-sm mt-1">
                                  Comprehensive course on improving verbal, nonverbal, and written communication.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  View Course →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Interpersonal Communication</p>
                                <p className="text-sm text-muted-foreground">Coursera - University of Pennsylvania</p>
                                <p className="text-sm mt-1">
                                  Academic course on interpersonal communication theory and practice.
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
                              <Youtube className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">Charisma on Command</p>
                                <p className="text-sm mt-1">
                                  Videos on social skills, confidence, and communication effectiveness.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Youtube className="h-5 w-5 text-communication flex-shrink-0" />
                              <div>
                                <p className="font-medium">The Art of Improvement</p>
                                <p className="text-sm mt-1">
                                  Personal development channel with many videos on communication skills.
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
                <Link to="/resources" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>View All Resources</span>
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

export default CommunicationRoadmap;
