
import React from 'react';
import Layout from '@/components/Layout';
import { ArrowLeft, CheckCircle2, Code, BookOpen, Video, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const NoCodeRoadmap = () => {
  return (
    <Layout>
      <section className="py-12 px-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-2 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/roadmaps">
                <ArrowLeft className="h-4 w-4" /> Back to Roadmaps
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Vibe Coding Mastery Roadmap</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Learn to build applications without traditional coding using visual builders and AI tools.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-lg p-4 border">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Difficulty</h3>
                  <p className="text-lg font-semibold">Beginner</p>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Estimated Time</h3>
                  <p className="text-lg font-semibold">6 weeks</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>No coding experience required</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Build fully functional applications</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Learn the latest AI tools for development</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Free online resources and tutorials</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-card rounded-xl border p-6 w-full">
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Code className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Visual app building frameworks</span>
                </li>
                <li className="flex gap-2">
                  <BookOpen className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>AI-assisted development</span>
                </li>
                <li className="flex gap-2">
                  <Video className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Automation workflows</span>
                </li>
                <li className="flex gap-2">
                  <Users className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Database design for no-code apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Learning Path</h2>
          
          <div className="space-y-8">
            {/* Week 1-2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
                Weeks 1-2: Foundations of No-Code Development
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding No-Code Tools</CardTitle>
                    <CardDescription>Learn the basics of popular no-code platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Introduction to no-code development</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Exploring Bubble.io and Webflow</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Setting up your first project</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PLYBQFgQmT3neTD6YBDfTc9sJXssBxOSPU" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Database Design</CardTitle>
                    <CardDescription>Learn how to structure data for no-code apps</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Basic database concepts</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Creating data types in Airtable</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Relationships between data</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PLADXPbxzNlYBw8U-5LelUiT7ew7dWVvtS" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>UI Design for No-Code</CardTitle>
                    <CardDescription>Create appealing user interfaces without coding</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>UI principles for no-code platforms</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Responsive design in Webflow</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Creating forms and user inputs</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PLvlPwwoX8YQuUONr4cCT7UXPLMHAbdVVj" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            {/* Week 3-4 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
                Weeks 3-4: Building with Visual Platforms
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Building with Bubble.io</CardTitle>
                    <CardDescription>Create full-featured web applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Workflows and conditional logic</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>API integrations</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>User authentication systems</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PL_qUNrDnD9XR4RKsO_IXB7CJB0QTWB5aZ" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Automation with Zapier</CardTitle>
                    <CardDescription>Connect apps and automate workflows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Setting up automated workflows</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Multi-step zaps</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Error handling in automations</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PLSWtiM5wpafG-8P7Z5N6wJUK81vNoHBSx" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Project: Build a CRM</CardTitle>
                    <CardDescription>Apply your knowledge to create a CRM system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Design the CRM interface</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Set up customer data models</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Create automated email workflows</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://bubble.io/academy" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Free Certification</Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            {/* Week 5-6 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">3</span>
                Weeks 5-6: AI-Assisted Development
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Development with ChatGPT</CardTitle>
                    <CardDescription>Use AI to generate code and solve problems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Effective prompting techniques</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Generating code snippets</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Troubleshooting with AI</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PLAwi-SgvJx-PpKkERTvomqPYgNKxmGXca" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Building with Lovable AI</CardTitle>
                    <CardDescription>Create web apps with AI-assisted coding</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Getting started with Lovable</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Building a React app with AI</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Styling with Tailwind via AI</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://www.youtube.com/playlist?list=PLV8-GUUMIAy-5RWBM0vOI2HE7QAPXCDVO" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Watch Tutorials</Button>
                    </a>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Final Project</CardTitle>
                    <CardDescription>Build a full application using AI tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Plan your application</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Combine visual builders with AI tools</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Deploy your finished application</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="https://zapier.com/learn" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Get Certified</Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-between">
            <Button variant="outline" asChild>
              <Link to="/roadmaps">
                <ArrowLeft className="h-4 w-4 mr-2" /> All Roadmaps
              </Link>
            </Button>
            
            <Button asChild>
              <Link to="/resources">
                Explore Resources <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NoCodeRoadmap;
