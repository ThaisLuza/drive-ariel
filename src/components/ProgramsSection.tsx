import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mountain } from "lucide-react";
import { Button } from "../components/ui/button";

const programs = [
  {
    icon: GraduationCap,
    title: "Mentoria First Step",
    subtitle: "Primeira Habilitação B",
    tagline: "Do nervosismo à aprovação.",
    desc: "Focamos em controle emocional, legislação aplicada e a técnica precisa para você conquistar sua liberdade com segurança e calma.",
    plans: [
      { name: "START", hours: "2h", price: "R$ 389,47", highlight: false },
      { name: "ESSENTIAL", hours: "5h", price: "R$ 657,15", highlight: true },
      { name: "MASTER", hours: "10h", price: "R$ 1.255,67", highlight: false },
    ],
    installment: "3x sem juros ou até 6x com juros",
  },
  {
    icon: MapPin,
    title: "Mentoria Urban Driver",
    subtitle: "Aperfeiçoamento Urbano",
    tagline: "Domine a selva de pedra.",
    desc: "Desenvolva agilidade em cruzamentos, confiança em estacionamentos e a capacidade de antecipar erros de terceiros.",
    plans: [
      { name: "START", hours: "2h", price: "R$ 400,00", highlight: false },
      { name: "ESSENTIAL", hours: "5h", price: "R$ 800,00", highlight: true },
      { name: "MASTER", hours: "10h", price: "R$ 1.400,00", highlight: false },
    ],
    installment: "Até 6x sem juros",
  },
  {
    icon: Mountain,
    title: "Mentoria Road Master",
    subtitle: "Especialização Rodoviária",
    tagline: "Autoridade em rodovias.",
    desc: "Treinamento de alta performance em gestão de velocidade, mecânica preventiva e técnicas avançadas de ultrapassagem.",
    plans: [
      { name: "START", hours: "2h", price: "R$ 500,00", highlight: false },
      { name: "ESSENTIAL", hours: "5h", price: "R$ 1.150,00", highlight: true },
      { name: "MASTER", hours: "10h", price: "R$ 2.000,00", highlight: false },
    ],
    installment: "Até 6x sem juros",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programas" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-electric font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Programas de Mentoria
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Escolha seu nível de evolução
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada programa é desenhado com base em Engenharia Comportamental para transformar sua relação com o volante.
          </p>
        </motion.div>

        <div className="space-y-16">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl shadow-card overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                    <prog.icon className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{prog.title}</h3>
                    <p className="text-electric font-medium text-sm">{prog.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg font-heading font-semibold text-navy mb-2 italic">
                  {prog.tagline}
                </p>
                <p className="text-muted-foreground mb-8 max-w-2xl">{prog.desc}</p>

                {/* Plans grid */}
                <div id="planos" className="grid md:grid-cols-3 gap-4">
                  {prog.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-2xl p-6 border-2 transition-all ${
                        plan.highlight
                          ? "border-electric bg-electric/5 shadow-card-hover"
                          : "border-border hover:border-electric/30"
                      }`}
                    >
                      {plan.highlight && (
                        <span className="inline-block text-xs font-heading font-bold text-electric uppercase tracking-wider mb-2">
                          Recomendado
                        </span>
                      )}
                      <h4 className="font-heading font-bold text-lg mb-1">Plano {plan.name}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{plan.hours} de mentoria</p>
                      <p className="text-2xl font-extrabold text-navy mb-4">{plan.price}</p>
                      <Button
                        variant={plan.highlight ? "hero" : "heroOutline"}
                        className="w-full"
                        asChild
                      >
                        <a href="#contato">Reservar</a>
                      </Button>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-4">{prog.installment}**</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;