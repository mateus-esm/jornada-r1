export default function TurningPoint() {
  const punchlines = [
    "Você sabe exatamente o que estudar — e por quê.",
    "Cada revisão tem um propósito. Nada é por acaso.",
    "Você mede o progresso com dados, não com sensações.",
    "Você para de tomar decisões no escuro.",
  ];

  return (
    <section className="relative py-20 px-4 md:px-[60px] bg-[#111111] bg-hexagonal overflow-hidden">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
          A VIRADA
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-light leading-[1.15] mb-4">
          Não é quando você estuda mais.{" "}
          <span className="text-[#E8630C] font-medium">
            É quando você passa a estudar com método.
          </span>
        </h2>
        <p className="text-[#B2B2B2] text-lg max-w-[600px] mx-auto mb-14 leading-relaxed">
          Mesmo antes da aprovação, algo já muda: você deixa de{" "}
          <em>tentar passar</em> e passa a{" "}
          <em>conduzir um processo de aprovação.</em>
        </p>

        <div className="grid md:grid-cols-2 gap-3 text-left">
          {punchlines.map((line, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-[#2a2a2a] rounded-xl px-6 py-5 bg-[rgba(20,20,20,0.6)]"
            >
              <span className="text-[#E8630C] text-xl font-bold shrink-0 mt-0.5">→</span>
              <p className="text-white text-lg font-medium leading-snug">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
