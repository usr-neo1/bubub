
import React from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Users, Handshake, FileSpreadsheet, CheckCircle2, Award, BrainCircuit, Globe, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessNegotiationRoadmap = () => {
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
              <h1 className="text-4xl font-bold mb-2">Business Negotiation Skills 🤝</h1>
              <p className="text-muted-foreground text-lg">
                Master effective negotiation tactics for business contexts
              </p>
            </div>
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium">Difficulty</div>
                <div className="text-xl font-bold">Advanced</div>
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
                    <h3 className="text-xl font-bold">Negotiation Fundamentals</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Build a strong foundation in negotiation theory and best practices.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Understand distributive vs. integrative negotiation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Learn about BATNA, reservation price, and ZOPA</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Identify common cognitive biases in negotiations</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">2</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <FileSpreadsheet className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Preparation Strategies</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Develop systematic approaches to negotiation preparation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Research counterparties effectively</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Create negotiation planning documents</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Develop multiple scenario plans</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">3</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Communication Tactics</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Master verbal and non-verbal communication specific to negotiations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Practice active listening techniques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Learn effective questioning strategies</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Recognize and use body language strategically</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">4</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Value Creation & Claiming</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Balance collaborative and competitive approaches in negotiations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Identify opportunities for mutual gains</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Master anchoring and framing techniques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Learn appropriate concession strategies</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">5</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Cross-Cultural Negotiation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Adapt negotiation approaches to different cultural contexts.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Understand cultural dimensions in negotiations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Adapt communication styles for different regions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Navigate different decision-making processes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-item-dot">6</div>
                <div className="roadmap-item-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-communication" />
                    <h3 className="text-xl font-bold">Complex & Team Negotiations</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Handle multi-party, multi-issue, and team negotiation scenarios.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Manage coalition dynamics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Lead effective negotiation teams</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Handle multiple issues simultaneously</span>
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
                      <div className="font-medium">Getting to Yes</div>
                      <div className="text-sm text-muted-foreground">By Roger Fisher and William Ury</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <div>
                      <div className="font-medium">Never Split the Difference</div>
                      <div className="text-sm text-muted-foreground">By Chris Voss</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <div>
                      <div className="font-medium">Difficult Conversations</div>
                      <div className="text-sm text-muted-foreground">By Douglas Stone, Bruce Patton, and Sheila Heen</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-communication" />
                  <h3 className="text-xl font-bold">Online Courses</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>🎓</span>
                    <div>
                      <div className="font-medium">Negotiation, Influence, and Persuasion</div>
                      <div className="text-sm text-muted-foreground">Harvard Business School Online</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎓</span>
                    <div>
                      <div className="font-medium">Successful Negotiation: Essential Strategies and Skills</div>
                      <div className="text-sm text-muted-foreground">Coursera (University of Michigan)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎓</span>
                    <div>
                      <div className="font-medium">The Art of Negotiation</div>
                      <div className="text-sm text-muted-foreground">LinkedIn Learning</div>
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
                  <h3 className="text-xl font-bold">Practice Groups & Workshops</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Join groups where you can practice negotiation skills in a safe environment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>👥</span>
                    <div>
                      <div className="font-medium">Negotiation Workshops</div>
                      <div className="text-sm text-muted-foreground">Look for negotiation workshops hosted by universities and business schools</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>👥</span>
                    <div>
                      <div className="font-medium">Negotiation Meetups</div>
                      <div className="text-sm text-muted-foreground">Join groups on Meetup.com focused on negotiation skills</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart className="h-5 w-5 text-communication" />
                  <h3 className="text-xl font-bold">Simulation Opportunities</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Participate in simulated negotiations to build practical experience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span>🎮</span>
                    <div>
                      <div className="font-medium">Harvard PON Simulations</div>
                      <div className="text-sm text-muted-foreground">The Program on Negotiation at Harvard Law School offers simulation exercises</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎮</span>
                    <div>
                      <div className="font-medium">Business School Competitions</div>
                      <div className="text-sm text-muted-foreground">Many business schools host negotiation competitions open to professionals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📱</span>
                    <div>
                      <div className="font-medium">Online Role-Playing Games</div>
                      <div className="text-sm text-muted-foreground">Virtual platforms where you can practice negotiation scenarios</div>
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

export default BusinessNegotiationRoadmap;
