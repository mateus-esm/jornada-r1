export default function Methodology() {
  const steps = [
    {
      letter: "D",
      title: "Diagnóstico",
      text: "Tudo começa entendendo exatamente onde você está. Quais são os gaps reais, o que já funciona e o que precisa mudar antes de qualquer passo.",
    },
    {
      letter: "E",
      title: "Estrutura",
      text: "A partir do diagnóstico, você entra em um plano estruturado — com foco nos temas certos, na ordem certa, sem desperdício de tempo.",
    },
    {
      letter: "R",
      title: "Retenção",
      text: "Sistema de revisão espaçada que garante que o que você estudou esteja disponível no momento da prova — não só no dia seguinte.",
    },
    {
      letter: "P",
      title: "Performance",
      text: "Medição contínua do desempenho real com ajustes estratégicos. Você para de tomar decisões no escuro e passa a conduzir a preparação.",
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
          O MÉTODO
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-light leading-[1.15] mb-4 text-center max-w-[900px] mx-auto">
          O problema da maioria dos médicos não é falta de conteúdo.{" "}
          <span className="text-[#E8630C] font-medium">
            É falta de um sistema.
          </span>
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[600px] mx-auto mb-4 leading-relaxed">
          Por isso, a Jornada do R1 segue o Método D.E.R.P.
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

        <div className="max-w-[700px] mx-auto bg-[rgba(232,99,12,0.08)] border border-[rgba(232,99,12,0.2)] rounded-xl p-8">
          <p className="text-[#E8630C] text-sm font-bold tracking-widest mb-3 text-center">
            O QUE MUDA
          </p>
          <p className="text-white text-lg text-center mb-6">
            Você deixa de estudar no escuro. E passa a:
          </p>
          <div className="space-y-3">
            {[
              "Entender sua evolução",
              "Identificar gargalos com precisão",
              "Ajustar sua estratégia com clareza",
              "Manter consistência até a prova",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#B2B2B2] text-base">
                <span className="text-[#E8630C] font-bold shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
