
import React from 'react';
import { FontChoice, fontMappings } from '@/lib/resumeTypes';
import { Check } from 'lucide-react';

interface FontPickerProps {
  selectedFont: FontChoice;
  onChange: (font: FontChoice) => void;
}

const FontPicker: React.FC<FontPickerProps> = ({ selectedFont, onChange }) => {
  const fontOptions: Array<{ value: FontChoice; label: string; preview: string }> = [
    { value: 'default', label: 'Standard', preview: 'Aa' },
    { value: 'elegant', label: 'Élégante', preview: 'Aa' },
    { value: 'modern', label: 'Moderne', preview: 'Aa' },
    { value: 'technical', label: 'Technique', preview: 'Aa' },
  ];

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="mb-3 text-base font-medium">Police du CV</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {fontOptions.map((font) => {
          const isSelected = selectedFont === font.value;
          const mappings = fontMappings[font.value];
          
          return (
            <div
              key={font.value}
              onClick={() => onChange(font.value)}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                isSelected ? 'border-cvfacile-primary bg-blue-50' : 'border-gray-200 hover:border-cvfacile-primary'
              }`}
            >
              <div className={`flex justify-between items-center mb-2 ${mappings.heading}`}>
                <span>{font.label}</span>
                {isSelected && <Check className="w-4 h-4 text-cvfacile-primary" />}
              </div>
              <div className={`text-2xl text-center ${mappings.body}`}>
                {font.preview}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FontPicker;
