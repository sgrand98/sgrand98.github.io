import { ArrowUpRight } from "lucide-react";
import { Lecture } from "@/data/lectures";

export function LecturesEntry({ lecture }: { lecture: Lecture }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {lecture.url ? (
            <a
              href={lecture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {lecture.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            lecture.title
          )}
        </h3>
        {lecture.date && (
          <p className="text-sm text-zinc-500">{lecture.date}</p>
        )}
        {lecture.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {lecture.description}
          </p>
        )}
        {lecture.course && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {lecture.course}
          </p>
        )}
      </div>
    </div>
  );
}

export default LecturesEntry;