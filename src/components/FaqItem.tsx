
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  value: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, value }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>
        {typeof answer === 'string' ? (
          <p className="text-muted-foreground">{answer}</p>
        ) : (
          answer
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
