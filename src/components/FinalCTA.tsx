export default function FinalCTA() {
  return (
    <section className="bg-[#111111] bg-hexagonal py-20 px-4 md:px-[60px]">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-6">
          DECISÃO
        </p>
        <h2 className="text-white text-3xl md:text-[44px] font-medium leading-[1.15] mb-6">
          Se você já decidiu que a residência é o caminho, a pergunta agora é
          simples:
        </h2>
        <p className="text-[#B2B2B2] text-xl leading-relaxed mb-10">
          Você vai continuar tentando ajustar isso sozinho ou vai caminhar com
          uma rota clara, do começo ao fim?
        </p>
        <a
          href="#planos"
          className="inline-flex bg-[#E8630C] border border-[#E8630C] text-white text-xl font-semibold px-10 py-5 rounded-lg hover:bg-[#c9530a] transition-colors"
        >
          Quero entrar na Jornada do R1
        </a>
        <p className="text-[#7A7A7A] text-sm mt-4">
          7 dias de garantia incondicional
        </p>
      </div>
    </section>
  );
}
