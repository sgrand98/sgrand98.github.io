import { Education } from "@/data/education";
import { GraduationCap, Award, User } from "lucide-react";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 sm:w-24">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white font-semibold text-sm shadow-lg">
            <GraduationCap size={20} />
          </div>
          <p className="text-xs text-slate-600 mt-2 font-medium">{education.year}</p>
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-serif font-semibold text-slate-800 mb-1">
              {education.institution}
            </h3>
            <p className="text-sm text-slate-600 font-medium">{education.degree}</p>
          </div>
          
          {education.advisor && (
            <div className="flex items-start gap-2">
              <User size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">
                <span className="font-medium">Advisor:</span> {education.advisor}
              </p>
            </div>
          )}
          
          {education.thesis && (
            <div className="flex items-start gap-2">
              <GraduationCap size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">
                <span className="font-medium">Thesis:</span>{" "}
                {education.thesisUrl ? (
                  <a
                    href={education.thesisUrl}
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {education.thesis}
                  </a>
                ) : (
                  education.thesis
                )}
              </p>
            </div>
          )}
          
          {education.honors && (
            <div className="flex items-center gap-2">
              <Award size={14} className="text-yellow-500" />
              <span className="text-sm text-slate-700 font-medium bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">
                {education.honors}
              </span>
            </div>
          )}
          
          {education.description && (
            <p 
              className="text-sm text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: education.description }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
