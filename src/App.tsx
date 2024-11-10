import React, { useState } from 'react';
import SignatureForm from './components/SignatureForm';
import SignaturePreview from './components/SignaturePreview';
import { FormData } from './types';

function App() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    role: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    linkedin: '',
    twitter: '',
    photo: '',
    accentColor: '#0066FF',
    template: 'modern',
    font: 'Arial',
    disclaimer: '',
    logo: '',
    badges: []
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Générateur de Signature</h1>
          <p className="text-lg text-gray-600">Créez une signature email professionnelle en quelques clics</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <SignatureForm formData={formData} setFormData={setFormData} />
          <SignaturePreview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;