export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Diagnóstico Real",
      text: "Tudo começa com um diagnóstico real do seu momento. Entendemos onde você está, quais são os gaps e o que precisa ser priorizado.",
    },
    {
      number: "02",
      icon: "🗺️",
      title: "Plano Claro",
      text: "A partir do diagnóstico, você entra em um plano claro — estruturado, com metas semanais e foco nos temas que realmente importam para a sua prova.",
    },
    {
      number: "03",
      icon: "🔧",
      title: "Ajustes e Correções de Rota",
      text: "Ao longo das 12 semanas, fazemos ajustes contínuos. Não existe plano perfeito no dia 1 — o que existe é um método que se adapta ao seu progresso.",
    },
    {
      number: "04",
      icon: "📈",
      title: "Acompanhamento para Evitar Desvios",
      text: "Monitoramento constante para garantir que você não se perca. Antes mesmo da aprovação, você já terá se tornado o médico que precisa ser para passar.",
    },
  ];

  return (
    <section
      id="jornada"
      className="bg-[#111111] py-20 px-4 md:px-[60px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          A JORNADA
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.15] mb-4 text-center">
          Como funciona na prática?
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[700px] mx-auto mb-14 leading-relaxed">
          Não é um curso para assistir, nem encontros com anjos ou tutores.
          É uma rota para seguir comigo — do diagnóstico até a aprovação.
        </p>

        {/* Timeline */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8630C] transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative md:flex items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"} mb-12 last:mb-0`}
              >
                {/* Card */}
                <div
                  className={`md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}
                >
                  <div className="bg-[rgba(30,30,30,0.9)] border border-[#2a2a2a] rounded-xl p-8">
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-white text-xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#B2B2B2] text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Circle on line */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#E8630C] text-white text-sm font-bold items-center justify-center z-10">
                  {step.number}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
