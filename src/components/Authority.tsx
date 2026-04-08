import Image from "next/image";

export default function Authority() {
  const timeline = [
    {
      year: "2021",
      text: "Mesmo com cronograma, cursinho e muitas horas de estudo, não fui aprovado — foi ali que percebi que o problema não era esforço, mas método.",
      highlight: false,
    },
    {
      year: "2022",
      text: "Reconstruí completamente a forma de estudar, tratando a preparação como um processo de diagnóstico, correção e progressão estratégica.",
      highlight: false,
    },
    {
      year: "2022",
      text: "Aprovado em Anestesiologia — Hospital Sírio-Libanês, IAMSPE, SUS-SP, Santa Casa de São Paulo e ENARE (ENAMED).",
      highlight: true,
    },
    {
      year: "Hoje",
      text: "Acompanho médicos em diferentes momentos da preparação, identificando padrões claros entre quem avança e quem permanece travado no processo.",
      highlight: false,
    },
  ];

  return (
    <section id="mentor" className="bg-black py-20 px-4 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[400px]">
            <Image
              src="/images/depois-formatura.jpeg"
              alt="Dr. George Sales de Arruda — Formatura no Hospital Sírio-Libanês"
              width={400}
              height={530}
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#E8630C] rounded-xl px-6 py-3">
              <p className="text-white text-sm font-bold">Aprovado em 2022</p>
              <p className="text-white text-xs opacity-80">
                5 instituições de referência
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
            O MENTOR
          </p>
          <h2 className="text-white text-3xl md:text-[40px] font-normal leading-[1.15] mb-3">
            Eu sei como é estudar muito e ainda assim{" "}
            <span className="text-[#E8630C]">não ser aprovado.</span>
          </h2>

          {/* Direct mentorship callout */}
          <div className="flex items-center gap-3 bg-[rgba(232,99,12,0.10)] border border-[rgba(232,99,12,0.3)] rounded-lg px-4 py-3 mb-6">
            <span className="text-[#E8630C] text-lg shrink-0">★</span>
            <p className="text-white text-sm font-semibold">
              A mentoria é conduzida diretamente por mim, George Sales — do diagnóstico até a sua aprovação.
            </p>
          </div>

          <p className="text-[#B2B2B2] text-base leading-relaxed mb-8">
            Porque já estive exatamente nesse lugar. Hoje, meu trabalho é ajudar
            médicos a sair do estudo baseado em tentativa e esforço e entrar em um
            sistema estruturado de preparação — com método, clareza e direção até
            a aprovação na residência médica.
          </p>

          {/* Timeline */}
          <div className="relative pl-8 border-l border-[#E8630C]">
            {timeline.map((item, i) => (
              <div key={i} className="mb-8 last:mb-0 relative">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-[#E8630C] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span
                  className={`text-sm font-bold ${item.highlight ? "text-[#E8630C]" : "text-[#7A7A7A]"} block mb-1`}
                >
                  {item.year}
                </span>
                <p className="text-white text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
