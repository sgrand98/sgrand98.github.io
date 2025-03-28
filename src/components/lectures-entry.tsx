// import { ArrowUpRight } from "lucide-react";
import { Lectures } from "@/data/lectures";

export function LecturesEntry({ lectures }: { lectures: Lectures }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="flex flex-col flex-1">
        {lectures.course && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-1">
            {lectures.course}
          </p>
        )}
      </div>
    </div>
  );
}

export default LecturesEntry;