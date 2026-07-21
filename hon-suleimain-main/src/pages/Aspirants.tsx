import { motion } from "framer-motion";
import { aspirants, type Aspirant } from "@/data/aspirants";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { cn } from "@/utils";

const statusConfig: Record<Aspirant["status"], { label: string; className: string }> = {
  Confirmed: {
    label: "Confirmed",
    className: "bg-primary/10 text-primary border-primary/30",
  },
  Cleared: {
    label: "Cleared",
    className: "bg-accent/10 text-accent border-accent/30",
  },
  Pending: {
    label: "Pending Clearance",
    className: "bg-muted text-muted-foreground border-border",
  },
};

function AspirantCard({ aspirant }: { aspirant: Aspirant }) {
  const badge = statusConfig[aspirant.status];

  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
    >
      {/* Portrait */}
      <div className="overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={aspirant.photo}
          alt={aspirant.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Glass hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Status badge */}
        <span
          className={cn(
            "self-start text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wide",
            badge.className
          )}
        >
          {badge.label}
        </span>

        <div>
          <h3 className="font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors duration-300 mb-0.5">
            {aspirant.name}
          </h3>
          <p className="text-sm font-semibold text-primary">{aspirant.office}</p>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide font-medium">
            {aspirant.constituency}
          </p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {aspirant.bio}
        </p>

        {/* View Profile button */}
        <button className="mt-auto w-full py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300">
          View Profile
        </button>
      </div>
    </motion.div>
  );
}

export default function Aspirants() {
  const confirmed = aspirants.filter((a) => a.status === "Confirmed").length;
  const cleared = aspirants.filter((a) => a.status === "Cleared").length;
  const pending = aspirants.filter((a) => a.status === "Pending").length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-[#051336] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 pt-28 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30"
            >
              Zamfara State
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              NDC <span className="text-primary">Aspirants</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Meet the NDC candidates seeking to represent the people of Zamfara State in the National Assembly — leaders committed to service, integrity, and progress.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { value: confirmed, label: "Confirmed" },
                { value: cleared, label: "Cleared" },
                { value: pending, label: "Pending" },
                { value: aspirants.length, label: "Total Aspirants" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Aspirants Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our Candidates
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Each aspirant represents the NDC's commitment to fielding credible, community-rooted candidates across Zamfara State.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aspirants.map((aspirant) => (
              <AspirantCard key={aspirant.id} aspirant={aspirant} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
