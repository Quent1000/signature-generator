import React from 'react';
import { Layout, Type, Minimize } from 'lucide-react';

interface Props {
  selected: string;
  onChange: (template: 'modern' | 'classic' | 'minimal') => void;
}

const TemplateSelector: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => onChange('modern')}
        className={`p-4 rounded-lg border-2 transition-all ${
          selected === 'modern'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-200'
        }`}
      >
        <Layout className="w-6 h-6 mb-2 mx-auto" />
        <div className="text-sm font-medium">Moderne</div>
      </button>
      
      <button
        onClick={() => onChange('classic')}
        className={`p-4 rounded-lg border-2 transition-all ${
          selected === 'classic'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-200'
        }`}
      >
        <Type className="w-6 h-6 mb-2 mx-auto" />
        <div className="text-sm font-medium">Classique</div>
      </button>
      
      <button
        onClick={() => onChange('minimal')}
        className={`p-4 rounded-lg border-2 transition-all ${
          selected === 'minimal'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-200'
        }`}
      >
        <Minimize className="w-6 h-6 mb-2 mx-auto" />
        <div className="text-sm font-medium">Minimal</div>
      </button>
    </div>
  );
}

export default TemplateSelector;