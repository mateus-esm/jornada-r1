export default function BottomOfFunnel() {
  const stats = [
    { number: "5x", label: "mais médicos que o crescimento da população" },
    { number: "↓", label: "Vagas de residência não acompanham" },
    {
      number: "↑",
      label: "Bônus e critérios adicionais apertam o funil",
    },
  ];

  return (
    <section className="bg-black py-20 px-4 md:px-[60px] relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          O CENÁRIO ATUAL
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.15] mb-6 text-center max-w-[800px] mx-auto">
          Improvisar deixou de ser neutro.{" "}
          <span className="text-[#E8630C]">Errar na estratégia custa posição.</span>
        </h2>
        <p className="text-[#B2B2B2] text-lg text-center max-w-[700px] mx-auto mb-12 leading-relaxed">
          O espaço para o médico generalista diminui ano após ano. Nesse
          cenário, a pergunta deixa de ser &ldquo;como estudar melhor&rdquo; e
          passa a ser: &ldquo;Será que eu estou usando meu tempo do jeito
          certo?&rdquo;
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-[rgba(30,30,30,0.5)] border border-[#2a2a2a] rounded-xl p-10"
            >
              <div className="text-[#E8630C] text-5xl md:text-6xl font-bold mb-4">
                {stat.number}
              </div>
              <p className="text-[#B2B2B2] text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
