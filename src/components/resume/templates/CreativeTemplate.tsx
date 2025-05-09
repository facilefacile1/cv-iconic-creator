
import React from "react";
import { ResumeData, fontMappings } from "@/lib/resumeTypes";
import { Phone, Mail, Globe, MapPin, Linkedin, Star, Calendar } from "lucide-react";

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { personalInfo, experiences, education, skills, languages, certifications, settings } = data;
  const fonts = fontMappings[settings.font];

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= level ? 'fill-current' : ''}
            style={{ color: star <= level ? settings.colorScheme.accent : '#d1d5db' }}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="w-full h-full shadow-lg resume-shadow overflow-hidden"
      style={{
        color: settings.colorScheme.text,
        maxWidth: '794px', // A4 width in px (roughly)
        minHeight: '1123px', // A4 height in px
        backgroundColor: 'white'
      }}
    >
      {/* Header with diagonal design */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full transform -skew-y-6 origin-top-right -translate-y-24"
          style={{
            backgroundColor: settings.colorScheme.primary,
            zIndex: 0
          }}
        ></div>
        
        <div className="relative px-8 py-12 text-white z-10">
          <h1 className={`text-4xl font-bold ${fonts.heading}`}>
            {personalInfo.firstName} <br/> {personalInfo.lastName}
          </h1>
          <p className={`mt-3 text-xl ${fonts.body} text-white/90`}>{personalInfo.title}</p>
          
          <div className="flex flex-wrap mt-6 space-x-6">
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className={`${fonts.body}`}>{personalInfo.phone}</span>
              </div>
            )}
            
            {personalInfo.email && (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className={`${fonts.body}`}>{personalInfo.email}</span>
              </div>
            )}
            
            {personalInfo.address && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className={`${fonts.body}`}>{personalInfo.address}</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap mt-3 space-x-6">
            {personalInfo.website && (
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span className={`${fonts.body}`}>{personalInfo.website}</span>
              </div>
            )}
            
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2" />
                <span className={`${fonts.body}`}>{personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left column - About and Experience */}
          <div className="md:col-span-7 space-y-8">
            {/* Summary */}
            {personalInfo.summary && (
              <div>
                <h2 
                  className={`mb-4 text-2xl font-bold ${fonts.heading}`}
                  style={{ color: settings.colorScheme.primary }}
                >
                  À propos de moi
                </h2>
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${settings.colorScheme.primary}10` }}
                >
                  <p className={`${fonts.body}`}>{personalInfo.summary}</p>
                </div>
              </div>
            )}
            
            {/* Experience */}
            {experiences.length > 0 && (
              <div>
                <h2 
                  className={`mb-4 text-2xl font-bold ${fonts.heading}`}
                  style={{ color: settings.colorScheme.primary }}
                >
                  Expérience Professionnelle
                </h2>
                
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div 
                      key={exp.id}
                      className="p-4 border-l-4 rounded-r-lg"
                      style={{ 
                        borderLeftColor: settings.colorScheme.accent,
                        backgroundColor: '#f9fafb' 
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className={`text-lg font-semibold ${fonts.heading}`}>{exp.position}</h3>
                          <p 
                            className={`text-base ${fonts.body}`}
                            style={{ color: settings.colorScheme.primary }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        
                        <span 
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: settings.colorScheme.secondary,
                            color: 'white'
                          }}
                        >
                          {exp.startDate} - {exp.current ? "Présent" : exp.endDate}
                        </span>
                      </div>
                      
                      <p className={`mt-2 ${fonts.body}`}>{exp.description}</p>
                      
                      {exp.achievements.length > 0 && (
                        <ul className="mt-2 ml-4 space-y-1 list-disc">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className={`${fonts.body}`}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right column - Skills, Education, Languages, Certifications */}
          <div className="md:col-span-5 space-y-8">
            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <h2 
                  className={`mb-4 text-2xl font-bold ${fonts.heading}`}
                  style={{ color: settings.colorScheme.primary }}
                >
                  Compétences
                </h2>
                
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${settings.colorScheme.primary}10` }}
                >
                  <ul className="space-y-3">
                    {skills.map((skill) => (
                      <li key={skill.id} className="flex items-center justify-between">
                        <span className={`${fonts.body}`}>{skill.name}</span>
                        {renderSkillLevel(skill.level)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Education */}
            {education.length > 0 && (
              <div>
                <h2 
                  className={`mb-4 text-2xl font-bold ${fonts.heading}`}
                  style={{ color: settings.colorScheme.primary }}
                >
                  Formation
                </h2>
                
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div 
                      key={edu.id}
                      className="p-4 border-l-4 rounded-r-lg"
                      style={{ 
                        borderLeftColor: settings.colorScheme.secondary,
                        backgroundColor: '#f9fafb' 
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className={`text-base font-semibold ${fonts.heading}`}>{edu.degree}</h3>
                        <span 
                          className="px-2 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: settings.colorScheme.accent,
                            color: 'white'
                          }}
                        >
                          {edu.startDate} - {edu.current ? "Présent" : edu.endDate}
                        </span>
                      </div>
                      
                      <p 
                        className={`${fonts.body} font-medium`}
                        style={{ color: settings.colorScheme.secondary }}
                      >
                        {edu.institution}
                      </p>
                      
                      <p className={`text-sm ${fonts.body}`}>{edu.field}</p>
                      
                      {edu.description && (
                        <p className={`mt-2 text-sm ${fonts.body}`}>{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Languages */}
            {languages.length > 0 && (
              <div>
                <h2 
                  className={`mb-4 text-2xl font-bold ${fonts.heading}`}
                  style={{ color: settings.colorScheme.primary }}
                >
                  Langues
                </h2>
                
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${settings.colorScheme.primary}10` }}
                >
                  <ul className="space-y-2">
                    {languages.map((lang) => (
                      <li key={lang.id} className="flex items-center justify-between">
                        <span className={`${fonts.body}`}>{lang.name}</span>
                        <span 
                          className="px-2 py-1 text-xs font-medium rounded"
                          style={{ 
                            backgroundColor: settings.colorScheme.secondary,
                            color: 'white'
                          }}
                        >
                          {lang.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Certifications */}
            {certifications.length > 0 && (
              <div>
                <h2 
                  className={`mb-4 text-2xl font-bold ${fonts.heading}`}
                  style={{ color: settings.colorScheme.primary }}
                >
                  Certifications
                </h2>
                
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${settings.colorScheme.primary}10` }}
                >
                  <ul className="space-y-3">
                    {certifications.map((cert) => (
                      <li key={cert.id} className={`${fonts.body}`}>
                        <div className="font-medium">{cert.name}</div>
                        <div 
                          className="text-sm"
                          style={{ color: settings.colorScheme.secondary }}
                        >
                          {cert.issuer}
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.date}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
