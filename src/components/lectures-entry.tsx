import { ArrowUpRight } from "lucide-react";
import { Lectures } from "@/data/lectures";

export function LecturesEntry({ Lectures }: { Lectures: Lectures }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {Lectures.url ? (
            <a
              href={Lectures.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {lecLecturesture.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            Lectures.title
          )}
        </h3>
        {Lectures.date && (
          <p className="text-sm text-zinc-500">{Lectures.date}</p>
        )}
        {Lectures.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {Lectures.description}
          </p>
        )}
        {Lectures.course && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {Lectures.course}
          </p>
        )}
      </div>
    </div>
  );
}

export default LecturesEntry;