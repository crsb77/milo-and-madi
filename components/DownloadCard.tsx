
import React from 'react';
import { Download, FileText, BookOpen, LucideIcon } from 'lucide-react';

interface DownloadCardProps {
  title: string;
  description: string;
  icon: 'text' | 'book';
  href: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ title, description, icon, href }) => {
  const IconComponent = icon === 'text' ? FileText : BookOpen;
  const iconBg = icon === 'text' ? 'bg-indigo-100' : 'bg-cyan-100';
  const iconColor = icon === 'text' ? 'text-indigo-500' : 'text-cyan-600';

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="border-2 border-slate-50 rounded-2xl p-6 flex items-center hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-300 cursor-pointer hover:translate-x-1">
        <div className={`${iconBg} p-5 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`w-8 h-8 ${iconColor}`} />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{title}</h3>
          <p className="text-slate-500 text-sm mt-1">{description}</p>
        </div>
        <div className="text-slate-200 group-hover:text-sky-500 transition-colors ml-4">
          <Download className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default DownloadCard;
