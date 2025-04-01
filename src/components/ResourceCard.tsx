
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Video, Globe, FileText, Headphones, Code, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'book' | 'video' | 'article' | 'course' | 'podcast' | 'tool' | 'youtube';
  url: string;
  tags: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  url,
  tags
}) => {
  const getIcon = () => {
    switch (type) {
      case 'book':
        return <Book className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5 text-red-500" />;
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'course':
        return <Globe className="h-5 w-5" />;
      case 'podcast':
        return <Headphones className="h-5 w-5" />;
      case 'tool':
        return <Code className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getButtonText = () => {
    switch (type) {
      case 'youtube':
        return 'Watch Playlist';
      case 'course':
        return 'Start Course';
      default:
        return 'Visit Resource';
    }
  };

  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-full bg-muted">
            {getIcon()}
          </div>
          <Badge variant="outline" className="capitalize">
            {type}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full">{getButtonText()}</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
