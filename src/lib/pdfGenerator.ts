
import { jsPDF } from "jspdf";
import { ResumeData } from "./resumeTypes";
import { toast } from "sonner";

export const generatePDF = (resumeData: ResumeData, elementId: string): void => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      toast.error("Élément de CV introuvable");
      return;
    }

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    // On récupère les dimensions de l'élément
    const { offsetWidth, offsetHeight } = element;
    const scaleFactor = 595.28 / offsetWidth; // A4 width in points / element width
    
    // Capture l'élément en tant qu'image et l'ajoute au PDF
    const canvas = document.createElement("canvas");
    canvas.width = offsetWidth * 2; // Scale up for better quality
    canvas.height = offsetHeight * 2;
    const context = canvas.getContext("2d");
    
    if (!context) {
      toast.error("Impossible de générer le PDF");
      return;
    }
    
    context.scale(2, 2);
    
    // Utilise html2canvas via une Promise
    import('html2canvas').then(({ default: html2canvas }) => {
      html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        
        // Calculate dimensions to fit A4
        const width = 595.28; // A4 width in points
        const height = (canvas.height * width) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        
        // Génère le nom de fichier avec la date actuelle
        const fileName = `CV_${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_${new Date().toISOString().slice(0, 10)}.pdf`;
        
        pdf.save(fileName);
        toast.success("CV téléchargé avec succès!");
      });
    }).catch(error => {
      console.error("Erreur lors de la génération du PDF:", error);
      toast.error("Erreur lors de la génération du PDF");
    });
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
    toast.error("Erreur lors de la génération du PDF");
  }
};
