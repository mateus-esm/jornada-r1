import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8 px-4 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl tracking-tight mb-4">
              <span className="text-[#E8630C]">JORNADA</span> DO R1
            </h3>
            <p className="text-[#7A7A7A] text-sm leading-relaxed">
              Mentoria completa para aprovação na residência médica. Método,
              clareza e direção para você conquistar sua vaga.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#E8630C] text-sm font-bold tracking-[2px] uppercase mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Metodologia", href: "#metodologia" },
                { label: "O Mentor", href: "#mentor" },
                { label: "Aplicação", href: "#aplicacao" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#7A7A7A] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[#E8630C] text-sm font-bold tracking-[2px] uppercase mb-4">
              CONTATO
            </h4>
            <ul className="space-y-3">
              <li className="text-[#7A7A7A] text-sm">
                contato@jornadador1.com.br
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/georgesales"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white text-sm hover:border-[#E8630C] hover:text-[#E8630C] transition-colors"
                aria-label="Instagram"
                title="@georgesales"
              >
                I
              </a>
            </div>
            <p className="text-[#555] text-xs mt-2">@georgesales</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#272727] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#7A7A7A] text-xs">
              © 2026 Jornada do R1. Todos os direitos reservados.
            </p>

            {/* Powered by Solo Ventures */}
            <div className="flex items-center gap-2">
              <span className="text-[#7A7A7A] text-xs">Powered by</span>
              <Image
                src="/images/solo-ventures-logo.png"
                alt="Solo Ventures"
                width={120}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
