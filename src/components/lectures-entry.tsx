import { ArrowUpRight } from "lucide-react";
import { Lectures } from "@/data/lectures";

export function LecturesEntry({ lectures }: { lectures: Lectures }) {
    return (
        // fill this with template from PublicationEntry
        <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col flex-1">
                <h3 className="font-serif text-md mb-3">
                    {lectures.url ? (
                        <a
                            href={lectures.url}
                            className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
                        >
                            {lectures.title}
                            <ArrowUpRight
                                size={16}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                        </a>
                    ) : (
                        lectures.title
                    )}
                </h3>
                {lectures.description && (
                    <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                        {lectures.description}
                    </p>
                )}
            </div>
        </div>
    );
  }

export default LecturesEntry;

