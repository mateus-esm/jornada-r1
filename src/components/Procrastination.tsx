export default function Procrastination() {
  return (
    <section className="bg-[#111111] py-20 px-4 md:px-[60px]">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
          O QUE ACONTECE DEPOIS
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.15] mb-8">
          Com o tempo, algo silencioso acontece.{" "}
          <span className="text-[#E8630C]">Você começa a procrastinar.</span>
        </h2>
        <p className="text-[#B2B2B2] text-lg leading-relaxed mb-12">
          Não por preguiça. Mas por falta de direção.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "⏳",
              title: "Adia simulados",
              text: "Para não confirmar que não evoluiu",
            },
            {
              icon: "🔄",
              title: "Posterga revisões",
              text: "Porque não sabe o que priorizar",
            },
            {
              icon: "🧩",
              title: "Ajusta o plano o tempo todo",
              text: 'Tentando "destravar" sem sucesso',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[rgba(30,30,30,0.9)] border border-[#2a2a2a] rounded-xl p-8 text-left"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-white text-lg font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-[#B2B2B2] text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[rgba(232,99,12,0.08)] border border-[rgba(232,99,12,0.2)] rounded-xl p-8">
          <p className="text-white text-xl md:text-2xl font-medium italic">
            &ldquo;Eu estou me esforçando… mas não sei se estou
            avançando.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
