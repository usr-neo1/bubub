
import React from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Mic, Presentation, Users, Video, CheckCircle2, Award, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const PublicSpeakingRoadmap = () => {
  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/roadmaps/communication">
              <Button variant="outline" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Public Speaking Mastery 🎤</h1>
              <p className="text-muted-foreground text-lg">
                Overcome fear and become a confident, compelling public speaker
              </p>
            </div>
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium">Difficulty</div>
                <div className="text-xl font-bold">Intermediate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <Tabs defaultValue="roadmap">
          <TabsList className="mb-8">
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roadmap">
            <div className="roadmap-container">
              <div className="roadmap-line"></div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">1</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Understanding Public Speaking Fundamentals</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Begin by understanding what makes a great speech and how to overcome fear and anxiety.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Understand the components of effective communication</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Learn techniques for managing speaking anxiety</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Study vocal variety, pace, and projection</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">2</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Presentation className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Crafting Compelling Content</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Learn how to structure speeches and create content that resonates with audiences.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Master the art of storytelling in speeches</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Develop powerful openings and closings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Use rhetorical devices to enhance impact</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">3</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Connecting with Your Audience</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Develop techniques for engaging with different types of audiences effectively.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Learn audience analysis techniques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Master eye contact and body language</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Handle Q&A sessions confidently</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">4</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Visual Aids and Technology</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Use presentation tools and visual aids to enhance your speaking.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Create effective slide presentations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Use props and demonstrations effectively</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Adapt to virtual presenting environments</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">5</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Advanced Speaking Techniques</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Elevate your skills with advanced techniques and regular practice.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Master impromptu speaking situations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Use humor appropriately in presentations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Record and analyze your speeches for improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-communication" />
                  <h3 className="text-xl font-bold">Recommended Books</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <div>
                      <div className="font-medium">Talk Like TED</div>
                      <div className="text-sm text-muted-foreground">By Carmine Gallo</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <div>
                      <div className="font-medium">Speak With No Fear</div>
                      <div className="text-sm text-muted-foreground">By Mike Acker</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <div>
                      <div className="font-medium">The Art of Public Speaking</div>
                      <div className="text-sm text-muted-foreground">By Dale Carnegie</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="h-5 w-5 text-communication" />
                  <h3 className="text-xl font-bold">Online Courses</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>🎓</span>
                    <div>
                      <div className="font-medium">Dynamic Public Speaking</div>
                      <div className="text-sm text-muted-foreground">Coursera (University of Washington)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎓</span>
                    <div>
                      <div className="font-medium">The Complete Presentation and Public Speaking Course</div>
                      <div className="text-sm text-muted-foreground">Udemy</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎓</span>
                    <div>
                      <div className="font-medium">TED's Secret to Great Public Speaking</div>
                      <div className="text-sm text-muted-foreground">TED Masterclass</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="community">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-communication" />
                  <h3 className="text-xl font-bold">Join Public Speaking Groups</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Practicing with others is one of the best ways to improve your public speaking skills.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>👥</span>
                    <div>
                      <div className="font-medium">Toastmasters International</div>
                      <div className="text-sm text-muted-foreground">Find a local club to practice speaking in a supportive environment</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>👥</span>
                    <div>
                      <div className="font-medium">Public Speaking Meetups</div>
                      <div className="text-sm text-muted-foreground">Join groups on Meetup.com dedicated to public speaking</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="h-5 w-5 text-communication" />
                  <h3 className="text-xl font-bold">Competitions & Opportunities</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Challenge yourself by participating in speaking competitions and events.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>🏆</span>
                    <div>
                      <div className="font-medium">Toastmasters Speech Contests</div>
                      <div className="text-sm text-muted-foreground">From club level to the World Championship of Public Speaking</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎤</span>
                    <div>
                      <div className="font-medium">TEDx Events</div>
                      <div className="text-sm text-muted-foreground">Apply to speak at local TEDx events in your community</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎯</span>
                    <div>
                      <div className="font-medium">Local Speaking Opportunities</div>
                      <div className="text-sm text-muted-foreground">Volunteer to speak at community events, libraries, and schools</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default PublicSpeakingRoadmap;
