
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
  Youtube,
  Heart,
  Award,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const LanguagesRoadmap = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-languages/10 text-languages px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Globe className="h-4 w-4" />
                <span>Languages</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Language Learning Pathways 🗣️</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Multiple Levels</Badge>
                <Badge variant="outline">Various Timeframes</Badge>
                <Badge variant="outline">Updated March 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive roadmaps for learning languages effectively, with structured paths 
                for German, French, English, and more. 🌍
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
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Choose Your Language Path ✨</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select from our detailed language learning roadmaps to start your journey to fluency.
                Each path is designed with a clear progression from beginner to advanced levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* German Card */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                <div className="h-40 bg-languages/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="mx-auto mb-2 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white">
                      <span className="text-4xl">🇩🇪</span>
                    </div>
                    <h3 className="text-xl font-medium">German</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">A1 to B2</Badge>
                    <Badge variant="outline">24 weeks</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    From basic greetings to complex conversations, master German in a structured progression.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Audio-focused learning 🎧</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Grammar fundamentals 📚</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Cultural context 🍺</span>
                    </div>
                  </div>
                  <Link to="/roadmaps/languages/german" className="w-full">
                    <Button className="w-full mt-6">View German Roadmap</Button>
                  </Link>
                </div>
              </div>
              
              {/* French Card */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                <div className="h-40 bg-languages/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="mx-auto mb-2 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white">
                      <span className="text-4xl">🇫🇷</span>
                    </div>
                    <h3 className="text-xl font-medium">French</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">A1 to B2</Badge>
                    <Badge variant="outline">16 weeks</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Learn French with a focus on professional contexts and business communication.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Business vocabulary 💼</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Pronunciation mastery 🔊</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Professional contexts 🥐</span>
                    </div>
                  </div>
                  <Link to="/roadmaps/languages/french" className="w-full">
                    <Button className="w-full mt-6">View French Roadmap</Button>
                  </Link>
                </div>
              </div>
              
              {/* English Card */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                <div className="h-40 bg-languages/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="mx-auto mb-2 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white">
                      <span className="text-4xl">🇬🇧</span>
                    </div>
                    <h3 className="text-xl font-medium">English</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">B1 to C1</Badge>
                    <Badge variant="outline">12 weeks</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Perfect your English skills for professional contexts and advanced communication.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Advanced grammar 📝</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Business English 💻</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-languages" />
                      <span className="text-sm">Presentation skills 🎤</span>
                    </div>
                  </div>
                  <Link to="/roadmaps/languages/english" className="w-full">
                    <Button className="w-full mt-6">View English Roadmap</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Language Learning Resources 📚</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Apps 📱</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Duolingo</li>
                    <li>Babbel</li>
                    <li>Rosetta Stone</li>
                    <li>Memrise</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Online Platforms 💻</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>italki</li>
                    <li>Preply</li>
                    <li>Lingoda</li>
                    <li>Busuu</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Books & Materials 📕</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Assimil Series</li>
                    <li>Teach Yourself Series</li>
                    <li>Collins Easy Learning</li>
                    <li>Pimsleur Method</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Practice Techniques 🔄</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Language Exchange</li>
                    <li>Comprehensible Input</li>
                    <li>Spaced Repetition</li>
                    <li>Immersion Methods</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Language Learning Tips 💡</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Effective Study Habits</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-languages flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground block mb-1">Consistency over intensity ⏱️</span>
                        Regular 20-minute sessions are more effective than occasional 3-hour marathons.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-languages flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground block mb-1">Mix learning methods 🔄</span>
                        Combine apps, books, conversation practice, and media consumption.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-languages flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground block mb-1">Track your progress 📊</span>
                        Keep a language journal to see how far you've come and stay motivated.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Overcoming Plateaus</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-languages flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground block mb-1">Change your routine 🔄</span>
                        If progress slows, try new learning methods or different content.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-languages flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground block mb-1">Focus on interests ❤️</span>
                        Study the language through topics you're passionate about.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-languages flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground block mb-1">Get feedback 👂</span>
                        Work with tutors or language exchange partners to identify improvement areas.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-8 border-t">
              <Link to="/roadmaps" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ChevronLeft className="h-4 w-4" />
                <span>All Roadmaps</span>
              </Link>
              <Link to="/roadmaps/communication" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <span>Next: Communication Roadmap</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LanguagesRoadmap;
