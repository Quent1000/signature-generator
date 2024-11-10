import React from 'react';
import { Phone, Mail, Globe, Linkedin, Twitter, MapPin } from 'lucide-react';
import { FormData, Badge } from '../types';

const AVAILABLE_BADGES: Badge[] = [
  {
    id: 'eco',
    name: 'Eco-responsable',
    icon: 'https://img.shields.io/badge/Eco-Responsable-green'
  },
  {
    id: 'certified',
    name: 'Certifié',
    icon: 'https://img.shields.io/badge/Professionnel-Certifié-blue'
  },
  {
    id: 'expert',
    name: 'Expert',
    icon: 'https://img.shields.io/badge/Expert-Verified-gold'
  }
];

interface Props {
  formData: FormData;
}

const SignaturePreview: React.FC<Props> = ({ formData }) => {
  const copyToClipboard = () => {
    const signatureElement = document.getElementById('signature-preview');
    if (signatureElement) {
      const range = document.createRange();
      range.selectNode(signatureElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      alert('Signature copiée !');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Aperçu</h2>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Copier la signature
        </button>
      </div>

      <div className="border rounded-lg p-6 bg-gray-50">
        <table id="signature-preview" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top', paddingRight: '20px' }}>
                {formData.photo && (
                  <img
                    src={formData.photo}
                    alt={formData.fullName}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: formData.template === 'modern' ? '50%' : '4px',
                      objectFit: 'cover',
                    }}
                  />
                )}
                {formData.logo && (
                  <img
                    src={formData.logo}
                    alt={formData.company}
                    style={{
                      width: '100px',
                      marginTop: '10px',
                      objectFit: 'contain',
                    }}
                  />
                )}
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={{ paddingBottom: '10px' }}>
                        <div style={{ fontFamily: formData.font }}>
                          <div style={{ 
                            fontSize: formData.template === 'minimal' ? '16px' : '18px', 
                            fontWeight: 'bold', 
                            color: '#1a1a1a' 
                          }}>
                            {formData.fullName || 'Votre Nom'}
                          </div>
                          <div style={{ 
                            fontSize: '14px', 
                            color: formData.accentColor, 
                            marginTop: '2px' 
                          }}>
                            {formData.role && `${formData.role}`}
                            {formData.role && formData.company && ' | '}
                            {formData.company && `${formData.company}`}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            {formData.phone && (
                              <tr>
                                <td style={{ padding: '4px 0' }}>
                                  <Phone size={14} style={{ color: formData.accentColor, marginRight: '8px', display: 'inline' }} />
                                  <span style={{ fontSize: '14px', color: '#666' }}>{formData.phone}</span>
                                </td>
                              </tr>
                            )}
                            {formData.email && (
                              <tr>
                                <td style={{ padding: '4px 0' }}>
                                  <Mail size={14} style={{ color: formData.accentColor, marginRight: '8px', display: 'inline' }} />
                                  <a href={`mailto:${formData.email}`} style={{ fontSize: '14px', color: '#666', textDecoration: 'none' }}>
                                    {formData.email}
                                  </a>
                                </td>
                              </tr>
                            )}
                            {formData.website && (
                              <tr>
                                <td style={{ padding: '4px 0' }}>
                                  <Globe size={14} style={{ color: formData.accentColor, marginRight: '8px', display: 'inline' }} />
                                  <a href={formData.website} style={{ fontSize: '14px', color: '#666', textDecoration: 'none' }}>
                                    {formData.website.replace(/^https?:\/\//, '')}
                                  </a>
                                </td>
                              </tr>
                            )}
                            {formData.location && (
                              <tr>
                                <td style={{ padding: '4px 0' }}>
                                  <MapPin size={14} style={{ color: formData.accentColor, marginRight: '8px', display: 'inline' }} />
                                  <span style={{ fontSize: '14px', color: '#666' }}>{formData.location}</span>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    {(formData.linkedin || formData.twitter) && (
                      <tr>
                        <td style={{ paddingTop: '10px' }}>
                          {formData.linkedin && (
                            <a
                              href={formData.linkedin}
                              style={{ marginRight: '10px', textDecoration: 'none' }}
                            >
                              <Linkedin size={20} style={{ color: formData.accentColor }} />
                            </a>
                          )}
                          {formData.twitter && (
                            <a
                              href={`https://twitter.com/${formData.twitter.replace('@', '')}`}
                              style={{ textDecoration: 'none' }}
                            >
                              <Twitter size={20} style={{ color: formData.accentColor }} />
                            </a>
                          )}
                        </td>
                      </tr>
                    )}
                    {formData.badges && formData.badges.length > 0 && (
                      <tr>
                        <td style={{ paddingTop: '10px' }}>
                          {formData.badges.map((badgeId) => {
                            const badge = AVAILABLE_BADGES.find(b => b.id === badgeId);
                            if (badge) {
                              return (
                                <img
                                  key={badge.id}
                                  src={badge.icon}
                                  alt={badge.name}
                                  style={{ marginRight: '5px', height: '20px' }}
                                />
                              );
                            }
                            return null;
                          })}
                        </td>
                      </tr>
                    )}
                    {formData.disclaimer && (
                      <tr>
                        <td style={{ paddingTop: '10px', borderTop: '1px solid #eee' }}>
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#999', 
                            fontStyle: 'italic',
                            marginTop: '10px'
                          }}>
                            {formData.disclaimer}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SignaturePreview;