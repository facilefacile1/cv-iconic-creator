
import { ResumeData } from "@/lib/resumeTypes";
import { v4 as uuidv4 } from 'uuid';

export interface SavedResume {
  id: string;
  title: string;
  date: string;
  resumeData: ResumeData;
}

export const saveResume = (resumeData: ResumeData, title?: string): SavedResume => {
  const savedResumesStr = localStorage.getItem('savedResumes');
  const savedResumes: SavedResume[] = savedResumesStr ? JSON.parse(savedResumesStr) : [];
  
  const newResume: SavedResume = {
    id: uuidv4(),
    title: title || `CV - ${new Date().toLocaleDateString()}`,
    date: new Date().toISOString(),
    resumeData
  };
  
  savedResumes.push(newResume);
  localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
  
  return newResume;
};

export const getSavedResumes = (): SavedResume[] => {
  const savedResumesStr = localStorage.getItem('savedResumes');
  return savedResumesStr ? JSON.parse(savedResumesStr) : [];
};

export const getResumeById = (id: string): SavedResume | undefined => {
  const savedResumes = getSavedResumes();
  return savedResumes.find(resume => resume.id === id);
};

export const updateResume = (id: string, updatedData: Partial<SavedResume>): SavedResume | null => {
  const savedResumes = getSavedResumes();
  const index = savedResumes.findIndex(resume => resume.id === id);
  
  if (index === -1) return null;
  
  const updatedResume = {
    ...savedResumes[index],
    ...updatedData,
    date: new Date().toISOString()
  };
  
  savedResumes[index] = updatedResume;
  localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
  
  return updatedResume;
};

export const deleteResume = (id: string): boolean => {
  const savedResumes = getSavedResumes();
  const filteredResumes = savedResumes.filter(resume => resume.id !== id);
  
  if (filteredResumes.length === savedResumes.length) {
    return false; // No resume was removed
  }
  
  localStorage.setItem('savedResumes', JSON.stringify(filteredResumes));
  return true;
};
