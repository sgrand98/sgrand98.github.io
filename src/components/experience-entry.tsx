import { Experience } from "@/data/experience";
import { Briefcase, User, ExternalLink } from "lucide-react";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const formatDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
      return description.join('');
    }
    return description;
  };

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 sm:w-24">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full text-white font-semibold text-sm shadow-lg">
            <Briefcase size={20} />
          </div>
          <p className="text-xs text-slate-600 mt-2 font-medium">{experience.date}</p>
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-serif font-semibold text-slate-800 mb-2">
              {experience.title} — {" "}
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-slate-700">{experience.company}</span>
              )}
            </h3>
          </div>
          
          {experience.advisor && (
            <div className="flex items-start gap-2">
              <User size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">
                <span className="font-medium">Advisor:</span> {experience.advisor}
              </p>
            </div>
          )}
          
          {experience.manager && (
            <div className="flex items-start gap-2">
              <User size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">
                <span className="font-medium">Manager:</span> {experience.manager}
              </p>
            </div>
          )}
          
          {experience.description && (
            <div className="prose prose-sm max-w-none">
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {formatDescription(experience.description)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
