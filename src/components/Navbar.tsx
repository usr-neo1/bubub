
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Globe, BarChart, Users, MessageSquare, Menu, X } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Roadmaporium</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Roadmaps <span className="text-xs opacity-60">▼</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link to="/roadmaps/finance" className="flex items-center gap-2 w-full">
                  <BarChart className="h-4 w-4 text-finance" />
                  <span>Finance</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/roadmaps/sales" className="flex items-center gap-2 w-full">
                  <Users className="h-4 w-4 text-sales" />
                  <span>Sales</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/roadmaps/marketing" className="flex items-center gap-2 w-full">
                  <BarChart className="h-4 w-4 text-marketing" />
                  <span>Marketing</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/roadmaps/languages" className="flex items-center gap-2 w-full">
                  <Globe className="h-4 w-4 text-languages" />
                  <span>Languages</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/roadmaps/communication" className="flex items-center gap-2 w-full">
                  <MessageSquare className="h-4 w-4 text-communication" />
                  <span>Communication</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/resources">
            <Button variant="ghost">Resources</Button>
          </Link>
          
          <Link to="/videos">
            <Button variant="ghost">Videos</Button>
          </Link>
          
          <Link to="/faq">
            <Button variant="ghost">FAQ</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-3">
            <div className="font-medium mb-2">Roadmaps:</div>
            <Link 
              to="/roadmaps/finance" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary"
              onClick={toggleMenu}
            >
              <BarChart className="h-4 w-4 text-finance" />
              <span>Finance</span>
            </Link>
            <Link 
              to="/roadmaps/sales" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary"
              onClick={toggleMenu}
            >
              <Users className="h-4 w-4 text-sales" />
              <span>Sales</span>
            </Link>
            <Link 
              to="/roadmaps/marketing" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary"
              onClick={toggleMenu}
            >
              <BarChart className="h-4 w-4 text-marketing" />
              <span>Marketing</span>
            </Link>
            <Link 
              to="/roadmaps/languages" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary"
              onClick={toggleMenu}
            >
              <Globe className="h-4 w-4 text-languages" />
              <span>Languages</span>
            </Link>
            <Link 
              to="/roadmaps/communication" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary"
              onClick={toggleMenu}
            >
              <MessageSquare className="h-4 w-4 text-communication" />
              <span>Communication</span>
            </Link>

            <div className="border-t my-2 pt-2">
              <Link 
                to="/resources" 
                className="block p-2 rounded-md hover:bg-secondary"
                onClick={toggleMenu}
              >
                Resources
              </Link>
              <Link 
                to="/videos" 
                className="block p-2 rounded-md hover:bg-secondary"
                onClick={toggleMenu}
              >
                Videos
              </Link>
              <Link 
                to="/faq" 
                className="block p-2 rounded-md hover:bg-secondary"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
