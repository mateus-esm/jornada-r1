export default function Conflict() {
  const punchlines = [
    {
      label: "O dilema",
      text: "Você estuda. Mas não sabe se está evoluindo.",
    },
    {
      label: "O gap",
      text: "Você erra — mas não sabe exatamente por quê.",
    },
    {
      label: "O ciclo",
      text: "Você tenta ajustar o plano. E o ciclo se repete.",
    },
  ];

  return (
    <section className="bg-black py-20 px-4 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Big headline */}
        <div>
          <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
            O CONFLITO REAL
          </p>
          <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.1] mb-6">
            O seu problema não é falta de esforço.{" "}
            <span className="text-[#E8630C]">É falta de clareza.</span>
          </h2>
          <p className="text-[#B2B2B2] text-lg leading-relaxed mb-6">
            Você vive uma dualidade constante:
          </p>
          <div className="space-y-4">
            <div className="bg-[rgba(232,99,12,0.06)] border-l-[3px] border-l-[#E8630C] pl-5 py-3 pr-4 rounded-r-lg">
              <p className="text-white text-base leading-relaxed">
                Se reduz os plantões, ganha mais tempo para estudar — mas a renda diminui e a insegurança financeira aumenta.
              </p>
            </div>
            <div className="bg-[rgba(232,99,12,0.06)] border-l-[3px] border-l-[#E8630C] pl-5 py-3 pr-4 rounded-r-lg">
              <p className="text-white text-base leading-relaxed">
                Se mantém os plantões, a renda continua — mas o estudo perde consistência e a sensação é de estar ficando para trás.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Punchlines */}
        <div className="space-y-5">
          {punchlines.map((item, i) => (
            <div
              key={i}
              className="border border-[#2a2a2a] rounded-xl p-6 bg-[rgba(20,20,20,0.6)]"
            >
              <span className="text-[#E8630C] text-xs font-bold tracking-[3px] uppercase block mb-2">
                {item.label}
              </span>
              <p className="text-white text-xl md:text-2xl font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
