import Image from "next/image";
import { ArrowUpRight, FileText, Code, Award, Users } from "lucide-react";
import { Publication } from "@/data/publication";

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  const formatAuthors = (authors: string | string[]) => {
    if (Array.isArray(authors)) {
      return authors.join(', ');
    }
    return authors;
  };

  return (
    <div className="group bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4">
        {publication.imageUrl && (
          <div className="w-full sm:w-1/4 min-w-[160px] relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                src={publication.imageUrl}
                alt={publication.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              <FileText size={12} />
              {publication.conference} {publication.year}
            </div>
            {publication.award && (
              <div className="group/award flex px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full items-center shadow-sm border border-amber-200 relative overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 translate-x-[-100%] group-hover/award:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                <Award size={12} className="text-amber-600 mr-1" />
                <p className="text-xs text-amber-700 font-medium relative">
                  {publication.award}
                </p>
              </div>
            )}
          </div>
          
          <h3 className="font-serif text-lg font-semibold text-slate-800 leading-snug">
            {publication.title}
          </h3>
          
          <div className="flex items-start gap-2">
            <Users size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-600">
              {formatAuthors(publication.authors)}
            </p>
          </div>
          
          {publication.tldr && (
            <div className="bg-blue-50 border-l-4 border-blue-200 p-3 rounded-r-lg">
              <p className="text-sm text-blue-800 italic">
                <span className="font-medium">TL;DR:</span> {publication.tldr}
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 pt-2">
            {publication.paperUrl && (
              <a
                href={publication.paperUrl}
                className="group/btn inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={12} />
                <span>Paper</span>
                <ArrowUpRight size={10} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </a>
            )}
            {publication.codeUrl && (
              <a
                href={publication.codeUrl}
                className="group/btn inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code size={12} />
                <span>Code</span>
                <ArrowUpRight size={10} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </a>
            )}
            {publication.bibtex && (
              <a
                href={publication.bibtex}
                className="group/btn inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={12} />
                <span>BibTeX</span>
                <ArrowUpRight size={10} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
