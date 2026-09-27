import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sword, Building2, BookOpen, Scale, ArrowLeft } from "lucide-react";
import { getSultanById, sultans, getEraLabel } from "@/data/sultans";
import Navbar from "@/components/Navbar";
import OrnamentDivider from "@/components/OrnamentDivider";
import SultanAvatar from "@/components/SultanAvatar";
import { useState } from "react";

const tabs = [
  { id: "conquests", label: "Conquests", icon: Sword },
  { id: "administration", label: "Administration", icon: Building2 },
  { id: "culture", label: "Culture & Law", icon: BookOpen },
] as const;

const SultanProfile = () => {
  const { id } = useParams();
  const sultan = getSultanById(Number(id));
  const [activeTab, setActiveTab] = useState<string>("conquests");

  if (!sultan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="text-2xl font-display text-foreground">Sultan not found</h1>
          <Link to="/" className="text-secondary mt-4 inline-block">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const prevSultan = sultans.find(s => s.id === sultan.id - 1);
  const nextSultan = sultans.find(s => s.id === sultan.id + 1);

  return (
    <div className="min-h-screen bg-background ottoman-pattern ottoman-texture">
      <Navbar />

      <div className="container mx-auto px-3 sm:px-4 pt-20 sm:pt-24 pb-12 sm:pb-20">
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-ottoman-gold transition-colors font-display text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            {prevSultan && (
              <Link to={`/sultan/${prevSultan.id}`} className="text-xs sm:text-sm text-muted-foreground hover:text-ottoman-gold font-display transition-colors">
                ← {prevSultan.name}
              </Link>
            )}
            {nextSultan && (
              <Link to={`/sultan/${nextSultan.id}`} className="text-xs sm:text-sm text-muted-foreground hover:text-ottoman-gold font-display transition-colors">
                {nextSultan.name} →
              </Link>
            )}
          </div>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ottoman-card p-5 sm:p-8 md:p-12 mb-6 sm:mb-8"
        >
          <div className="flex flex-col items-center gap-5 sm:gap-8 md:flex-row md:items-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 sultan-portrait flex-shrink-0 animate-glow-pulse">
              <SultanAvatar src={sultan.portrait} name={sultan.name} className="w-full h-full" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold ottoman-gradient-text mb-2">
                {sultan.name}
              </h1>
              {sultan.nickname && (
                <p className="text-lg sm:text-xl text-ottoman-gold italic font-body mb-3 sm:mb-4">{sultan.nickname}</p>
              )}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-muted-foreground">
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-ottoman-red">Reign</p>
                  <p className="font-display text-base sm:text-lg text-foreground">{sultan.reignStart}–{sultan.reignEnd}</p>
                </div>
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-ottoman-red">Years Ruled</p>
                  <p className="font-display text-base sm:text-lg text-foreground">{sultan.reignEnd - sultan.reignStart}</p>
                </div>
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-ottoman-red">Lived</p>
                  <p className="font-display text-base sm:text-lg text-foreground">{sultan.birthYear}–{sultan.deathYear}</p>
                </div>
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-ottoman-red">Era</p>
                  <p className="font-display text-base sm:text-lg text-foreground">{getEraLabel(sultan.era)}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-display text-xs sm:text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground red-glow"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/15"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">{tab.label}</span>
              <span className="xs:hidden sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >

          {activeTab === "conquests" && (
            <div className="ottoman-card p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4 sm:mb-6">
                <Sword className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2 text-ottoman-red" />
                Military Achievements
              </h2>
              {sultan.conquests.length > 0 ? (
                <div className="space-y-2 sm:space-y-3">
                  {sultan.conquests.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-ottoman-red flex-shrink-0 mt-1.5 sm:mt-2 group-hover:bg-ottoman-gold transition-colors" />
                      <span className="font-body text-sm sm:text-base text-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground font-body text-sm sm:text-base">No major military campaigns recorded.</p>
              )}
            </div>
          )}

          {activeTab === "administration" && (
            <div className="ottoman-card p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4 sm:mb-6">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2 text-ottoman-gold" />
                Administration & Reforms
              </h2>
              {sultan.administration.length > 0 ? (
                <div className="space-y-2 sm:space-y-3">
                  {sultan.administration.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-ottoman-gold flex-shrink-0 mt-1.5 sm:mt-2 group-hover:bg-ottoman-red transition-colors" />
                      <span className="font-body text-sm sm:text-base text-foreground">{a}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground font-body text-sm sm:text-base">No notable administrative reforms recorded.</p>
              )}
            </div>
          )}

          {activeTab === "culture" && (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="ottoman-card p-5 sm:p-8">
                <h2 className="text-lg sm:text-xl font-display font-bold text-foreground mb-4 sm:mb-6">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2 text-ottoman-gold" />
                  Cultural Contributions
                </h2>
                {sultan.culture.length > 0 ? (
                  <div className="space-y-2 sm:space-y-3">
                    {sultan.culture.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors group">
                        <div className="w-2 h-2 rounded-full bg-ottoman-gold flex-shrink-0 mt-1.5 sm:mt-2 group-hover:bg-ottoman-red transition-colors" />
                        <span className="font-body text-sm sm:text-base text-foreground">{c}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground font-body text-sm sm:text-base">No notable cultural contributions recorded.</p>
                )}
              </div>
              <div className="ottoman-card p-5 sm:p-8">
                <h2 className="text-lg sm:text-xl font-display font-bold text-foreground mb-4 sm:mb-6">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2 text-ottoman-red" />
                  Legal Reforms
                </h2>
                {sultan.law.length > 0 ? (
                  <div className="space-y-2 sm:space-y-3">
                    {sultan.law.map((l, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group">
                        <div className="w-2 h-2 rounded-full bg-ottoman-red flex-shrink-0 mt-1.5 sm:mt-2 group-hover:bg-ottoman-gold transition-colors" />
                        <span className="font-body text-sm sm:text-base text-foreground">{l}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground font-body text-sm sm:text-base">No notable legal reforms recorded.</p>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SultanProfile;
