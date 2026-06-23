import LeadPixelTracker from "@/components/LeadPixelTracker";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-black bg-hexagonal px-4 py-20 md:px-[60px] flex items-center">
      <LeadPixelTracker />
      <section className="max-w-[760px] mx-auto text-center">
        <p className="text-[#E8630C] text-sm font-bold tracking-[4px] uppercase mb-4">
          APLICAÇÃO RECEBIDA
        </p>
        <h1 className="text-white text-3xl md:text-[48px] font-medium leading-[1.15] mb-6">
          Obrigado por aplicar para a Jornada do R1.
        </h1>
        <p className="text-[#B2B2B2] text-lg leading-relaxed mb-10">
          Seus dados foram enviados com sucesso. A equipe vai analisar seu
          momento e entrar em contato pelo canal informado no formulário.
        </p>
        <Link
          href="/"
          className="inline-flex bg-[#E8630C] border border-[#E8630C] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#c9530a] transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </section>
    </main>
  );
}
