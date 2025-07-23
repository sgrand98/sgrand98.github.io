import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="group bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/40 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-6">
        {portfolio.imageUrl && (
          <div className="w-full sm:w-1/3 relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                src={portfolio.imageUrl}
                alt={portfolio.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1 space-y-4">
          <h3 className="font-serif text-lg font-semibold text-slate-800">
            {portfolio.projectUrl ? (
              <a
                href={portfolio.projectUrl}
                className="group/title inline-flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {portfolio.title}
                <ArrowUpRight
                  size={18}
                  className="group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            ) : (
              portfolio.title
            )}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {portfolio.description}
          </p>

          {portfolio.technologies && (
            <div className="flex gap-2 flex-wrap">
              {portfolio.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs text-slate-700 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full font-medium border border-blue-200/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            {portfolio.projectUrl && (
              <a
                href={portfolio.projectUrl}
                className="group/btn inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                <span>View Project</span>
              </a>
            )}
            {portfolio.codeUrl && (
              <a
                href={portfolio.codeUrl}
                className="group/btn inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
