import { motion } from "framer-motion";
import { Brain, Shield, Car } from "lucide-react";
import mentoriaImg from "@/assets/mentoria.jpg";

const pillars = [
  {
    icon: Brain,
    title: "Inteligência Emocional",
    desc: "Gestão de ansiedade e controle emocional para exames e trânsito real.",
  },
  {
    icon: Shield,
    title: "Direção Defensiva",
    desc: "Técnicas avançadas de prevenção e antecipação de riscos.",
  },
  {
    icon: Car,
    title: "Domínio Técnico",
    desc: "Mecânica preventiva e controle total do veículo.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-electric font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Sobre a AHEAD
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Engenharia Comportamental aplicada ao trânsito
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A AHEAD nasceu de uma visão clara: indivíduos só alcançam resultados exponenciais quando colocam o comportamento humano como pilar estratégico. Seja atrás do volante ou na gestão da sua vida, o fator humano dita o sucesso.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              "A AHEAD é a sua parceira para eliminar a imprevisibilidade."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={mentoriaImg}
              alt="Mentoria AHEAD em ação"
              className="rounded-2xl shadow-card w-full object-cover aspect-video"
            />
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;