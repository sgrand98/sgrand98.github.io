import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-6 md:space-y-0">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative md:w-full aspect-[3/4] group">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-wide mb-2 text-slate-800">
            {aboutMe.name}
          </h1>
          {aboutMe.altName && (
            <p className="text-slate-600 text-sm leading-relaxed tracking-wide mb-4">
              {aboutMe.altName}
            </p>
          )}
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            {aboutMe.title}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            {aboutMe.institutionUrl ? (
              <a
                href={aboutMe.institutionUrl}
                className="hover:text-blue-600 transition-colors duration-300 underline decoration-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {aboutMe.institution}
              </a>
            ) : (
              aboutMe.institution
            )}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 bg-white/50 hover:bg-white/80 text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span>Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 bg-white/50 hover:bg-white/80 text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span>CV</span>
            </a>
          )}
        </div>
        
        <div className="space-y-3">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <Mail size={14} />
            </div>
            {aboutMe.email}
          </a>
          {aboutMe.googleScholarUrl && (
            <a
              href={aboutMe.googleScholarUrl}
              className="inline-flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1.5 bg-green-100 rounded-lg">
                <GraduationCap size={14} />
              </div>
              Google Scholar
            </a>
          )}
          {aboutMe.twitterUsername && (
            <a
              href={`https://twitter.com/${aboutMe.twitterUsername}`}
              className="inline-flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1.5 bg-sky-100 rounded-lg">
                <Twitter size={14} />
              </div>
              @{aboutMe.twitterUsername}
            </a>
          )}
          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              className="inline-flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1.5 bg-gray-100 rounded-lg">
                <Github size={14} />
              </div>
              github.com/{aboutMe.githubUsername}
            </a>
          )}
          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              className="inline-flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <Linkedin size={14} />
              </div>
              linkedin.com/in/{aboutMe.linkedinUsername}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
