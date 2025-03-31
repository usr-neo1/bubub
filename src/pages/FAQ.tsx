
import React from 'react';
import Layout from '@/components/Layout';
import FaqItem from '@/components/FaqItem';
import { Accordion } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare } from 'lucide-react';

interface FaqData {
  question: string;
  answer: React.ReactNode;
  value: string;
  category: string;
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');

  const faqData: FaqData[] = [
    {
      question: "How are the roadmaps organized?",
      answer: "Our roadmaps are organized by skill category (finance, sales, marketing, languages, communication) and then by specific career paths or skill sets within each category. Each roadmap is divided into phases that build on each other, starting with fundamentals and progressing to advanced topics.",
      value: "faq-1",
      category: "general",
    },
    {
      question: "How long does it take to complete a roadmap?",
      answer: "The time to complete a roadmap varies depending on the complexity of the skills and your prior knowledge. Most roadmaps include an estimated completion time, typically ranging from 6 to 24 weeks. However, learning is a personal journey, and you can progress at your own pace.",
      value: "faq-2",
      category: "general",
    },
    {
      question: "Are the resources free or paid?",
      answer: "We provide a mix of free and paid resources. Free resources include articles, videos, and some courses. Paid resources include books, premium courses, and certifications. We clearly indicate which resources are free and which require payment.",
      value: "faq-3",
      category: "resources",
    },
    {
      question: "How do I track my progress through a roadmap?",
      answer: "Currently, you can manually track your progress by following the phases and steps outlined in each roadmap. We're developing a progress tracking feature that will allow you to mark completed items and visualize your journey.",
      value: "faq-4",
      category: "general",
    },
    {
      question: "Which finance certifications are most valuable for career advancement?",
      answer: (
        <div className="space-y-2">
          <p>The most valuable finance certifications depend on your specific career goals, but these are widely recognized:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-medium">CFA (Chartered Financial Analyst):</span> Ideal for investment management and analysis</li>
            <li><span className="font-medium">FRM (Financial Risk Manager):</span> Focused on risk management</li>
            <li><span className="font-medium">CPA (Certified Public Accountant):</span> Essential for accounting careers</li>
            <li><span className="font-medium">CFP (Certified Financial Planner):</span> For financial planning and wealth management</li>
          </ul>
        </div>
      ),
      value: "faq-5",
      category: "finance",
    },
    {
      question: "What's the difference between B2B and B2C sales approaches?",
      answer: (
        <div className="space-y-2">
          <p>B2B (Business-to-Business) and B2C (Business-to-Consumer) sales differ in several key ways:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-medium">Decision Process:</span> B2B typically involves multiple decision-makers and longer sales cycles; B2C usually involves individual consumers and shorter cycles</li>
            <li><span className="font-medium">Relationship Building:</span> B2B emphasizes long-term relationships; B2C often focuses on transactional interactions</li>
            <li><span className="font-medium">Value Proposition:</span> B2B focuses on ROI and business value; B2C emphasizes personal benefits and emotional appeal</li>
            <li><span className="font-medium">Sales Approach:</span> B2B requires consultative selling; B2C often uses more direct marketing approaches</li>
          </ul>
        </div>
      ),
      value: "faq-6",
      category: "sales",
    },
    {
      question: "How has digital marketing changed in recent years?",
      answer: "Digital marketing has evolved significantly with the rise of social media platforms, AI-driven advertising, video content dominance, and privacy regulations like GDPR. Mobile optimization has become essential, and personalization has advanced with better data analytics. Voice search and smart speakers have created new channels, while influencer marketing has established itself as a mainstream strategy.",
      value: "faq-7",
      category: "marketing",
    },
    {
      question: "What's the most effective way to learn a new language?",
      answer: (
        <div className="space-y-2">
          <p>The most effective language learning approach combines several methods:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-medium">Regular practice:</span> Consistent daily practice (even 15-30 minutes) is more effective than occasional longer sessions</li>
            <li><span className="font-medium">Immersion:</span> Surround yourself with the language through music, podcasts, films, and books</li>
            <li><span className="font-medium">Conversation practice:</span> Speak with native speakers through language exchanges or tutoring</li>
            <li><span className="font-medium">Spaced repetition:</span> Use tools like flashcards with spaced repetition for vocabulary</li>
            <li><span className="font-medium">Practical application:</span> Learn vocabulary and grammar that's relevant to your interests and goals</li>
          </ul>
        </div>
      ),
      value: "faq-8",
      category: "languages",
    },
    {
      question: "How can I overcome nervousness when speaking in public?",
      answer: (
        <div className="space-y-2">
          <p>Overcoming public speaking nervousness takes practice and preparation:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-medium">Prepare thoroughly:</span> Know your material inside and out</li>
            <li><span className="font-medium">Practice regularly:</span> Rehearse out loud, ideally in front of others or recording yourself</li>
            <li><span className="font-medium">Start small:</span> Begin with smaller groups before moving to larger audiences</li>
            <li><span className="font-medium">Focus on breathing:</span> Deep breathing techniques can calm your nervous system</li>
            <li><span className="font-medium">Reframe anxiety:</span> View nervousness as excitement and an energy boost</li>
            <li><span className="font-medium">Visualize success:</span> Mentally rehearse your successful presentation</li>
            <li><span className="font-medium">Join groups:</span> Organizations like Toastmasters provide supportive environments for practice</li>
          </ul>
        </div>
      ),
      value: "faq-9",
      category: "communication",
    },
    {
      question: "What resources are best for learning financial modeling?",
      answer: (
        <div className="space-y-2">
          <p>For learning financial modeling, we recommend these resources:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-medium">Wall Street Prep:</span> Comprehensive financial modeling courses used by investment banks</li>
            <li><span className="font-medium">Financial Modeling Institute (FMI):</span> Offers certification programs in financial modeling</li>
            <li><span className="font-medium">Corporate Finance Institute:</span> Free and paid courses on financial analysis and modeling</li>
            <li><span className="font-medium">Breaking Into Wall Street:</span> Practical, template-based financial modeling training</li>
            <li><span className="font-medium">Books:</span> "Financial Modeling and Valuation" by Paul Pignataro and "Financial Modeling" by Simon Benninga</li>
          </ul>
          <p className="mt-2">Check our Finance roadmap for more specific recommendations.</p>
        </div>
      ),
      value: "faq-10",
      category: "finance",
    },
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'resources', name: 'Resources' },
    { id: 'finance', name: 'Finance' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'languages', name: 'Languages' },
    { id: 'communication', name: 'Communication' },
  ];

  return (
    <Layout>
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Find answers to common questions about our roadmaps, resources, and learning paths.
          </p>
          <div className="flex justify-center">
            <MessageSquare className="h-16 w-16 text-primary opacity-75" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq) => (
                <FaqItem key={faq.value} {...faq} />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-lg text-muted-foreground">No questions found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Search
              </Button>
            </div>
          )}

          <div className="mt-12 p-6 border rounded-lg bg-muted/30">
            <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              If you can't find the answer you're looking for, please contact us and we'll be happy to help.
            </p>
            <Button>Contact Support</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
