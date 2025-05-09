
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { generatePDF } from '@/lib/pdfGenerator';
import { ResumeData } from '@/lib/resumeTypes';

interface PDFButtonProps {
  resumeData: ResumeData;
  previewId: string;
}

const PDFButton: React.FC<PDFButtonProps> = ({ resumeData, previewId }) => {
  const handleDownload = () => {
    generatePDF(resumeData, previewId);
  };

  return (
    <Button 
      onClick={handleDownload}
      className="bg-gradient-to-r from-cvfacile-orange to-cvfacile-accent hover:opacity-90"
    >
      <Download className="w-4 h-4 mr-2" />
      Télécharger en PDF
    </Button>
  );
};

export default PDFButton;
