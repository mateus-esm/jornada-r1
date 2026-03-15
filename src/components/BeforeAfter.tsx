import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section className="bg-[#111111] py-20 px-4 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4 text-center">
          A TRANSFORMAÇÃO
        </p>
        <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.15] mb-12 text-center max-w-[800px] mx-auto">
          Do estudo sem direção à{" "}
          <span className="text-[#E8630C]">conquista da vaga.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Antes */}
          <div className="bg-[rgba(30,30,30,0.7)] border border-[#2a2a2a] rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/antes-estudando.jpeg"
                alt="O início — horas de estudo sem método"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-[#7A7A7A] text-xs font-bold tracking-[3px] uppercase">
                O INÍCIO
              </span>
              <p className="text-white text-lg font-medium mt-2">
                Horas de estudo sem método e a incerteza da aprovação.
              </p>
            </div>
          </div>

          {/* Depois */}
          <div className="bg-[rgba(30,30,30,0.7)] border border-[#E8630C] rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/depois-formatura.jpeg"
                alt="O resultado — formatura no Hospital Sírio-Libanês"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-[#E8630C] text-xs font-bold tracking-[3px] uppercase">
                O RESULTADO
              </span>
              <p className="text-white text-lg font-medium mt-2">
                Formatura no Hospital Sírio-Libanês e a conquista da vaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
