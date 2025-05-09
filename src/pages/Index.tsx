
import React, { useState } from "react";
import { defaultResumeData, ResumeData } from "@/lib/resumeTypes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { FileText, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const isMobile = useIsMobile();

  const updateResumeSettings = (settings: Partial<ResumeData["settings"]>) => {
    setResumeData({
      ...resumeData,
      settings: {
        ...resumeData.settings,
        ...settings,
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-cvfacile-primary to-cvfacile-accent">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-6 text-3xl md:text-5xl font-bold text-white font-poppins">
              Créez un CV professionnel en quelques minutes
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
              CV Facile vous permet de créer, personnaliser et télécharger des CV professionnels au format PDF.
            </p>
            <a 
              href="#resume-builder" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-cvfacile-primary transition-all bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              {isMobile ? "Créer mon CV" : "Créer mon CV maintenant"} <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
            <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-white"></div>
          </div>
        </section>
        
        {/* Feature Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-10 md:mb-12 text-2xl md:text-3xl font-bold text-center font-poppins">
              Pourquoi choisir <span className="text-gradient-primary">CV Facile</span> ?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature cards */}
              {[
                {
                  title: "Modèles professionnels",
                  description: "Choisissez parmi une sélection de modèles élégants et professionnels adaptés à votre secteur d'activité."
                },
                {
                  title: "Personnalisation facile",
                  description: "Personnalisez les couleurs, les polices et la mise en page pour créer un CV qui vous ressemble."
                },
                {
                  title: "Export PDF",
                  description: "Téléchargez votre CV en format PDF de haute qualité, prêt à être partagé avec les recruteurs."
                },
                {
                  title: "Interface intuitive",
                  description: "Notre interface conviviale vous guide à chaque étape de la création de votre CV."
                },
                {
                  title: "Aperçu en temps réel",
                  description: "Visualisez les modifications apportées à votre CV en temps réel pour un résultat parfait."
                },
                {
                  title: "Sauvegarde sécurisée",
                  description: "Créez un compte pour sauvegarder vos CV et y accéder à tout moment depuis n'importe quel appareil."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-xl hover:shadow-lg">
                  <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${
                    index % 2 === 0 ? 'gradient-primary' : 'gradient-secondary'
                  }`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold font-poppins">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Resume Builder Section */}
        <section id="resume-builder" className="py-12 md:py-16">
          <div className="container px-4 mx-auto">
            <h2 className="mb-10 md:mb-12 text-2xl md:text-3xl font-bold text-center font-poppins">
              Construisez votre <span className="text-gradient-primary">CV professionnel</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-xl font-semibold">Informations</h3>
                <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
              </div>
              
              <div>
                <h3 className="mb-6 text-xl font-semibold">Aperçu</h3>
                <ResumePreview data={resumeData} updateResumeSettings={updateResumeSettings} />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 text-white bg-gradient-to-br from-cvfacile-accent to-cvfacile-primary">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-6 text-2xl md:text-4xl font-bold font-poppins">
              Prêt à booster votre carrière ?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
              Créez un compte gratuit pour sauvegarder vos CV, accéder à des modèles premium et partager vos réalisations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#" 
                className="px-6 py-3 text-lg font-medium transition-all bg-white rounded-full text-cvfacile-primary hover:bg-gray-100"
              >
                Créer un compte gratuit
              </a>
              <a 
                href="#" 
                className="px-6 py-3 text-lg font-medium transition-all border border-white rounded-full hover:bg-white/10"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
