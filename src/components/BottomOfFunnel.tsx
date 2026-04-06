export default function BottomOfFunnel() {
  const stats = [
    { year: "2009", number: "315.902", label: "médicos no Brasil" },
    { year: "2025", number: "598.573", label: "médicos no Brasil" },
    { year: "2035", number: "1.028.120", label: "médicos no Brasil (projeção)" },
  ];

  return (
    <section className="bg-black py-20 px-4 md:px-[60px] relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          O CENÁRIO ATUAL
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.15] mb-6 text-center max-w-[900px] mx-auto">
          Improvisar deixou de ser neutro.{" "}
          <span className="text-[#E8630C]">Errar na estratégia custa posição.</span>
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[700px] mx-auto mb-12 leading-relaxed">
          Em menos de 30 anos, o número de médicos no Brasil deverá crescer cerca de 225%,
          enquanto a população brasileira deve aumentar apenas 17%.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-[rgba(30,30,30,0.5)] border border-[#2a2a2a] rounded-xl p-10"
            >
              <div className="text-[#7A7A7A] text-sm font-bold tracking-widest mb-2 uppercase">
                {stat.year}
              </div>
              <div className="text-[#E8630C] text-4xl md:text-5xl font-bold mb-3">
                {stat.number}
              </div>
              <p className="text-[#B2B2B2] text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto space-y-3 mb-12">
          {[
            "As vagas de residência não acompanham esse crescimento",
            "As provas estão mais específicas e competitivas",
            "O espaço para o médico generalista diminui ano após ano",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-[#B2B2B2] text-base">
              <span className="text-[#E8630C] shrink-0 mt-0.5">•</span>
              {item}
            </div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto bg-[rgba(232,99,12,0.06)] border border-[rgba(232,99,12,0.2)] rounded-xl p-8 mb-10">
          <p className="text-white text-base md:text-lg leading-relaxed">
            Enquanto você trabalha como médico generalista, mais de 500 mil novos médicos entrarão
            no mercado competindo pelas mesmas escalas de plantão que você trabalha hoje.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-[#B2B2B2] text-lg leading-relaxed mb-2">
            A pergunta deixa de ser:
          </p>
          <p className="text-white text-xl font-medium italic mb-4">
            &ldquo;Como estudar melhor?&rdquo;
          </p>
          <p className="text-[#B2B2B2] text-lg leading-relaxed mb-2">
            E passa a ser:
          </p>
          <p className="text-[#E8630C] text-xl font-semibold italic">
            &ldquo;Será que eu estou usando meu tempo do jeito certo?&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
