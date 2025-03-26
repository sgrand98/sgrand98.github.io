import { ArrowUpRight } from "lucide-react";
import { Lectures } from "@/data/lectures";

export function LecturesEntry({ lectures }: { lectures: Lectures }) {
    return (
        // fill this with template from PublicationEntry
        <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col flex-1">
                <h3 className="font-serif text-md mb-3">
                </h3>
                {lectures.course&& (
                    <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                        {lectures.course}
                    </p>
                )}
            </div>
        </div>
    );
  }

export default LecturesEntry;

