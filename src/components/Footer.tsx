
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, YouTube, LinkedIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Street Smart Skills</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Your complete guide to professional and personal skills development. Find roadmaps, resources, and expert guidance.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Roadmaps</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmaps/finance" className="text-muted-foreground hover:text-foreground">Finance</Link></li>
              <li><Link to="/roadmaps/sales" className="text-muted-foreground hover:text-foreground">Sales</Link></li>
              <li><Link to="/roadmaps/marketing" className="text-muted-foreground hover:text-foreground">Marketing</Link></li>
              <li><Link to="/roadmaps/languages" className="text-muted-foreground hover:text-foreground">Languages</Link></li>
              <li><Link to="/roadmaps/communication" className="text-muted-foreground hover:text-foreground">Communication</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-muted-foreground hover:text-foreground">All Resources</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-foreground">Video Library</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://youtube.com/@streetsmartskills?si=tMBJKyYM10f3Gb61" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <YouTube className="h-4 w-4" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/street-smart-skills/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <LinkedIn className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Street Smart Skills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
