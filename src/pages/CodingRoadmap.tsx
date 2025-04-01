
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Code, 
  BarChart, 
  BookOpen, 
  BookmarkIcon, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CodingRoadmap = () => {
  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
            <Code className="h-8 w-8 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Coding Roadmap</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn to build software applications through structured programming language roadmaps, 
            from beginner fundamentals to advanced development techniques.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="text-sm px-3 py-1 border-purple-200">
              Web Development
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 border-purple-200">
              Mobile Development
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 border-purple-200">
              Data Structures
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 border-purple-200">
              Algorithms
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 border-purple-200">
              Backend Development
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Why Learn Coding?</CardTitle>
                  <CardDescription>
                    Programming skills are in high demand across industries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Learning to code opens doors to numerous career opportunities in tech and beyond. 
                    Programming is a foundational skill for anyone interested in software development, 
                    data science, artificial intelligence, web development, and many other fields.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 border rounded-lg">
                      <div className="text-lg font-medium mb-2">Problem Solving</div>
                      <p className="text-sm text-muted-foreground">
                        Develop structured thinking and analytical skills through coding challenges
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-lg font-medium mb-2">Career Growth</div>
                      <p className="text-sm text-muted-foreground">
                        Unlock high-paying opportunities in the technology sector
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-lg font-medium mb-2">Project Building</div>
                      <p className="text-sm text-muted-foreground">
                        Create real-world applications and tools to solve actual problems
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Roadmap Structure</CardTitle>
                    <CardDescription>How our coding roadmaps are organized</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="font-medium">1</span>
                      </div>
                      <div>
                        <div className="font-medium">Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Programming basics and syntax</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="font-medium">2</span>
                      </div>
                      <div>
                        <div className="font-medium">Core Concepts</div>
                        <div className="text-sm text-muted-foreground">Data structures, algorithms and patterns</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="font-medium">3</span>
                      </div>
                      <div>
                        <div className="font-medium">Frameworks & Libraries</div>
                        <div className="text-sm text-muted-foreground">Popular tools used in real projects</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="font-medium">4</span>
                      </div>
                      <div>
                        <div className="font-medium">Project-Based Learning</div>
                        <div className="text-sm text-muted-foreground">Building applications with acquired skills</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Approach</CardTitle>
                    <CardDescription>Effective strategies for mastering coding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Consistency</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Project-based Learning</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Documentation Reading</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Community Engagement</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>
                        Success in coding comes from consistent practice, building real projects, 
                        and engaging with the developer community. Our roadmaps emphasize hands-on
                        coding experience alongside theoretical knowledge.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="paths" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="p-2 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                    </div>
                    <CardTitle>Web Development</CardTitle>
                    <CardDescription>Frontend and backend web technologies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>HTML, CSS, JavaScript fundamentals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Frontend frameworks (React, Vue, Angular)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Backend development (Node.js, Python)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Database integration and API design</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Explore Path <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="p-2 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2">
                      <BookOpen className="h-5 w-5 text-green-500" />
                    </div>
                    <CardTitle>Mobile Development</CardTitle>
                    <CardDescription>iOS and Android app development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Swift for iOS development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Kotlin for Android development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Cross-platform with React Native</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Mobile UX/UI design principles</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Explore Path <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="p-2 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-2">
                      <BarChart className="h-5 w-5 text-purple-500" />
                    </div>
                    <CardTitle>Data Science & AI</CardTitle>
                    <CardDescription>Machine learning and data analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Python for data science</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Data visualization and analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Machine learning algorithms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Deep learning and neural networks</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Explore Path <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Getting Started Guide</CardTitle>
                  <CardDescription>First steps for coding beginners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      If you're new to coding, we recommend starting with these foundational steps:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-lg mb-2">Learn a First Language</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Python or JavaScript are excellent choices for beginners due to their readability 
                          and broad application.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Begin with Python
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-lg mb-2">Understand Programming Logic</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Master variables, data types, loops, conditionals, and functions 
                          before moving to complex topics.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Programming Basics
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Free Learning Platforms</CardTitle>
                  <CardDescription>Top resources to learn coding at no cost</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">freeCodeCamp</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comprehensive curriculum covering web development, data visualization, and more, 
                        with built-in projects and certifications.
                      </p>
                      <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Visit Platform</Button>
                      </a>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">The Odin Project</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Full-stack curriculum focused on real-world projects and practical skills 
                        for web development.
                      </p>
                      <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Visit Platform</Button>
                      </a>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Codecademy</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Interactive coding lessons with free basic access to multiple programming
                        languages and concepts.
                      </p>
                      <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Visit Platform</Button>
                      </a>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">CS50 by Harvard</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Harvard's introduction to computer science, freely available through edX, 
                        covering computer science fundamentals.
                      </p>
                      <a href="https://cs50.harvard.edu/x/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Visit Platform</Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>YouTube Learning Playlists</CardTitle>
                  <CardDescription>Free comprehensive video tutorials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Web Development Bootcamp</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Complete web development course by Traversy Media covering HTML, CSS, JavaScript,
                        and modern frameworks.
                      </p>
                      <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Watch Playlist</Button>
                      </a>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Python for Beginners</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comprehensive Python tutorial series by Programming with Mosh covering
                        from basics to advanced topics.
                      </p>
                      <a href="https://www.youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Watch Playlist</Button>
                      </a>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">JavaScript Crash Course</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Modern JavaScript from the beginning by Academind, covering core concepts and ES6+ features.
                      </p>
                      <a href="https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Watch Playlist</Button>
                      </a>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">React Complete Guide</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        React.js tutorial series by The Net Ninja covering components, hooks, Redux, and more.
                      </p>
                      <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Watch Playlist</Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about learning to code</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Which programming language should I learn first?</h3>
                    <p className="text-sm text-muted-foreground">
                      Python and JavaScript are typically recommended for beginners due to their readable syntax 
                      and wide application. Python excels in data science and backend development, while JavaScript 
                      is essential for web development. Choose based on your interests - for web, start with 
                      JavaScript; for data science or general programming, Python is ideal.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">How long does it take to learn coding?</h3>
                    <p className="text-sm text-muted-foreground">
                      The learning timeline varies based on your goals. Basic programming concepts can be grasped 
                      in 2-3 months of consistent study. Becoming job-ready typically takes 6-12 months of focused 
                      learning and project building. Mastery is an ongoing journey that professionals continue 
                      throughout their careers. Consistent daily practice is more important than marathon sessions.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Do I need a computer science degree to become a programmer?</h3>
                    <p className="text-sm text-muted-foreground">
                      No, a computer science degree is not required to become a programmer. Many successful 
                      developers are self-taught or have completed bootcamps. What matters most is your 
                      practical skills, portfolio of projects, and understanding of programming concepts. 
                      Employers increasingly value demonstrated skills over formal education. However, 
                      a CS degree can provide deeper theoretical knowledge for certain specialized fields.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">What equipment do I need to start coding?</h3>
                    <p className="text-sm text-muted-foreground">
                      You don't need expensive equipment to start coding. Any modern computer (Windows, Mac, or Linux) 
                      with at least 4GB RAM and a stable internet connection is sufficient for beginners. As you 
                      advance to more complex projects or specific areas like mobile development or game development, 
                      you might need to upgrade. Many coding platforms even offer browser-based environments that 
                      require minimal local resources.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default CodingRoadmap;
