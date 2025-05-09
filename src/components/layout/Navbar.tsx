
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center space-x-2">
          <FileText className="w-8 h-8 text-cvfacile-primary" />
          <span className="text-xl font-bold font-poppins text-gradient-primary">CV Facile</span>
        </div>
        
        <nav className="hidden space-x-6 text-sm font-medium md:flex">
          <a href="#" className="text-gray-600 transition-colors hover:text-cvfacile-primary">Accueil</a>
          <a href="#" className="text-gray-600 transition-colors hover:text-cvfacile-primary">Modèles</a>
          <a href="#" className="text-gray-600 transition-colors hover:text-cvfacile-primary">Comment ça marche</a>
          <a href="#" className="text-gray-600 transition-colors hover:text-cvfacile-primary">FAQ</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden text-gray-600 sm:inline-flex hover:text-cvfacile-primary">
            Connexion
          </Button>
          <Button className="bg-gradient-to-r from-cvfacile-primary to-cvfacile-accent hover:opacity-90">
            Inscription
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
