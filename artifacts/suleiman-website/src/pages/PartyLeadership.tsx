import { motion } from "framer-motion";
import { partyLeaders, type PartyLeader } from "@/data/partyLeadership";
import { fadeUp, staggerContainer } from "@/animations/variants";

function LeaderCard({ leader, index }: { leader: PartyLeader; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Portrait */}
      <div className="overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={leader.photo}
          alt={leader.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Glass hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="p-5 relative">
        <h3 className="font-bold text-base leading-snug text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {leader.name}
        </h3>
        <p className="text-sm font-semibold text-primary mb-2">{leader.position}</p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {leader.shortDescription}
        </p>
        <div className="mt-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
          {leader.state}
        </div>
      </div>
    </motion.div>
  );
}

export default function PartyLeadership() {
  const national = partyLeaders.filter((l) => l.level === "National");
  const state = partyLeaders.filter((l) => l.level === "State");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-[#051336] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl translate-x-1/2 translate-y-1/2" />
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
              Nigeria Democratic Congress
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Party <span className="text-primary">Leadership</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Meet the dedicated men and women steering the Nigeria Democratic Congress — from national headquarters to the heart of Zamfara State.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* National Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              National Officers
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              National Leadership
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              The principal officers of the Nigeria Democratic Congress guiding the party's national direction and policy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {national.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} index={0} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border mx-auto w-3/4" />

      {/* State Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              Zamfara State Officers
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Zamfara State Leadership
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              The state executive committee leading NDC's operations and grassroots mobilisation across all 14 local government areas.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {state.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} index={0} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
