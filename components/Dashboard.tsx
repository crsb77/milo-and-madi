
import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { BOOK_METADATA } from '../constants';
import DownloadCard from './DownloadCard';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Hero Header */}
      <header className="bg-sky-500 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-200 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400 rounded-full -ml-24 -mb-24 blur-2xl"></div>
        
        <div className="relative z-10 p-10 md:p-16 text-center text-white">
          <h2 className="text-2xl font-medium mb-1 opacity-90 tracking-wide font-fredoka">Milo and Madi</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter drop-shadow-sm font-fredoka">A Tooth Story</h1>
          <p className="text-sky-100 text-xl md:text-2xl font-light">
            A graphic novel by <span className="font-semibold text-white">{BOOK_METADATA.authors.join(' and ')}</span>
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <main className="space-y-8">
          <section className="bg-white rounded-3xl p-8 tooth-shadow space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <h3 className="text-2xl font-bold text-slate-800 font-fredoka">Project Materials</h3>
              <p className="text-slate-500 leading-relaxed">
                Thank you for your professional interest in Milo and Madi. Below are the materials for your review.
              </p>
            </div>

            <div className="space-y-4">
              <DownloadCard 
                title="Fully Illustrated Draft"
                description="PDF Document • Complete Manuscript"
                icon="text"
                href={BOOK_METADATA.links.draft}
              />
              <DownloadCard 
                title="Proposal Packet"
                description="PDF Document • Synopsis, Characters, Sample Pages, Bios"
                icon="book"
                href={BOOK_METADATA.links.proposal}
              />
            </div>
          </section>

          <footer className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col items-center gap-6 text-center">
             <div className="space-y-2">
               <p className="text-slate-400 text-sm">Interested in this project? Reach out to the author directly.</p>
               <a 
                href={`mailto:${BOOK_METADATA.contactEmail}`} 
                className="text-2xl font-bold hover:text-sky-400 transition-colors flex items-center gap-3 justify-center group"
              >
                <Mail className="group-hover:animate-bounce" />
                {BOOK_METADATA.contactEmail}
              </a>
             </div>
             <p className="text-slate-500 text-xs">
               © {new Date().getFullYear()} Chris Bailey and Joseph Bailey. <br/>
               Confidential materials for review only. Do not distribute without permission.
             </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
