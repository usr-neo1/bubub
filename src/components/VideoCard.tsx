
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  title: string;
  description: string;
  channelName: string;
  duration: string;
  thumbnailUrl: string;
  videoId: string;
  category: string;
  tags: string[];
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  channelName,
  duration,
  thumbnailUrl,
  videoId,
  category,
  tags
}) => {
  return (
    <Card className="h-full transition-all hover:shadow-md overflow-hidden">
      <div className="relative aspect-video w-full">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge>{category}</Badge>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Youtube className="h-3 w-3" />
            <span>{channelName}</span>
          </div>
        </div>
        <CardTitle className="text-lg line-clamp-2 mt-2">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full gap-2" variant="outline">
            <Youtube className="h-4 w-4" /> Watch on YouTube
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
