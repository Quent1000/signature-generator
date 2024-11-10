import React from 'react';
import { Badge } from '../types';

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
  selected: string[];
  onChange: (badges: string[]) => void;
}

const BadgeSelector: React.FC<Props> = ({ selected, onChange }) => {
  const toggleBadge = (badgeId: string) => {
    if (selected.includes(badgeId)) {
      onChange(selected.filter(id => id !== badgeId));
    } else {
      onChange([...selected, badgeId]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Badges professionnels
      </label>
      <div className="grid grid-cols-2 gap-2">
        {AVAILABLE_BADGES.map(badge => (
          <button
            key={badge.id}
            onClick={() => toggleBadge(badge.id)}
            className={`p-2 rounded-lg border transition-all flex items-center space-x-2 ${
              selected.includes(badge.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <img src={badge.icon} alt={badge.name} className="h-5" />
            <span className="text-sm">{badge.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BadgeSelector;