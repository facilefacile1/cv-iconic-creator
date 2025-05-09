
import React from "react";
import { ResumeData, fontMappings } from "@/lib/resumeTypes";
import { Phone, Mail, MapPin, Globe, Linkedin, Calendar } from "lucide-react";

interface ClassicTemplateProps {
  data: ResumeData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  const { personalInfo, experiences, education, skills, languages, certifications, settings } = data;
  const fonts = fontMappings[settings.font];

  return (
    <div 
      className="w-full h-full shadow-lg bg-white resume-shadow"
      style={{ 
        color: settings.colorScheme.text,
        maxWidth: '794px', // A4 width in px (roughly)
        minHeight: '1123px', // A4 height in px
      }}
    >
      {/* En-tête */}
      <div 
        className="px-6 py-8"
        style={{ backgroundColor: settings.colorScheme.primary }}
      >
        <h1 className={`text-3xl font-bold text-white ${fonts.heading}`}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className={`mt-1 text-xl text-white/90 ${fonts.body}`}>{personalInfo.title}</p>
      </div>

      {/* Corps du CV */}
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Colonne de gauche */}
        <div className="col-span-1">
          {/* Coordonnées */}
          <div className="mb-6">
            <h2 className={`mb-3 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
              Contact
            </h2>
            <ul className={`space-y-2 ${fonts.body}`}>
              <li className="flex items-start">
                <Phone className="flex-shrink-0 w-4 h-4 mt-1 mr-2" style={{ color: settings.colorScheme.secondary }} />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail className="flex-shrink-0 w-4 h-4 mt-1 mr-2" style={{ color: settings.colorScheme.secondary }} />
                <span>{personalInfo.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 w-4 h-4 mt-1 mr-2" style={{ color: settings.colorScheme.secondary }} />
                <span>{personalInfo.address}</span>
              </li>
              {personalInfo.website && (
                <li className="flex items-start">
                  <Globe className="flex-shrink-0 w-4 h-4 mt-1 mr-2" style={{ color: settings.colorScheme.secondary }} />
                  <span>{personalInfo.website}</span>
                </li>
              )}
              {personalInfo.linkedin && (
                <li className="flex items-start">
                  <Linkedin className="flex-shrink-0 w-4 h-4 mt-1 mr-2" style={{ color: settings.colorScheme.secondary }} />
                  <span>{personalInfo.linkedin}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Compétences */}
          {skills.length > 0 && (
            <div className="mb-6">
              <h2 className={`mb-3 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
                Compétences
              </h2>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className={fonts.body}>{skill.name}</span>
                      <span className="text-xs">{skill.level}/5</span>
                    </div>
                    <div className="w-full h-2 mt-1 overflow-hidden bg-gray-200 rounded-full">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${(skill.level / 5) * 100}%`,
                          backgroundColor: settings.colorScheme.accent 
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Langues */}
          {languages.length > 0 && (
            <div className="mb-6">
              <h2 className={`mb-3 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
                Langues
              </h2>
              <ul className="space-y-2">
                {languages.map((language) => (
                  <li key={language.id} className="flex items-center justify-between">
                    <span className={fonts.body}>{language.name}</span>
                    <span className="text-sm text-gray-600">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="mb-6">
              <h2 className={`mb-3 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
                Certifications
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.id} className={fonts.body}>
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm">{cert.issuer}</div>
                    <div className="flex items-center mt-1 text-xs text-gray-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Colonne de droite */}
        <div className="col-span-2">
          {/* Profil */}
          {personalInfo.summary && (
            <div className="mb-6">
              <h2 className={`mb-3 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
                Profil
              </h2>
              <p className={fonts.body}>{personalInfo.summary}</p>
            </div>
          )}

          {/* Expériences */}
          {experiences.length > 0 && (
            <div className="mb-6">
              <h2 className={`mb-4 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
                Expérience Professionnelle
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${fonts.heading}`}>{exp.position}</h3>
                        <p className="text-sm font-medium text-gray-600">{exp.company}</p>
                      </div>
                      <div className={`text-sm text-gray-600 ${fonts.body}`}>
                        {exp.startDate} - {exp.current ? "Présent" : exp.endDate}
                      </div>
                    </div>
                    <p className={`mt-2 text-sm ${fonts.body}`}>{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="pl-5 mt-2 space-y-1 text-sm list-disc">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className={fonts.body}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Formation */}
          {education.length > 0 && (
            <div>
              <h2 className={`mb-4 text-lg font-semibold ${fonts.heading}`} style={{ color: settings.colorScheme.primary }}>
                Formation
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${fonts.heading}`}>{edu.degree}</h3>
                        <p className={`text-sm font-medium text-gray-600 ${fonts.body}`}>{edu.institution}</p>
                        <p className={`text-sm text-gray-600 ${fonts.body}`}>{edu.field}</p>
                      </div>
                      <div className={`text-sm text-gray-600 ${fonts.body}`}>
                        {edu.startDate} - {edu.current ? "Présent" : edu.endDate}
                      </div>
                    </div>
                    {edu.description && (
                      <p className={`mt-2 text-sm ${fonts.body}`}>{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;
