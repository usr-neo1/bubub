
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

const GermanRoadmap = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-languages/10 text-languages px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Globe className="h-4 w-4" />
                <span>German</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">German Language (A1 to B2)</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Beginner to Intermediate</Badge>
                <Badge variant="outline">24 Weeks</Badge>
                <Badge variant="outline">Updated January 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive German language learning path from beginner to upper intermediate level,
                focusing on practical communication skills and cultural understanding.
              </p>
            </div>
            <div className="hidden md:block">
              <Globe className="h-32 w-32 text-languages/20" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-languages/5 -z-0 rounded-l-3xl"></div>
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
                    <a href="#a1" className="text-muted-foreground hover:text-foreground">A1 Level (Beginner)</a>
                    <a href="#a2" className="text-muted-foreground hover:text-foreground">A2 Level (Elementary)</a>
                    <a href="#b1" className="text-muted-foreground hover:text-foreground">B1 Level (Intermediate)</a>
                    <a href="#b2" className="text-muted-foreground hover:text-foreground">B2 Level (Upper Intermediate)</a>
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
                    <Link to="/roadmaps/languages/french" className="text-muted-foreground hover:text-foreground">French Language</Link>
                    <Link to="/roadmaps/languages/english" className="text-muted-foreground hover:text-foreground">English Language</Link>
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
                    {/* A1 Level */}
                    <div id="a1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">A1 Level: Beginner (Weeks 1-6)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Basics & Pronunciation</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn the German alphabet, basic pronunciation rules, and essential greetings.
                            Master the unique German sounds like umlauts (ä, ö, ü) and the ß character.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Practice Sheets
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">2</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Introductions & Personal Information</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to introduce yourself, ask and answer simple personal questions, 
                            and have basic conversations about your life, family, and hobbies.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Dialogue Scripts
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Basic Grammar Concepts</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn noun genders (der, die, das), present tense verb conjugation, 
                            simple sentence structure, and basic question formation.
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
                    </div>

                    {/* A2 Level */}
                    <div id="a2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">A2 Level: Elementary (Weeks 7-12)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Daily Activities & Routines</h3>
                          <p className="text-muted-foreground mb-4">
                            Expand vocabulary to discuss daily routines, telling time, making plans, 
                            and describing regular activities. Build conversational fluency.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Role-Play Activities
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Intermediate Grammar</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn past tense (Perfekt), modal verbs, accusative and dative cases, 
                            prepositions, and plural forms of nouns.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Grammar Guide
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Practical Situations</h3>
                          <p className="text-muted-foreground mb-4">
                            Master vocabulary and phrases for shopping, ordering food, transportation, 
                            asking for directions, and handling everyday situations.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Situational Dialogues
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B1 Level */}
                    <div id="b1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">B1 Level: Intermediate (Weeks 13-18)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">7</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Complex Conversations</h3>
                          <p className="text-muted-foreground mb-4">
                            Develop skills to discuss opinions, make arguments, compare options,
                            and express feelings and desires in more complex conversations.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Debate Activities
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">8</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Advanced Grammar</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn subjunctive mood (Konjunktiv II), passive voice, dependent clauses,
                            relative pronouns, and the simple past tense (Präteritum).
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
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
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">9</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">German Culture & Media</h3>
                          <p className="text-muted-foreground mb-4">
                            Start engaging with authentic German media: news articles, simple books,
                            podcasts, TV shows, and films to improve comprehension and cultural knowledge.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Media Recommendations
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B2 Level */}
                    <div id="b2" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">B2 Level: Upper Intermediate (Weeks 19-24)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">10</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Professional Communication</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn vocabulary and skills for workplace communication, job interviews,
                            formal emails, presentations, and professional networking.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Business Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">11</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Complex Grammar Mastery</h3>
                          <p className="text-muted-foreground mb-4">
                            Master advanced topics like extended adjective constructions, 
                            future tense, indirect speech, and advanced conjunctions.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Advanced Grammar Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">12</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Fluency & Exam Preparation</h3>
                          <p className="text-muted-foreground mb-4">
                            Finalize your B2 level skills with intensive speaking practice,
                            listening comprehension exercises, and preparation for B2 certification exams.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Practice Tests
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resources */}
                    <div id="resources" className="scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Recommended Books</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-languages flex-shrink-0" />
                                <div>
                                  <p className="font-medium">German Made Simple</p>
                                  <p className="text-sm text-muted-foreground">by Arnold Leitner</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-languages flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Hammer's German Grammar and Usage</p>
                                  <p className="text-sm text-muted-foreground">by Martin Durrell</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-languages flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Easy German Step-by-Step</p>
                                  <p className="text-sm text-muted-foreground">by Ed Swick</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Online Platforms</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Deutsche Welle</p>
                                  <p className="text-sm text-muted-foreground">Free German courses for all levels</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Goethe-Institut Online Courses</p>
                                  <p className="text-sm text-muted-foreground">Official German cultural institution courses</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Duolingo & Babbel</p>
                                  <p className="text-sm text-muted-foreground">App-based learning for beginners and intermediates</p>
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
                      <h2 className="text-2xl font-bold mb-6">German Learning Resources</h2>
                      <div className="space-y-6">
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Textbooks & Workbooks</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">German Made Simple</p>
                                <p className="text-sm text-muted-foreground">by Arnold Leitner</p>
                                <p className="text-sm mt-1">
                                  Beginner-friendly introduction to German with step-by-step exercises.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Hammer's German Grammar and Usage</p>
                                <p className="text-sm text-muted-foreground">by Martin Durrell</p>
                                <p className="text-sm mt-1">
                                  Comprehensive reference guide to German grammar for intermediate to advanced learners.
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
                                <p className="font-medium">Deutsche Welle - Nicos Weg</p>
                                <p className="text-sm text-muted-foreground">Free interactive course from A1 to B1</p>
                                <p className="text-sm mt-1">
                                  Video-based course following a character named Nico, with exercises and explanations.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Access Course →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Goethe-Institut Online Courses</p>
                                <p className="text-sm text-muted-foreground">Official German courses with certificates</p>
                                <p className="text-sm mt-1">
                                  Premium courses with instructor feedback and official certification options.
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
                                <p className="font-medium">Easy German</p>
                                <p className="text-sm mt-1">
                                  Street interviews and conversations with Germans with dual-language subtitles.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Youtube className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Deutsch für Euch</p>
                                <p className="text-sm mt-1">
                                  Grammar lessons and German language tips from a native speaker.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Practice Resources</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">Tandem</p>
                                <p className="text-sm text-muted-foreground">Language exchange app</p>
                                <p className="text-sm mt-1">
                                  Find German speakers to practice with through text, voice, and video chat.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Learn More →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-languages flex-shrink-0" />
                              <div>
                                <p className="font-medium">italki</p>
                                <p className="text-sm text-muted-foreground">Professional and community tutors</p>
                                <p className="text-sm mt-1">
                                  Find affordable German tutors for one-on-one lessons via video chat.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Find Tutors →
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
                <Link to="/roadmaps/languages" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <ChevronLeft className="h-4 w-4" />
                  <span>All Language Roadmaps</span>
                </Link>
                <Link to="/roadmaps/languages/french" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>Next: French Roadmap</span>
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

export default GermanRoadmap;
