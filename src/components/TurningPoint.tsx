export default function TurningPoint() {
  const pillars = [
    {
      icon: "📋",
      title: "Sabe exatamente o que estudar",
      text: "Sem desperdício de tempo com conteúdos que não caem na sua prova",
    },
    {
      icon: "🧠",
      title: "Entende por que está revisando cada tema",
      text: "Cada revisão tem propósito claro dentro da sua estratégia",
    },
    {
      icon: "📊",
      title: "Mede progresso com clareza",
      text: "Dados reais do seu desempenho, não sensações subjetivas",
    },
    {
      icon: "💡",
      title: "Para de tomar decisões no escuro",
      text: "Cada escolha de estudo é baseada em método, não em ansiedade",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-[60px] bg-[#111111] bg-hexagonal overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          A VIRADA
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-light leading-[1.15] mb-4 text-center max-w-[900px] mx-auto">
          Não é quando você estuda mais.{" "}
          <span className="text-[#E8630C] font-medium">
            É quando você passa a estudar com método.
          </span>
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[700px] mx-auto mb-14 leading-relaxed">
          Mesmo antes da aprovação, algo já muda: você deixa de{" "}
          <em>tentar passar</em> e passa a{" "}
          <em>conduzir um processo de aprovação.</em>
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-[rgba(20,20,20,0.8)] border-l-[3px] border-l-[#E8630C] rounded-r-lg p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8630C] flex items-center justify-center text-xl mb-3">
                {pillar.icon}
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                {pillar.title}
              </h3>
              <p className="text-[#B2B2B2] text-sm leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
