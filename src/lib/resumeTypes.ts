
export type ResumePersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  address: string;
  website?: string;
  linkedin?: string;
  summary: string;
  profileImage?: string | null;
};

export type ResumeExperience = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
};

export type ResumeEducation = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description?: string;
};

export type ResumeSkill = {
  id: string;
  name: string;
  level: number; // 1-5
};

export type ResumeLanguage = {
  id: string;
  name: string;
  level: string; // "Débutant", "Intermédiaire", "Avancé", "Courant", "Natif"
};

export type ResumeCertification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
};

export type TemplateType = "classic" | "modern" | "creative" | "medical";

export type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type FontChoice = "default" | "elegant" | "modern" | "technical";

export type ResumeSettings = {
  template: TemplateType;
  colorScheme: ColorScheme;
  font: FontChoice;
  language?: 'fr' | 'en'; // Added language property
};

export type ResumeData = {
  personalInfo: ResumePersonalInfo;
  experiences: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  languages: ResumeLanguage[];
  certifications: ResumeCertification[];
  settings: ResumeSettings;
};

export const defaultResumeData: ResumeData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    address: "",
    website: "",
    linkedin: "",
    summary: "",
    profileImage: null,
  },
  experiences: [],
  education: [],
  skills: [],
  languages: [],
  certifications: [],
  settings: {
    template: "classic",
    colorScheme: {
      primary: "#4F46E5",
      secondary: "#06B6D4",
      accent: "#8B5CF6",
      background: "#FFFFFF",
      text: "#1E293B",
    },
    font: "default",
    language: 'fr', // Default to French
  },
};

export const colorSchemes = {
  indigo: {
    primary: "#4F46E5",
    secondary: "#06B6D4",
    accent: "#8B5CF6",
    background: "#FFFFFF",
    text: "#1E293B",
  },
  green: {
    primary: "#10B981",
    secondary: "#059669",
    accent: "#06B6D4",
    background: "#FFFFFF",
    text: "#1E293B",
  },
  orange: {
    primary: "#F97316",
    secondary: "#EA580C",
    accent: "#FBBF24",
    background: "#FFFFFF",
    text: "#1E293B",
  },
  purple: {
    primary: "#8B5CF6",
    secondary: "#7C3AED",
    accent: "#C084FC",
    background: "#FFFFFF",
    text: "#1E293B",
  },
  blue: {
    primary: "#2563EB",
    secondary: "#1D4ED8",
    accent: "#3B82F6",
    background: "#FFFFFF",
    text: "#1E293B",
  },
};

export const fontMappings = {
  default: {
    heading: "font-poppins",
    body: "font-sans",
    mono: "font-mono",
  },
  elegant: {
    heading: "font-poppins font-semibold",
    body: "font-sans",
    mono: "font-sans",
  },
  modern: {
    heading: "font-sans font-bold",
    body: "font-sans",
    mono: "font-mono",
  },
  technical: {
    heading: "font-mono font-bold",
    body: "font-mono",
    mono: "font-mono",
  },
};
