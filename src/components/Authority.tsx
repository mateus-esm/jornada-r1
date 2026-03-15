import Image from "next/image";

export default function Authority() {
  const timeline = [
    {
      year: "2021",
      text: "Tentou a prova de residência sem método — e fracassou",
      highlight: false,
    },
    {
      year: "2022",
      text: "Aprovado em uma das especialidades mais concorridas — Hospital Sírio-Libanês, IAMSPE, SUS-SP e Santa Casa",
      highlight: true,
    },
    {
      year: "Hoje",
      text: "Anos observando padrões: conversando com médicos que passavam e com médicos que não conseguiam aprovação",
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
              src="/images/especialista.jpeg"
              alt="Mentor da Jornada do R1"
              width={400}
              height={530}
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#E8630C] rounded-xl px-6 py-3">
              <p className="text-white text-sm font-bold">Aprovado em 2022</p>
              <p className="text-white text-xs opacity-80">
                4 instituições de referência
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
            O MENTOR
          </p>
          <h2 className="text-white text-3xl md:text-[40px] font-normal leading-[1.15] mb-6">
            Eu sei disso porque eu já estive{" "}
            <span className="text-[#E8630C]">exatamente aí.</span>
          </h2>
          <p className="text-[#B2B2B2] text-lg leading-relaxed mb-8">
            O que eu ensino aqui não é opinião. É padrão observado.
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
