import { BookOpen, Clock, ExternalLink } from "lucide-react";
import { Lectures } from "@/data/lectures";

export function LecturesEntry({ lectures }: { lectures: Lectures }) {
  const parseHours = (course: string) => {
    const hoursMatch = course.match(/(\d+)h/);
    return hoursMatch ? hoursMatch[1] + 'h' : null;
  };

  const getCourseTitle = (course: string) => {
    return course.replace(/, \d+h$/, '');
  };

  const hours = parseHours(lectures.course);
  const courseTitle = getCourseTitle(lectures.course);

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full text-white font-semibold text-sm shadow-lg">
            <BookOpen size={20} />
          </div>
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-base font-serif font-semibold text-slate-800 leading-snug">
                {lectures.title || courseTitle}
              </h3>
              {lectures.title && (
                <p className="text-sm text-slate-600 mt-1">
                  {courseTitle}
                </p>
              )}
            </div>
            
            {hours && (
              <div className="flex items-center gap-1 bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                <Clock size={12} />
                {hours}
              </div>
            )}
          </div>
          
          {lectures.description && (
            <p className="text-sm text-slate-600 leading-relaxed">
              {lectures.description}
            </p>
          )}
          
          {lectures.date && (
            <p className="text-xs text-slate-500 font-medium">
              {lectures.date}
            </p>
          )}
          
          {lectures.url && (
            <a
              href={lectures.url}
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              View Course
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default LecturesEntry;