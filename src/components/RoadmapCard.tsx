
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Globe, MessageSquare, Users } from 'lucide-react';

interface RoadmapCardProps {
  title: string;
  description: string;
  category: 'finance' | 'sales' | 'marketing' | 'languages' | 'communication';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  slug: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  title,
  description,
  category,
  difficulty,
  estimatedTime,
  slug
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'finance':
        return <BarChart className={`h-5 w-5 text-finance`} />;
      case 'sales':
        return <Users className={`h-5 w-5 text-sales`} />;
      case 'marketing':
        return <BarChart className={`h-5 w-5 text-marketing`} />;
      case 'languages':
        return <Globe className={`h-5 w-5 text-languages`} />;
      case 'communication':
        return <MessageSquare className={`h-5 w-5 text-communication`} />;
      default:
        return <BarChart className={`h-5 w-5 text-primary`} />;
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'finance':
        return 'border-finance/20';
      case 'sales':
        return 'border-sales/20';
      case 'marketing':
        return 'border-marketing/20';
      case 'languages':
        return 'border-languages/20';
      case 'communication':
        return 'border-communication/20';
      default:
        return 'border-primary/20';
    }
  };

  return (
    <Card className={`h-full transition-all hover:shadow-md ${getBorderColor(category)}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-full bg-muted">
            {getCategoryIcon(category)}
          </div>
          <div className="text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-2 py-1">
            {difficulty}
          </div>
        </div>
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Estimated Time: {estimatedTime}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/roadmaps/${slug}`} className="w-full">
          <Button className="w-full gap-2" variant="outline">
            View Roadmap <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RoadmapCard;
