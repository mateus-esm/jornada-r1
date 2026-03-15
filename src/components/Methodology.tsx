export default function Methodology() {
  const pillars = [
    {
      icon: "🎯",
      title: "Direcionamento Estratégico",
      text: "Cada minuto de estudo é direcionado para os temas que realmente aparecem nas provas de residência da sua especialidade.",
    },
    {
      icon: "📊",
      title: "Medição Contínua",
      text: "Acompanhamento de desempenho com dados reais, não sensações. Você sabe exatamente onde está e para onde precisa ir.",
    },
    {
      icon: "🔄",
      title: "Adaptação Constante",
      text: "O plano se adapta ao seu progresso. Não existe fórmula fixa — existe método que evolui com você.",
    },
    {
      icon: "🧠",
      title: "Revisão Inteligente",
      text: "Sistema de revisão espaçada otimizado para retenção de longo prazo. Você lembra o que estudou na hora da prova.",
    },
    {
      icon: "🤝",
      title: "Acompanhamento Humano",
      text: "Não é só algoritmo. Tem um mentor real acompanhando cada passo, corrigindo desvios e ajustando a rota.",
    },
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
          METODOLOGIA
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-light leading-[1.15] mb-4 text-center max-w-[900px] mx-auto">
          Acreditamos que a aprovação é{" "}
          <span className="text-[#E8630C] font-medium">
            consequência do método.
          </span>
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[600px] mx-auto mb-14 leading-relaxed">
          5 pilares que sustentam a Jornada do R1
        </p>

        <div className="space-y-4 max-w-[800px] mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-[rgba(20,20,20,0.8)] border-l-[3px] border-l-[#E8630C] rounded-r-lg p-6 backdrop-blur-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8630C] flex items-center justify-center text-xl shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-1">
                  {pillar.title}
                </h3>
                <p className="text-[#B2B2B2] text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
