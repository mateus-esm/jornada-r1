import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black bg-hexagonal min-h-screen pt-[130px] md:pt-[150px] pb-20 px-4 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text column */}
        <div>
          <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
            JORNADA DO R1
          </p>
          <h1 className="text-white text-3xl md:text-[48px] font-medium leading-[1.15] mb-6">
            Você já decidiu fazer residência médica. O problema é não saber se
            está estudando{" "}
            <span className="text-[#E8630C]">do jeito certo.</span>
          </h1>
          <p className="text-white text-base font-medium mb-4">
            Você reduziu plantões, investiu em cursinho e separou tempo para
            estudar. Mesmo assim, o progresso não é claro — e o tempo continua
            passando em um mercado cada vez mais competitivo.
          </p>
          <p className="text-[#B2B2B2] text-sm mb-8">
            Se você sente que está se esforçando, mas ainda não confia no
            caminho que está seguindo, essa página é para você.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Método claro de estudo para residência",
              "Acompanhamento personalizado por 12 semanas",
              "Diagnóstico real do seu momento atual",
              "Correções de rota e ajustes contínuos",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white text-base"
              >
                <span className="text-[#E8630C] font-bold mt-0.5 shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/558597115137?text=Quero%20conhecer%20a%20jornada%20do%20R1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8630C] border border-[#E8630C] text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-[#c9530a] transition-colors text-center"
            >
              Quero entrar na Jornada do R1
            </a>
            <a
              href="#jornada"
              className="border border-[#E8630C] text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-[rgba(232,99,12,0.12)] transition-colors text-center"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="relative flex items-end justify-center">
          <div className="relative w-full max-w-[480px]">
            <Image
              src="/images/george-arruda.jpeg"
              alt="Dr. George Sales de Arruda — Mentor da Jornada do R1"
              width={480}
              height={640}
              className="w-full rounded-lg object-cover"
              priority
            />
            {/* Bio card overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[rgba(0,0,0,0.82)] border border-[rgba(232,99,12,0.3)] rounded-lg p-4 backdrop-blur-sm">
              <p className="text-white text-sm leading-relaxed">
                <strong>Aprovado em 2022</strong> em Anestesiologia — Hospital
                Sírio-Libanês, IAMSPE, SUS-SP, Santa Casa e ENARE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
