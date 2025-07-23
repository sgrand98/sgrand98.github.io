import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { lecturesData } from "@/data/lectures";
import LecturesEntry from "@/components/lectures-entry";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWZhZmEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Main content */}
      <div className="relative max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8 animate-slideInLeft">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover-scale">
                <ProfileSection aboutMe={aboutMe} />
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section className="animate-fadeInUp">
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                  <p
                    className="font-serif text-base leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-blue-600 [&_a:hover]:text-blue-800 [&_a]:transition-colors"
                    dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                  />
                </div>
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName} className="animate-fadeInUp">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                          <h2 className="font-serif text-2xl font-semibold mb-8 text-slate-800 gradient-text">
                            News
                          </h2>
                          <div className="space-y-6">
                            {newsData.map((news, index) => (
                              <div key={index} className="border-l-4 border-blue-200 pl-4">
                                <NewsEntry news={news} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} className="animate-fadeInUp">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                          <h2 className="font-serif text-2xl font-semibold mb-8 text-slate-800 gradient-text">
                            Education
                          </h2>
                          <div className="space-y-6">
                            {educationData.map((education, index) => (
                              <EducationEntry key={index} education={education} />
                            ))}
                          </div>
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName} className="animate-fadeInUp">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                          <h2 className="font-serif text-2xl font-semibold mb-8 text-slate-800 gradient-text">
                            Publications
                          </h2>
                          <div className="space-y-6">
                            {publicationData.map((publication, index) => (
                              <div key={index}>
                                <PublicationEntry publication={publication} />
                                {index < publicationData.length - 1 && (
                                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} className="animate-fadeInUp">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                          <h2 className="font-serif text-2xl font-semibold mb-8 text-slate-800 gradient-text">
                            Experience
                          </h2>
                          <div className="space-y-6">
                            {experienceData.map((experience, index) => (
                              <ExperienceEntry key={index} experience={experience} />
                            ))}
                          </div>
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} className="animate-fadeInUp">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                          <h2 className="font-serif text-2xl font-semibold mb-8 text-slate-800 gradient-text">
                            Portfolio
                          </h2>
                          <div className="space-y-6">
                            {portfolioData.map((portfolio, index) => (
                              <PortfolioEntry key={index} portfolio={portfolio} />
                            ))}
                          </div>
                        </div>
                      </section>
                    )
                  );
                case Section.Lectures:
                  return (
                    lecturesData.length > 0 && (
                      <section key={sectionName} className="animate-fadeInUp">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-scale">
                          <h2 className="font-serif text-2xl font-semibold mb-8 text-slate-800 gradient-text">
                            Lectures
                          </h2>
                          <div className="space-y-6">
                            {lecturesData.map((lectures, index) => (
                              <LecturesEntry key={index} lectures={lectures} />
                            ))}
                          </div>
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
