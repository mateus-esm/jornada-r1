export default function Pricing() {
  const plans = [
    {
      name: "Jornada Essencial",
      priceMain: "12x R$997",
      priceAlt: "ou R$9.970,00 à vista",
      disclaimer: "Acesso por 12 meses",
      features: [
        "Diagnóstico personalizado do seu momento",
        "Plano de estudos estruturado até o final de suas provas",
        "Acompanhamento semanal de desempenho",
        "Simulados com análise de resultado",
        "Grupo exclusivo de mentorados",
        "Acesso à plataforma de estudos",
        "Correções de rota contínuas",
      ],
      highlight: false,
    },
    {
      name: "Jornada Completa",
      priceMain: "12x R$1.497",
      priceAlt: "ou R$14.970,00 à vista",
      disclaimer: "Acesso por 12 meses + bônus exclusivos",
      features: [
        "Tudo do plano Essencial",
        "Mentorias individuais quinzenais (1:1)",
        "Análise aprofundada de simulados",
        "Plano de revisão personalizado",
        "Suporte prioritário via WhatsApp",
        "Acesso antecipado a novos conteúdos",
        "Sessões extras de tira-dúvidas",
        "Bônus: módulo de preparação emocional",
      ],
      highlight: true,
    },
  ];

  return (
    <section id="planos" className="bg-white py-20 px-4 md:px-[60px]">
      <div className="max-w-[960px] mx-auto">
        <p className="text-[#E8630C] text-sm font-bold tracking-[4px] uppercase text-center mb-2">
          PLANOS
        </p>
        <h2 className="text-black text-3xl md:text-4xl font-semibold text-center mb-4">
          Escolha o plano ideal para você
        </h2>
        <p className="text-[#7A7A7A] text-base text-center max-w-[600px] mx-auto mb-12">
          Eu não posso te prometer aprovação. Isso depende da sua execução. Mas
          posso te garantir método, clareza e direção.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-10 ${
                plan.highlight
                  ? "bg-[#F7F7F7] border-2 border-[#E8630C] relative"
                  : "bg-[#F7F7F7] border border-[rgba(29,29,29,0.11)]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8630C] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Mais escolhido
                </div>
              )}

              <h3 className="text-[#060606] text-2xl font-medium mb-4">
                {plan.name}
              </h3>
              <p className="text-[#0E0E0E] text-4xl md:text-5xl font-bold leading-none mb-2">
                {plan.priceMain}
              </p>
              <p className="text-[rgba(0,0,0,0.52)] text-lg font-medium mb-1">
                {plan.priceAlt}
              </p>
              <p className="text-[#999999] text-sm mb-8">{plan.disclaimer}</p>

              <ul className="border-t border-[rgba(0,0,0,0.08)]">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 py-3.5 border-b border-[rgba(0,0,0,0.06)] text-[#333333] text-[15px] leading-relaxed"
                  >
                    <span className="text-[#E8630C] shrink-0 mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block text-center font-semibold text-lg py-4 rounded-lg transition-colors ${
                  plan.highlight
                    ? "bg-[#E8630C] text-white border border-[#E8630C] hover:bg-[#c9530a]"
                    : "bg-transparent text-[#010101] border border-[#DCDCDC] hover:border-[#E8630C] hover:text-[#E8630C]"
                }`}
              >
                Quero entrar na Jornada do R1
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
