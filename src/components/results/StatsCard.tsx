import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  index?: number;
}

const StatsCard = ({ value, label, index = 0 }: StatsCardProps) => {
  // Define different color schemes for each card
  const colorSchemes = [
    // Card 1 - Blue/Cyan theme
    'bg-gradient-to-br from-blue-500/20 to-cyan-600/30 border-blue-400/30',
    // Card 2 - Green/Emerald theme  
    'bg-gradient-to-br from-green-500/20 to-emerald-600/30 border-green-400/30',
    // Card 3 - Purple/Violet theme
    'bg-gradient-to-br from-purple-500/20 to-violet-600/30 border-purple-400/30'
  ];

  const colorScheme = colorSchemes[index % colorSchemes.length];

  return (
    <div className={`p-6 rounded-xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border ${colorScheme} hover:scale-105`}>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-200">{label}</div>
    </div>
  );
};

export default StatsCard;