
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Check, 
  FileText, 
  Video, 
  Book, 
  Link as LinkIcon,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const FinanceRoadmap = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-finance/10 text-finance px-3 py-1 rounded-full text-sm font-medium mb-4">
                <BarChart className="h-4 w-4" />
                <span>Finance</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Financial Analyst Career Path</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline">Intermediate</Badge>
                <Badge variant="outline">12 Weeks</Badge>
                <Badge variant="outline">Updated June 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A comprehensive roadmap to develop the technical and soft skills needed 
                to succeed as a financial analyst in today's competitive market.
              </p>
            </div>
            <div className="hidden md:block">
              <BarChart className="h-32 w-32 text-finance/20" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-finance/5 -z-0 rounded-l-3xl"></div>
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
                    <a href="#phase1" className="text-muted-foreground hover:text-foreground">Phase 1: Fundamentals</a>
                    <a href="#phase2" className="text-muted-foreground hover:text-foreground">Phase 2: Analysis Skills</a>
                    <a href="#phase3" className="text-muted-foreground hover:text-foreground">Phase 3: Advanced Topics</a>
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
                    <Link to="/roadmaps/finance/investment-banking" className="text-muted-foreground hover:text-foreground">Investment Banking</Link>
                    <Link to="/roadmaps/finance/personal-finance" className="text-muted-foreground hover:text-foreground">Personal Finance</Link>
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
                              <Check className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Basic accounting knowledge</p>
                                <p className="text-sm text-muted-foreground">Understanding of financial statements, accounting principles, and basic financial terminology.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Mathematics and statistics fundamentals</p>
                                <p className="text-sm text-muted-foreground">Comfort with algebra, basic statistics, and data interpretation.</p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Check className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Excel proficiency</p>
                                <p className="text-sm text-muted-foreground">Basic to intermediate Excel skills, including formulas and data management.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 1 */}
                    <div id="phase1" className="roadmap-container scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-6">Phase 1: Finance Fundamentals (Weeks 1-4)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">1</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Advanced Financial Statement Analysis</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to analyze income statements, balance sheets, and cash flow statements 
                            to extract meaningful insights.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">2</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Financial Ratios and Metrics</h3>
                          <p className="text-muted-foreground mb-4">
                            Master the calculation and interpretation of key financial ratios used in 
                            company analysis and valuation.
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
                        <div className="roadmap-item-dot">3</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Time Value of Money</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand the concepts of present value, future value, net present value, 
                            and internal rate of return.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 6 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">4</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Finance Ethics and Compliance</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn ethical standards in finance, regulatory requirements, and compliance best practices.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Articles
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
                      <h2 className="text-2xl font-bold mb-6">Phase 2: Analysis and Modeling Skills (Weeks 5-8)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">5</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Advanced Excel for Finance</h3>
                          <p className="text-muted-foreground mb-4">
                            Master advanced Excel functions, data tables, pivot tables, and financial modeling techniques.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 8 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Practice Exercises
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">6</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Financial Forecasting</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn methodologies for creating accurate financial forecasts and projections.
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
                        <div className="roadmap-item-dot">7</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Valuation Techniques</h3>
                          <p className="text-muted-foreground mb-4">
                            Explore different methods of company valuation, including DCF, comparable company analysis, 
                            and precedent transactions.
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
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">8</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Financial Data Analysis</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to extract, clean, analyze, and visualize financial data using Excel and other tools.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
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
                      <h2 className="text-2xl font-bold mb-6">Phase 3: Advanced Topics (Weeks 9-12)</h2>
                      <div className="roadmap-line"></div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">9</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Investment Analysis</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to evaluate investment opportunities, portfolio management, and risk assessment.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 5 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Book className="h-3 w-3" /> 1 Book
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">10</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Risk Management</h3>
                          <p className="text-muted-foreground mb-4">
                            Understand financial risk types, risk metrics, and strategies for effective risk management.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 6 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">11</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Financial Reporting and Analysis</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn to prepare professional financial reports, executive summaries, and presentations.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 3 Articles
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 4 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 2 Templates
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roadmap-item">
                        <div className="roadmap-item-dot">12</div>
                        <div className="roadmap-item-content">
                          <h3 className="text-lg font-medium mb-2">Industry-Specific Analysis</h3>
                          <p className="text-muted-foreground mb-4">
                            Apply financial analysis techniques to specific industries, understanding unique metrics and considerations.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 5 Case Studies
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> 3 Videos
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> 4 Industry Reports
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
                                <Book className="h-5 w-5 text-finance flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Financial Statement Analysis and Security Valuation</p>
                                  <p className="text-sm text-muted-foreground">by Stephen Penman</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-finance flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Investment Banking: Valuation, LBOs, M&A, and IPOs</p>
                                  <p className="text-sm text-muted-foreground">by Joshua Rosenbaum & Joshua Pearl</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Book className="h-5 w-5 text-finance flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Financial Modeling and Valuation</p>
                                  <p className="text-sm text-muted-foreground">by Paul Pignataro</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-6 border rounded-lg bg-card">
                            <h3 className="text-lg font-medium mb-4">Online Courses & Certifications</h3>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-finance flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Financial Analyst Certification</p>
                                  <p className="text-sm text-muted-foreground">Corporate Finance Institute (CFI)</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-finance flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Financial Modeling & Valuation Analyst</p>
                                  <p className="text-sm text-muted-foreground">Wall Street Prep</p>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <Globe className="h-5 w-5 text-finance flex-shrink-0" />
                                <div>
                                  <p className="font-medium">Financial Analysis for Business Performance</p>
                                  <p className="text-sm text-muted-foreground">Coursera - University of Illinois</p>
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
                              <Book className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Financial Statement Analysis and Security Valuation</p>
                                <p className="text-sm text-muted-foreground">by Stephen Penman</p>
                                <p className="text-sm mt-1">
                                  A comprehensive guide to analyzing financial statements and valuing companies.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Investment Banking: Valuation, LBOs, M&A, and IPOs</p>
                                <p className="text-sm text-muted-foreground">by Joshua Rosenbaum & Joshua Pearl</p>
                                <p className="text-sm mt-1">
                                  Industry-standard guide to valuation methodologies used in investment banking.
                                </p>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Book className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Financial Modeling and Valuation</p>
                                <p className="text-sm text-muted-foreground">by Paul Pignataro</p>
                                <p className="text-sm mt-1">
                                  Practical guide to building financial models and valuing companies with real-world examples.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-6 border rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Online Courses</h3>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Financial Analyst Certification</p>
                                <p className="text-sm text-muted-foreground">Corporate Finance Institute (CFI)</p>
                                <p className="text-sm mt-1">
                                  Comprehensive program covering financial analysis, modeling, valuation, and strategy.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  View Course →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Globe className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Financial Modeling & Valuation Analyst</p>
                                <p className="text-sm text-muted-foreground">Wall Street Prep</p>
                                <p className="text-sm mt-1">
                                  Industry-standard financial modeling training used by investment banks and corporations.
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
                              <Youtube className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Wall Street Prep</p>
                                <p className="text-sm mt-1">
                                  Financial modeling tutorials, investment banking concepts, and career advice.
                                </p>
                                <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                                  Visit Channel →
                                </a>
                              </div>
                            </li>
                            <li className="flex gap-3">
                              <Youtube className="h-5 w-5 text-finance flex-shrink-0" />
                              <div>
                                <p className="font-medium">Corporate Finance Institute</p>
                                <p className="text-sm mt-1">
                                  Tutorials on financial analysis, Excel modeling, and valuation techniques.
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
                <Link to="/roadmaps/sales" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span>Next: Sales Roadmap</span>
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

export default FinanceRoadmap;
