export default function Methodology() {
  const steps = [
    {
      letter: "D",
      title: "Diagnóstico",
      text: "Entendemos onde você está de verdade: seus gaps reais, o que já funciona e o que precisa mudar antes de qualquer passo.",
    },
    {
      letter: "E",
      title: "Estrutura",
      text: "Você entra em um plano construído para a sua realidade — os temas certos, na ordem certa, sem desperdício de tempo.",
    },
    {
      letter: "R",
      title: "Retenção",
      text: "Sistema de revisão espaçada que garante que o que você estudou esteja disponível no dia da prova — não só no dia seguinte.",
    },
    {
      letter: "P",
      title: "Performance",
      text: "Medição contínua com ajustes estratégicos. Você conduz o processo com dados, não com sensações.",
    },
  ];

  const diferenciais = [
    "A aprovação não depende de genialidade. Depende de um sistema.",
    "Cada hora de estudo tem propósito — nada é aleatório.",
    "Você tem alguém real do seu lado: eu, George Sales, do início ao fim.",
    "A constância vence o talento. E isso é construído, não nato.",
    "Você para de tomar decisões no escuro e passa a conduzir a preparação.",
  ];

  return (
    <section
      id="metodologia"
      className="relative py-20 px-4 md:px-[60px] bg-black overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)]" />
      <div className="absolute inset-0 bg-hexagonal" />

      <div className="relative max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          O MÉTODO
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-light leading-[1.15] mb-4 text-center max-w-[900px] mx-auto">
          O problema não é falta de conteúdo.{" "}
          <span className="text-[#E8630C] font-medium">
            É falta de um sistema.
          </span>
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[600px] mx-auto mb-4 leading-relaxed">
          A Jornada do R1 segue o Método D.E.R.P.:
        </p>
        <p className="text-[#E8630C] text-center text-xl font-semibold tracking-[4px] mb-14">
          Diagnóstico → Estrutura → Retenção → Performance
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-[900px] mx-auto mb-14">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[rgba(20,20,20,0.8)] border-l-[3px] border-l-[#E8630C] rounded-r-lg p-6 backdrop-blur-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8630C] flex items-center justify-center text-white text-xl font-bold shrink-0">
                {step.letter}
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-1">
                  {step.title}
                </h3>
                <p className="text-[#B2B2B2] text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* O que muda */}
        <div className="max-w-[700px] mx-auto bg-[rgba(232,99,12,0.08)] border border-[rgba(232,99,12,0.2)] rounded-xl p-8">
          <p className="text-[#E8630C] text-sm font-bold tracking-widest mb-3 text-center uppercase">
            Por que é diferente de tudo que você já viu
          </p>
          <div className="space-y-4">
            {diferenciais.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-white text-base leading-snug">
                <span className="text-[#E8630C] font-bold shrink-0 mt-0.5">→</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* George Sales direct callout */}
        <div className="max-w-[700px] mx-auto mt-8 flex items-center gap-4 border border-[rgba(232,99,12,0.3)] rounded-xl px-6 py-5 bg-[rgba(20,20,20,0.6)]">
          <span className="text-[#E8630C] text-3xl shrink-0">★</span>
          <p className="text-white text-base leading-relaxed">
            <strong>Mentoria 100% direta com George Sales.</strong> Você não fala com tutor, assistente ou equipe de suporte. Cada sessão, cada ajuste, cada decisão — comigo, do início ao fim.
          </p>
        </div>
      </div>
    </section>
  );
}
