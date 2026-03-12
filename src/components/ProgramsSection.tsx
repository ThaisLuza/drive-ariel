import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: GraduationCap,
    title: "Mentoria First Step",
    subtitle: "Primeira Habilitação B",
    tagline: "Do nervosismo à aprovação: a jornada AHEAD começa aqui.",
    desc: "Focamos em controle emocional, legislação aplicada e a técnica precisa para você conquistar sua liberdade com segurança e calma.",
    plans: [
      { name: "START", hours: "2h", price: "R$ 389,47", highlight: false, desc: "Foco em ajustes de precisão e foco emocional." },
      { name: "ESSENTIAL", hours: "5h", price: "R$ 657,15", highlight: true, desc: "Domínio do veículo e aperfeiçoamento de Normas de Circulação." },
      { name: "MASTER", hours: "10h", price: "R$ 1.255,67", highlight: false, desc: "Foco em autonomia. Equilíbrio ideal entre técnica e controle emocional. Segurança total." },
    ],
    installment: "3x sem juros no cartão ou até 6x com juros",
    note: "Após a CNH, você estará apto para nossa Mentoria Urbana.",
  },
  {
    icon: MapPin,
    title: "Mentoria Urban Driver",
    subtitle: "Aperfeiçoamento Urbano",
    tagline: "Domine a selva de pedra.",
    desc: "Desenvolva agilidade em cruzamentos, confiança em estacionamentos e a capacidade de antecipar erros de terceiros. A segurança que você precisa para encarar o trânsito diário de frente.",
    plans: [
      { name: "START", hours: "2h", price: "R$ 400,00", highlight: false, desc: "Checklist de Inspeção Veicular + Avaliação de Perfil de Condução." },
      { name: "ESSENTIAL", hours: "5h", price: "R$ 800,00", highlight: true, desc: "Mentoria de Gestão de Estresse no Trânsito + Dicas de Direção Econômica." },
      { name: "MASTER", hours: "10h", price: "R$ 1.400,00", highlight: false, desc: "Protocolo de Segurança + Mentoria Comportamental para CNH." },
    ],
    installment: "Até 6x sem juros no cartão",
    note: null,
  },
  {
    icon: Mountain,
    title: "Mentoria Road Master",
    subtitle: "Especialização Rodoviária",
    tagline: "Autoridade em rodovias: prepare seu veículo e sua mente.",
    desc: "Treinamento de alta performance focado em gestão de velocidade, mecânica preventiva para longas distâncias e técnicas avançadas de ultrapassagem. A estrada não terá segredos para você.",
    plans: [
      { name: "START", hours: "2h", price: "R$ 500,00", highlight: false, desc: "Blindagem Emocional — Mantenha o foco e a calma, eliminando o nervosismo." },
      { name: "ESSENTIAL", hours: "5h", price: "R$ 1.150,00", highlight: true, desc: "Direção com Propósito — Leia o trânsito com antecedência, antecipando riscos." },
      { name: "MASTER", hours: "10h", price: "R$ 2.000,00", highlight: false, desc: "Técnica Refinada — Domínio do pedal à ultrapassagem + planejamento de percurso." },
    ],
    installment: "Até 6x sem juros no cartão",
    note: null,
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
                      <p className="text-muted-foreground text-sm mb-2">{plan.hours} de mentoria</p>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-3">{plan.desc}</p>
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
                {prog.note && (
                  <p className="text-xs text-electric/80 mt-2 italic">
                    {prog.note}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Para reserva de planos com mais de 10h aula, contate-nos via WhatsApp.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;