export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Lucas M.",
      achievement: "Aprovado em Clínica Médica — USP",
      text: "A mentoria mudou completamente minha forma de estudar. Antes eu estudava muito, mas sem direção. Com o método, cada hora rendia o dobro.",
    },
    {
      name: "Dra. Camila R.",
      achievement: "Aprovada em Dermatologia — UNIFESP",
      text: "O acompanhamento semanal foi o diferencial. Ter alguém corrigindo minha rota a cada semana me deu a segurança que eu precisava.",
    },
    {
      name: "Dr. Rafael S.",
      achievement: "Aprovado em Cirurgia Geral — Santa Casa",
      text: "Eu já tinha tentado duas vezes. Na terceira, com a Jornada do R1, entendi que o problema nunca foi esforço — era método.",
    },
    {
      name: "Dra. Ana P.",
      achievement: "Aprovada em Pediatria — IAMSPE",
      text: "O diagnóstico inicial foi revelador. Descobri que estava gastando 40% do meu tempo em temas que quase não caem na prova.",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="bg-black bg-hexagonal py-20 px-4 md:px-[60px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          DEPOIMENTOS
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.15] mb-12 text-center">
          Quem já percorreu a Jornada
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[rgba(30,30,30,0.7)] border border-[#2a2a2a] rounded-xl p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-[#E8630C] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[#B2B2B2] text-base leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-white text-base font-bold">{t.name}</p>
                <p className="text-[#E8630C] text-sm">{t.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
